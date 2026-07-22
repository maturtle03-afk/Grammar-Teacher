const MAX_PLAYERS = 3;
const SCHOOL_YEARS = ["K-2", "3-5", "6-8", "9-12"];
const BOARD_LENGTH = 20;
const PLAYER_PROFILES_KEY = "grammarGamePlayerProfiles";
const SESSION_KEY = "dinoBoardSession";
const BOT_NAMES = ["Rex", "Pebble", "Spike", "Fern", "Claw", "Terra"];
const DINO_EMOJIS = ["🦕", "🦖", "🐲", "🐉", "🐊", "🦎", "🐢", "🐍"];
const GRAMMAR_ELEMENTS = [
  "noun",
  "pronoun",
  "verb",
  "adjective",
  "adverb",
  "preposition",
  "conjunction",
  "interjection",
  "article",
];

const setupState = {
  authMode: "new",
  playerName: "",
  playerGrade: "K-2",
  registeredPlayers: [],
  lastRemovedPlayer: null,
};

function mapYearToLevel(year) {
  if (year === "K-2" || year === "3-5") return "beginner";
  if (year === "6-8") return "intermediate";
  return "advanced";
}

function loadProfiles() {
  const raw = localStorage.getItem(PLAYER_PROFILES_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveProfiles(profiles) {
  localStorage.setItem(PLAYER_PROFILES_KEY, JSON.stringify(profiles));
}

function emptyGrammarStats() {
  return GRAMMAR_ELEMENTS.reduce((acc, element) => {
    acc[element] = { correct: 0, incorrect: 0 };
    return acc;
  }, {});
}

function normalizeProfile(profile) {
  const normalized = { ...profile };
  if (!normalized.grammarStats || typeof normalized.grammarStats !== "object") {
    normalized.grammarStats = emptyGrammarStats();
  }
  GRAMMAR_ELEMENTS.forEach((element) => {
    if (!normalized.grammarStats[element]) {
      normalized.grammarStats[element] = { correct: 0, incorrect: 0 };
    }
  });
  if (!Array.isArray(normalized.history)) normalized.history = [];
  normalized.wins = Number(normalized.wins || 0);
  normalized.losses = Number(normalized.losses || 0);
  normalized.name = normalized.name || "Player";
  normalized.id = normalized.id || normalized.name.toLowerCase().replace(/\s+/g, "-");
  normalized.dinoEmoji = DINO_EMOJIS.includes(normalized.dinoEmoji) ? normalized.dinoEmoji : DINO_EMOJIS[0];
  return normalized;
}

function upsertProfileByName(name) {
  const cleanName = (name || "").trim();
  const profiles = loadProfiles().map(normalizeProfile);
  const existingIndex = profiles.findIndex((profile) => profile.name.toLowerCase() === cleanName.toLowerCase());

  if (existingIndex >= 0) {
    return { profiles, profile: profiles[existingIndex], index: existingIndex };
  }

  const created = normalizeProfile({
    id: cleanName.toLowerCase().replace(/\s+/g, "-"),
    name: cleanName,
    wins: 0,
    losses: 0,
    history: [],
    grammarStats: emptyGrammarStats(),
    lastPlayedGrade: "K-2",
    dinoEmoji: DINO_EMOJIS[0],
  });
  profiles.push(created);
  return { profiles, profile: created, index: profiles.length - 1 };
}

function getStrengths(profile) {
  const stats = profile.grammarStats || {};
  const withAttempts = GRAMMAR_ELEMENTS.map((element) => {
    const correct = Number(stats[element]?.correct || 0);
    const incorrect = Number(stats[element]?.incorrect || 0);
    const total = correct + incorrect;
    const ratio = total ? correct / total : null;
    return { element, correct, incorrect, total, ratio };
  }).filter((row) => row.total > 0);

  if (!withAttempts.length) {
    return {
      best: "Not enough data yet",
      improve: "Not enough data yet",
    };
  }

  withAttempts.sort((a, b) => (b.ratio - a.ratio) || (b.total - a.total));
  const best = withAttempts[0];
  const improve = withAttempts[withAttempts.length - 1];

  return {
    best: `${best.element} (${Math.round(best.ratio * 100)}%)`,
    improve: `${improve.element} (${Math.round(improve.ratio * 100)}%)`,
  };
}

function renderProfileSummary(profile) {
  const summaryEl = document.getElementById("playerSummary");
  if (!summaryEl) return;
  if (!profile) {
    summaryEl.textContent = "";
    return;
  }

  const strengths = getStrengths(profile);
  summaryEl.innerHTML = [
    `<strong>${profile.name}</strong>`,
    `Wins: ${profile.wins} | Losses: ${profile.losses}`,
    `Most successful: ${strengths.best}`,
    `Needs improvement: ${strengths.improve}`,
  ].join("<br />");
}

function populateReturningPlayers() {
  const selectEl = document.getElementById("returningPlayerSelect");
  if (!selectEl) return;
  const profiles = loadProfiles().map(normalizeProfile);
  selectEl.innerHTML = "";

  if (!profiles.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No saved players yet";
    option.selected = true;
    selectEl.appendChild(option);
    renderProfileSummary(null);
    return;
  }

  profiles
    .sort((a, b) => {
      const emojiCompare = String(a.dinoEmoji || "").localeCompare(String(b.dinoEmoji || ""));
      if (emojiCompare !== 0) return emojiCompare;
      return a.name.localeCompare(b.name);
    })
    .forEach((profile, index) => {
      const option = document.createElement("option");
      option.value = profile.name;
      option.textContent = `${profile.dinoEmoji || "🦕"} ${profile.name}`;
      if (index === 0) option.selected = true;
      selectEl.appendChild(option);
    });

  const first = profiles.find((p) => p.name === selectEl.value) || profiles[0];
  renderProfileSummary(first);
}

function getTakenDinoEmojis(excludeProfileId = null) {
  return new Set(
    setupState.registeredPlayers
      .filter((player) => !excludeProfileId || player.profileId !== excludeProfileId)
      .map((player) => player.avatar)
      .filter(Boolean),
  );
}

function populateDinoEmojiSelect(preferredEmoji = "") {
  const emojiEl = document.getElementById("dinoEmoji");
  if (!emojiEl) return;

  const previousValue = emojiEl.value;
  const selected = preferredEmoji || previousValue || DINO_EMOJIS[0];
  const taken = getTakenDinoEmojis();

  emojiEl.innerHTML = "";
  DINO_EMOJIS.forEach((emoji) => {
    const option = document.createElement("option");
    option.value = emoji;
    option.textContent = `${emoji} Dino`;
    option.disabled = taken.has(emoji) && emoji !== selected;
    if (emoji === selected) option.selected = true;
    emojiEl.appendChild(option);
  });

  if (!emojiEl.value || emojiEl.selectedOptions[0]?.disabled) {
    const firstAvailable = Array.from(emojiEl.options).find((option) => !option.disabled);
    if (firstAvailable) emojiEl.value = firstAvailable.value;
  }
}

function syncDinoEmojiForReturningSelection() {
  const returningEl = document.getElementById("returningPlayerSelect");
  if (!returningEl) {
    populateDinoEmojiSelect();
    return;
  }

  const profiles = loadProfiles().map(normalizeProfile);
  const selectedProfile = profiles.find((profile) => profile.name === returningEl.value) || null;
  const preferred = selectedProfile?.dinoEmoji || "";
  populateDinoEmojiSelect(preferred);
}

function buildPlayersForSession(humanName, humanGrade, humanAvatar) {
  const used = new Set([humanName.toLowerCase()]);
  const botName = BOT_NAMES.find((candidate) => !used.has(candidate.toLowerCase())) || "Rex";
  const botAvatar = DINO_EMOJIS.find((emoji) => emoji !== humanAvatar) || DINO_EMOJIS[0];
  return [
    {
      id: 0,
      name: humanName,
      year: humanGrade,
      level: mapYearToLevel(humanGrade),
      position: 0,
      score: 0,
      isHuman: true,
      avatar: humanAvatar,
    },
    {
      id: 1,
      name: botName,
      year: humanGrade,
      level: mapYearToLevel(humanGrade),
      position: 0,
      score: 0,
      isHuman: false,
      avatar: botAvatar,
    },
  ];
}

function renderBoardPreview() {
  const boardTrackEl = document.getElementById("boardTrack");
  if (!boardTrackEl) return;
  boardTrackEl.innerHTML = "";

  for (let i = 0; i < BOARD_LENGTH; i += 1) {
    const cell = document.createElement("div");
    cell.className = "board-cell";
    if (i === 0) cell.classList.add("start");
    if (i === BOARD_LENGTH - 1) cell.classList.add("finish");
    if ([4, 10, 15].includes(i)) cell.classList.add("special-extra");
    if ([6, 13].includes(i)) cell.classList.add("special-reroll");
    if ([8, 17].includes(i)) cell.classList.add("special-back");
    cell.textContent = String(i + 1);
    boardTrackEl.appendChild(cell);
  }
}

function renderSignedPlayers() {
  const listEl = document.getElementById("signedPlayersList");
  const bannerEl = document.getElementById("readyBanner");
  if (!listEl || !bannerEl) return;

  listEl.innerHTML = "";
  if (!setupState.registeredPlayers.length) {
    const li = document.createElement("li");
    li.className = "signed-player-item";
    li.textContent = "No players added yet.";
    listEl.appendChild(li);
  } else {
    setupState.registeredPlayers.forEach((player, index) => {
      const li = document.createElement("li");
      li.className = "signed-player-item";

      const text = document.createElement("span");
      text.className = "signed-player-text";
      text.textContent = `${index + 1}. ${player.avatar || "🦕"} ${player.name} (${player.grade})`;

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "signed-player-remove";
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => {
        removePlayerFromQueue(index);
      });

      li.appendChild(text);
      li.appendChild(removeBtn);
      listEl.appendChild(li);
    });
  }

  bannerEl.hidden = setupState.registeredPlayers.length < MAX_PLAYERS;
  populateDinoEmojiSelect();
}

function renderUndoRemove() {
  const undoRow = document.getElementById("undoRemoveRow");
  const undoText = document.getElementById("undoRemoveText");
  if (!undoRow || !undoText) return;

  if (!setupState.lastRemovedPlayer) {
    undoRow.hidden = true;
    undoText.textContent = "";
    return;
  }

  undoRow.hidden = false;
  undoText.textContent = `${setupState.lastRemovedPlayer.name} removed from this game list.`;
}

function removePlayerFromQueue(index) {
  const messageEl = document.getElementById("authMessage");
  if (index < 0 || index >= setupState.registeredPlayers.length) return;

  const playerToRemove = setupState.registeredPlayers[index];
  const shouldRemove = window.confirm(
    `Remove ${playerToRemove.name} from this game list?`
  );
  if (!shouldRemove) return;

  const [removed] = setupState.registeredPlayers.splice(index, 1);
  setupState.lastRemovedPlayer = { ...removed, originalIndex: index };
  renderSignedPlayers();
  renderUndoRemove();

  if (messageEl) {
    messageEl.textContent = `${removed.name} removed from this game list.`;
    messageEl.classList.remove("incorrect");
    messageEl.classList.add("correct");
  }
}

function undoRemovePlayer() {
  const messageEl = document.getElementById("authMessage");
  const removed = setupState.lastRemovedPlayer;
  if (!removed) return;

  if (setupState.registeredPlayers.length >= MAX_PLAYERS) {
    if (messageEl) {
      messageEl.textContent = "This game list is full. Remove someone before undoing.";
      messageEl.classList.remove("correct");
      messageEl.classList.add("incorrect");
    }
    return;
  }

  const duplicate = setupState.registeredPlayers.some(
    (player) => player.profileId === removed.profileId,
  );
  if (duplicate) {
    setupState.lastRemovedPlayer = null;
    renderUndoRemove();
    return;
  }

  const insertAt = Math.min(
    Math.max(Number(removed.originalIndex) || 0, 0),
    setupState.registeredPlayers.length,
  );

  const restored = {
    profileId: removed.profileId,
    name: removed.name,
    grade: removed.grade,
    level: removed.level,
    avatar: removed.avatar,
    isHuman: true,
  };

  setupState.registeredPlayers.splice(insertAt, 0, restored);
  setupState.lastRemovedPlayer = null;
  renderSignedPlayers();
  renderUndoRemove();

  if (messageEl) {
    messageEl.textContent = `${restored.name} restored to this game list.`;
    messageEl.classList.remove("incorrect");
    messageEl.classList.add("correct");
  }
}

function clearNewPlayerFields() {
  const nameEl = document.getElementById("playerName");
  const gradeEl = document.getElementById("playerGrade");
  if (nameEl) {
    nameEl.value = "";
    nameEl.focus();
  }
  if (gradeEl) {
    gradeEl.value = "K-2";
  }
}

function getSelectedPlayerRecord() {
  const gradeEl = document.getElementById("playerGrade");
  const playerNameEl = document.getElementById("playerName");
  const returningEl = document.getElementById("returningPlayerSelect");
  const emojiEl = document.getElementById("dinoEmoji");

  const selectedGrade = gradeEl ? gradeEl.value : "K-2";
  const selectedEmoji = emojiEl ? emojiEl.value : "";
  let chosenName = "";

  if (setupState.authMode === "returning") {
    chosenName = returningEl ? returningEl.value.trim() : "";
    if (!chosenName) return null;
  } else {
    chosenName = playerNameEl ? playerNameEl.value.trim() : "";
    if (!chosenName) return null;
  }

  if (!selectedEmoji || !DINO_EMOJIS.includes(selectedEmoji)) {
    return null;
  }

  const { profiles, profile, index } = upsertProfileByName(chosenName);
  profile.lastPlayedGrade = selectedGrade;
  profile.dinoEmoji = selectedEmoji;
  profiles[index] = profile;
  saveProfiles(profiles);

  return {
    profileId: profile.id,
    name: profile.name,
    grade: selectedGrade,
    level: mapYearToLevel(selectedGrade),
    avatar: selectedEmoji,
    isHuman: true,
  };
}

function addPlayerToSessionQueue() {
  const messageEl = document.getElementById("authMessage");
  const record = getSelectedPlayerRecord();
  if (!messageEl) return false;

  if (!record) {
    messageEl.textContent = setupState.authMode === "returning"
      ? "Select returning player, grade, and dino emoji, then Add Player."
      : "Type player name, choose grade and dino emoji, then Add Player.";
    messageEl.classList.remove("correct");
    messageEl.classList.add("incorrect");
    return false;
  }

  const alreadyAdded = setupState.registeredPlayers.some(
    (player) => player.profileId === record.profileId,
  );
  if (alreadyAdded) {
    messageEl.textContent = `${record.name} is already in this game list.`;
    messageEl.classList.remove("correct");
    messageEl.classList.add("incorrect");
    return false;
  }

  const emojiTaken = setupState.registeredPlayers.some(
    (player) => player.avatar === record.avatar,
  );
  if (emojiTaken) {
    messageEl.textContent = `${record.avatar} is already taken. Pick a different dino emoji.`;
    messageEl.classList.remove("correct");
    messageEl.classList.add("incorrect");
    return false;
  }

  if (setupState.registeredPlayers.length >= MAX_PLAYERS) {
    messageEl.textContent = "You already have 3 players. Start the game!";
    messageEl.classList.remove("correct");
    messageEl.classList.add("incorrect");
    return false;
  }

  setupState.registeredPlayers.push(record);
  renderSignedPlayers();
  const savedProfiles = loadProfiles().map(normalizeProfile);
  const savedProfile = savedProfiles.find((profile) => profile.name.toLowerCase() === record.name.toLowerCase()) || null;
  renderProfileSummary(savedProfile);

  messageEl.textContent = `${record.name} added. ${setupState.registeredPlayers.length}/${MAX_PLAYERS} players ready.`;
  messageEl.classList.remove("incorrect");
  messageEl.classList.add("correct");

  if (setupState.authMode === "new") {
    clearNewPlayerFields();
  }
  return true;
}

function buildSessionPlayers() {
  if (!setupState.registeredPlayers.length) return [];

  const humans = setupState.registeredPlayers.map((player, index) => ({
    id: index,
    name: player.name,
    year: player.grade,
    level: player.level,
    position: 0,
    score: 0,
    isHuman: true,
    profileId: player.profileId,
    avatar: player.avatar,
  }));

  if (humans.length === 1) {
    const solo = humans[0];
    const withBot = buildPlayersForSession(solo.name, solo.year, solo.avatar);
    withBot[0].profileId = solo.profileId;
    return withBot;
  }

  return humans;
}

function setAuthMode(mode) {
  setupState.authMode = mode;
  const newRow = document.getElementById("newPlayerRow");
  const returningRow = document.getElementById("returningPlayerRow");
  const playerNameEl = document.getElementById("playerName");
  const returningEl = document.getElementById("returningPlayerSelect");

  if (newRow) newRow.hidden = mode !== "new";
  if (returningRow) returningRow.hidden = mode !== "returning";

  if (playerNameEl) playerNameEl.required = mode === "new";
  if (returningEl) returningEl.required = mode === "returning";

  const chips = document.querySelectorAll("[data-auth-mode]");
  chips.forEach((chip) => {
    chip.classList.toggle("chip-active", chip.dataset.authMode === mode);
  });

  if (mode === "returning") {
    populateReturningPlayers();
    syncDinoEmojiForReturningSelection();
  } else {
    renderProfileSummary(null);
    populateDinoEmojiSelect();
  }
}

function setupAuthToggle() {
  const chips = document.querySelectorAll("[data-auth-mode]");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const mode = chip.dataset.authMode === "returning" ? "returning" : "new";
      setAuthMode(mode);
    });
  });
}

function setupReturningSelect() {
  const selectEl = document.getElementById("returningPlayerSelect");
  if (!selectEl) return;
  selectEl.addEventListener("change", () => {
    const profiles = loadProfiles().map(normalizeProfile);
    const selected = profiles.find((profile) => profile.name === selectEl.value) || null;
    renderProfileSummary(selected);
    syncDinoEmojiForReturningSelection();
  });
}

function loadTestPlayers() {
  const messageEl = document.getElementById("authMessage");
  const playerNameEl = document.getElementById("playerName");
  
  // Create 3 demo players with different grades
  setupState.registeredPlayers = [
    {
      profileId: "demo-alex",
      name: "Alex",
      grade: "3-5",
      level: "beginner",
      avatar: "🦕",
      isHuman: true,
    },
    {
      profileId: "demo-jordan",
      name: "Jordan",
      grade: "6-8",
      level: "intermediate",
      avatar: "🦖",
      isHuman: true,
    },
    {
      profileId: "demo-casey",
      name: "Casey",
      grade: "9-12",
      level: "advanced",
      avatar: "🐲",
      isHuman: true,
    },
  ];

  renderSignedPlayers();
  renderUndoRemove();

  // Remove the required attribute so form can submit without player name input
  if (playerNameEl) {
    playerNameEl.required = false;
  }

  if (messageEl) {
    messageEl.textContent = "Test players loaded! Ready to start the game.";
    messageEl.classList.remove("incorrect");
    messageEl.classList.add("correct");
  }
}

function setupTestPlayersButton() {
  const btn = document.getElementById("loadTestPlayersBtn");
  if (!btn) return;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    loadTestPlayers();
  });
}

function setupAuthForm() {
  const form = document.getElementById("authForm");
  const messageEl = document.getElementById("authMessage");
  const addPlayerBtn = document.getElementById("addPlayerBtn");
  if (!form || !messageEl) return;

  if (addPlayerBtn) {
    addPlayerBtn.addEventListener("click", () => {
      addPlayerToSessionQueue();
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!setupState.registeredPlayers.length) {
      addPlayerToSessionQueue();
    }

    if (!setupState.registeredPlayers.length) {
      messageEl.textContent = "Add at least one player before starting.";
      messageEl.classList.remove("correct");
      messageEl.classList.add("incorrect");
      return;
    }

    const sessionPlayers = buildSessionPlayers();

    const payload = {
      playerProfileId: setupState.registeredPlayers[0]?.profileId || null,
      playerName: setupState.registeredPlayers[0]?.name || "Player 1",
      playerGrade: setupState.registeredPlayers[0]?.grade || "K-2",
      participants: setupState.registeredPlayers,
      players: sessionPlayers,
      createdAt: Date.now(),
    };

    sessionStorage.setItem(SESSION_KEY, JSON.stringify(payload));

    messageEl.textContent = "Starting Jurassic Board...";
    messageEl.classList.remove("incorrect");
    messageEl.classList.add("correct");

    window.location.href = "board-play.html";
  });
}

function setupUndoRemove() {
  const undoBtn = document.getElementById("undoRemoveBtn");
  if (!undoBtn) return;
  undoBtn.addEventListener("click", undoRemovePlayer);
}

window.addEventListener("DOMContentLoaded", () => {
  setupAuthToggle();
  setupReturningSelect();
  setupTestPlayersButton();
  setupAuthForm();
  setupUndoRemove();
  populateDinoEmojiSelect();
  setAuthMode("new");
  renderSignedPlayers();
  renderUndoRemove();
});
