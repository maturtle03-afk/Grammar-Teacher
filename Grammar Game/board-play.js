const BOARD_LENGTH = 35;
const PATH_COLUMNS = 5;
const PLAYER_PROFILES_KEY = "grammarGamePlayerProfiles";
const DINO_EMOJIS = ["🦕", "🦖", "🐲", "🐉", "🐊", "🦎", "🐢", "🐍"];
const QUIZ_TIME_LIMIT_SECONDS = 30;
const INCORRECT_REVIEW_SECONDS = 60;
const SPECIAL_CELLS = {
  extra: [4, 11, 18, 26, 32],
  reroll: [6, 15, 24, 30],
  back: [9, 20, 28],
};
const TURN_QUESTION_BANK = {
  beginner: [
    {
      type: "mc",
      text: "Which word is a noun?",
      options: ["run", "quickly", "dog", "happy"],
      answerIndex: 2,
      explanation: "A noun names a person, place, thing, or idea. 'Dog' is a thing, so it is the noun.",
    },
    {
      type: "fib",
      text: "Type the verb in this sentence: We jump high.",
      answer: "jump",
      explanation: "A verb is an action word. In this sentence, 'jump' is the action that 'we' do.",
    },
    {
      type: "mc",
      text: "Which word is an adjective?",
      options: ["green", "sing", "slowly", "chair"],
      answerIndex: 0,
      explanation: "An adjective modifies (changes) a noun or pronoun. 'Green' modifies a noun by adding color detail, so it is an adjective.",
    },
    {
      type: "fib",
      text: "Type the noun in this sentence: The cat naps.",
      answer: "cat",
      explanation: "A noun names a person, place, thing, or idea. 'Cat' is the named thing in the sentence.",
    },
    {
      type: "mc",
      text: "Which word is an adverb?",
      options: ["quickly", "tree", "yellow", "jump"],
      answerIndex: 0,
      explanation: "An adverb modifies (changes) a verb, adjective, or another adverb. 'Quickly' modifies how an action happens.",
    },
    {
      type: "fib",
      text: "Type the adjective in this sentence: The red ball bounced.",
      answer: "red",
      explanation: "An adjective modifies (changes) a noun or pronoun. 'Red' modifies the noun 'ball'.",
    },
    {
      type: "mc",
      text: "Which word is a verb?",
      options: ["teacher", "dance", "blue", "slowly"],
      answerIndex: 1,
      explanation: "A verb shows action or a state of being. 'Dance' is the action word.",
    },
    {
      type: "fib",
      text: "Replace the noun with a pronoun: Lila reads. ___ reads.",
      answer: "She",
      answers: ["She", "she"],
      explanation: "A pronoun replaces a noun to avoid repetition. 'She' replaces the noun 'Lila'.",
    },
  ],
  intermediate: [
    {
      type: "mc",
      text: "Choose the pronoun.",
      options: ["teacher", "they", "desk", "music"],
      answerIndex: 1,
      explanation: "A pronoun replaces a noun to avoid repetition. 'They' can stand in for a group of people or things.",
    },
    {
      type: "fib",
      text: "Type the comparative adjective for 'bright'.",
      answer: "brighter",
      explanation: "Comparative adjectives compare two things. For one-syllable adjectives like 'bright', add '-er'.",
    },
    {
      type: "mc",
      text: "Which sentence uses a linking verb?",
      options: [
        "They raced quickly.",
        "She is my friend.",
        "We kicked the ball.",
        "I drew a map.",
      ],
      answerIndex: 1,
      explanation: "A linking verb connects the subject to information about it. In 'She is my friend,' 'is' links 'She' to 'my friend'.",
    },
    {
      type: "fib",
      text: "Replace the noun with a pronoun: Marcus is ready. ___ is ready.",
      answer: "He",
      answers: ["He", "he"],
      explanation: "A pronoun can replace the noun 'Marcus'. The correct subject pronoun is 'He'.",
    },
    {
      type: "mc",
      text: "Which sentence uses an adverb?",
      options: ["The turtle is green.", "They ran quickly.", "The desk is heavy.", "Clouds are white."],
      answerIndex: 1,
      explanation: "An adverb modifies (changes) a verb, adjective, or another adverb. 'Quickly' modifies how they ran.",
    },
    {
      type: "fib",
      text: "Complete the sentence with a linking verb: The soup ___ hot.",
      answer: "is",
      answers: ["is", "Is"],
      explanation: "A linking verb connects the subject to a description. 'Is' links 'soup' to 'hot'.",
    },
    {
      type: "mc",
      text: "Choose the comparative adjective.",
      options: ["bright", "brightest", "brighter", "more bright"],
      answerIndex: 2,
      explanation: "Comparative adjectives compare two things. For 'bright', the comparative form is 'brighter'.",
    },
    {
      type: "fib",
      text: "Replace the nouns with a pronoun: I saw Maria and Ben. I saw ___.",
      answer: "them",
      answers: ["them", "Them"],
      explanation: "A pronoun replaces nouns to avoid repetition. 'Them' replaces 'Maria and Ben' as an object.",
    },
  ],
  advanced: [
    {
      type: "mc",
      text: "Which sentence is in present perfect tense?",
      options: ["She walks home.", "She walked home.", "She has walked home.", "She will walk home."],
      answerIndex: 2,
      explanation: "Present perfect uses 'has/have' + past participle. 'She has walked home.' follows that pattern.",
    },
    {
      type: "fib",
      text: "Change to future tense: They studied.",
      answer: "They will study",
      answers: ["They will study", "they will study"],
      explanation: "Future tense is commonly formed with 'will' + base verb. So 'studied' becomes 'will study'.",
    },
    {
      type: "mc",
      text: "Choose the sentence with a proper noun.",
      options: ["The city is loud.", "London is loud.", "The crowd is loud.", "The school is loud."],
      answerIndex: 1,
      explanation: "A proper noun names a specific person, place, or thing and is capitalized. 'London' is a specific place.",
    },
    {
      type: "fib",
      text: "Complete with a subject: ___ solved the equation.",
      answer: "She",
      answers: ["She", "He", "They", "I", "she", "he", "they", "i"],
      explanation: "Every sentence needs a subject to show who or what performs the action. A pronoun like 'She' can be the subject.",
    },
    {
      type: "mc",
      text: "Which sentence is in future tense?",
      options: ["They travel tomorrow.", "They traveled yesterday.", "They will travel tomorrow.", "They have traveled."],
      answerIndex: 2,
      explanation: "Future tense is often formed with 'will' + base verb. 'They will travel tomorrow' is future tense.",
    },
    {
      type: "fib",
      text: "Change to present perfect: We finish homework.",
      answer: "We have finished homework",
      answers: ["We have finished homework", "we have finished homework", "We have finished homework.", "we have finished homework."],
      explanation: "Present perfect uses 'has/have' + past participle. 'Finish' becomes 'have finished'.",
    },
    {
      type: "mc",
      text: "Which sentence has a proper noun?",
      options: ["The mountain is high.", "Mount Everest is high.", "The river is cold.", "The ocean is deep."],
      answerIndex: 1,
      explanation: "A proper noun names a specific person, place, or thing and is capitalized. 'Mount Everest' is a specific place.",
    },
    {
      type: "fib",
      text: "Complete with a subject pronoun: ___ were invited to the ceremony.",
      answer: "They",
      answers: ["They", "they"],
      explanation: "A sentence needs a subject. 'They' is a subject pronoun that fits the plural verb 'were'.",
    },
  ],
};

let gamePlayers = [];
let currentPlayerIndex = 0;
let pendingReroll = false;
let gameEnded = false;
let activeSession = null;
let isAnimatingMove = false;
let activeTurnQuestion = null;
let turnQuizIntervalId = null;
let turnQuizResolve = null;
let turnQuizAnswered = false;
let turnQuizReviewIntervalId = null;
let turnQuestionHistory = new Map();

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

function updatePlayerProfileResult(winner) {
  if (!activeSession) return;
  const participants = Array.isArray(activeSession.participants)
    ? activeSession.participants
    : [{ name: activeSession.playerName, grade: activeSession.playerGrade, profileId: activeSession.playerProfileId }];

  const profiles = loadProfiles();

  participants.forEach((participant) => {
    if (!participant || !participant.name) return;
    const index = profiles.findIndex((profile) =>
      String(profile.name || "").toLowerCase() === String(participant.name).toLowerCase(),
    );
    if (index < 0) return;

    const profile = profiles[index];
    profile.wins = Number(profile.wins || 0);
    profile.losses = Number(profile.losses || 0);
    if (!Array.isArray(profile.history)) profile.history = [];

    const didWin = winner && winner.isHuman && winner.name === participant.name;
    if (didWin) {
      profile.wins += 1;
    } else {
      profile.losses += 1;
    }

    profile.history.unshift({
      date: new Date().toISOString(),
      result: didWin ? "win" : "loss",
      winner: winner ? winner.name : "Unknown",
      grade: participant.grade || activeSession.playerGrade || "K-2",
      mode: "board",
    });

    profile.history = profile.history.slice(0, 30);
    profile.lastPlayedGrade = participant.grade || profile.lastPlayedGrade;
    profiles[index] = profile;
  });

  saveProfiles(profiles);
}

function loadSession() {
  const raw = sessionStorage.getItem("dinoBoardSession");
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function createDefaultSession() {
  return {
    groupName: "Dino Team",
    groupYear: "K-2",
    players: [{ id: 0, name: "Player 1", year: "K-2", level: "beginner", position: 0, score: 0, avatar: "🦕" }],
  };
}

function setupPlayers() {
  turnQuestionHistory = new Map();
  const session = loadSession() || createDefaultSession();
  activeSession = session;
  const groupTitle = document.getElementById("groupTitle");
  if (groupTitle) {
    const displayGroupName = session.groupName || "Dino Team";
    groupTitle.textContent = `${displayGroupName} • Jurassic Board`;
  }

  gamePlayers = (session.players || []).map((player, index) => ({
    id: index,
    name: player.name || `Player ${index + 1}`,
    year: player.year || "K-2",
    level: player.level || "beginner",
    position: 0,
    score: 0,
    isHuman: player.isHuman !== false,
    profileId: player.profileId || null,
    avatar: player.avatar || DINO_EMOJIS[index % DINO_EMOJIS.length],
  }));

  if (!gamePlayers.length) {
    gamePlayers = [{ id: 0, name: "Player 1", year: "K-2", level: "beginner", position: 0, score: 0, avatar: "🦕" }];
  }
}

function renderBoard(options = {}) {
  const { highlightIndex = null } = options;
  const boardTrackEl = document.getElementById("boardTrack");
  if (!boardTrackEl) return;
  boardTrackEl.innerHTML = "";

  renderSceneryLayer(boardTrackEl);

  const cellsLayer = document.createElement("div");
  cellsLayer.className = "board-cells-layer";
  boardTrackEl.appendChild(cellsLayer);

  const boardRect = boardTrackEl.getBoundingClientRect();
  const points = buildCandyPathPoints(BOARD_LENGTH, boardRect.width, boardRect.height);

  for (let index = 0; index < BOARD_LENGTH; index += 1) {
    const point = points[index];
    const cell = document.createElement("div");
    cell.className = "board-cell";
    cell.style.left = `${point.x}px`;
    cell.style.top = `${point.y}px`;

    if (index === 0) cell.classList.add("start");
    if (index === BOARD_LENGTH - 1) cell.classList.add("finish");
    if (SPECIAL_CELLS.extra.includes(index)) cell.classList.add("special-extra");
    if (SPECIAL_CELLS.reroll.includes(index)) cell.classList.add("special-reroll");
    if (SPECIAL_CELLS.back.includes(index)) cell.classList.add("special-back");
    if (index === highlightIndex) cell.classList.add("landing-space");
    cell.setAttribute("aria-label", `Space ${index + 1}`);

    const tokens = document.createElement("div");
    tokens.className = "tokens";
    const playersOnCell = gamePlayers.filter((player) => player.position === index);
    playersOnCell.forEach((player) => {
      const dot = document.createElement("span");
      dot.className = "player-space-token";
      if (player.id === currentPlayerIndex) {
        dot.classList.add("current-turn-token");
      }
      dot.textContent = player.avatar || "🦕";
      tokens.appendChild(dot);
    });
    cell.appendChild(tokens);

    cellsLayer.appendChild(cell);
  }

  drawBoardPath(boardTrackEl, points);
}

function renderSceneryLayer(boardTrackEl) {
  const sceneryLayer = document.createElement("div");
  sceneryLayer.className = "board-scenery-layer";

  boardTrackEl.appendChild(sceneryLayer);
}

function drawBoardPath(boardTrackEl, points) {
  const boardRect = boardTrackEl.getBoundingClientRect();
  if (!boardRect.width || !boardRect.height) return;
  if (points.length < 2) return;

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("class", "board-path-svg");
  svg.setAttribute("viewBox", `0 0 ${boardRect.width} ${boardRect.height}`);
  svg.setAttribute("preserveAspectRatio", "none");

  const defs = document.createElementNS(svgNS, "defs");
  const gradient = document.createElementNS(svgNS, "linearGradient");
  gradient.setAttribute("id", "boardPathCandy");
  gradient.setAttribute("x1", "0%");
  gradient.setAttribute("y1", "0%");
  gradient.setAttribute("x2", "100%");
  gradient.setAttribute("y2", "100%");

  const stop1 = document.createElementNS(svgNS, "stop");
  stop1.setAttribute("offset", "0%");
  stop1.setAttribute("stop-color", "#fda4af");
  const stop2 = document.createElementNS(svgNS, "stop");
  stop2.setAttribute("offset", "35%");
  stop2.setAttribute("stop-color", "#fde68a");
  const stop3 = document.createElementNS(svgNS, "stop");
  stop3.setAttribute("offset", "70%");
  stop3.setAttribute("stop-color", "#93c5fd");
  const stop4 = document.createElementNS(svgNS, "stop");
  stop4.setAttribute("offset", "100%");
  stop4.setAttribute("stop-color", "#86efac");

  gradient.appendChild(stop1);
  gradient.appendChild(stop2);
  gradient.appendChild(stop3);
  gradient.appendChild(stop4);
  defs.appendChild(gradient);
  svg.appendChild(defs);

  const pathData = buildSmoothPath(points);

  const glowLine = document.createElementNS(svgNS, "path");
  glowLine.setAttribute("class", "board-path-glow");
  glowLine.setAttribute("d", pathData);

  const mainLine = document.createElementNS(svgNS, "path");
  mainLine.setAttribute("class", "board-path-line");
  mainLine.setAttribute("d", pathData);

  const stripeLine = document.createElementNS(svgNS, "path");
  stripeLine.setAttribute("class", "board-path-stripe");
  stripeLine.setAttribute("d", pathData);

  svg.appendChild(glowLine);
  svg.appendChild(mainLine);
  svg.appendChild(stripeLine);
  boardTrackEl.prepend(svg);
}

function buildCandyPathPoints(count, width, height) {
  const rows = Math.ceil(count / PATH_COLUMNS);
  const leftEdge = 74;
  const rightEdge = Math.max(leftEdge + 320, width - 74);
  const topEdge = 86;
  const bottomEdge = Math.max(topEdge + 700, height - 86);

  const colStep = PATH_COLUMNS > 1 ? (rightEdge - leftEdge) / (PATH_COLUMNS - 1) : 0;
  const rowStep = rows > 1 ? (bottomEdge - topEdge) / (rows - 1) : 0;

  const points = Array.from({ length: count }, () => ({ x: leftEdge, y: topEdge }));

  for (let index = 0; index < count; index += 1) {
    const row = Math.floor(index / PATH_COLUMNS);
    const col = index % PATH_COLUMNS;
    const goingRight = row % 2 === 0;

    const x = goingRight
      ? leftEdge + col * colStep
      : rightEdge - col * colStep;
    const y = topEdge + row * rowStep;

    points[index] = { x, y };
  }

  return points;
}

function buildSmoothPath(points) {
  if (!points.length) return "";
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

  let path = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i += 1) {
    const prev = points[i - 1];
    const current = points[i];
    const controlX = (prev.x + current.x) / 2;
    const controlY = (prev.y + current.y) / 2;
    path += ` Q ${prev.x} ${prev.y}, ${controlX} ${controlY}`;
  }

  const last = points[points.length - 1];
  path += ` T ${last.x} ${last.y}`;
  return path;
}

function renderPlayers() {
  const playerListEl = document.getElementById("playerList");
  if (!playerListEl) return;
  playerListEl.innerHTML = "";

  gamePlayers.forEach((player, index) => {
    const card = document.createElement("div");
    card.className = "player-card" + (index === currentPlayerIndex ? " active" : "");

    const main = document.createElement("div");
    main.className = "player-main";

    const token = document.createElement("span");
    token.className = "player-token-emoji";
    token.textContent = player.avatar || "🦕";
    const name = document.createElement("span");
    name.className = "player-name";
    name.textContent = player.name;

    main.appendChild(token);
    main.appendChild(name);

    const meta = document.createElement("div");
    meta.className = "player-meta";

    const pos = document.createElement("span");
    pos.className = "player-pos";
    pos.textContent = `Space ${player.position + 1}`;

    const level = document.createElement("span");
    level.className = "player-score";
    level.textContent = player.level;

    meta.appendChild(pos);
    meta.appendChild(level);

    card.appendChild(main);
    card.appendChild(meta);
    playerListEl.appendChild(card);
  });
}

function updateTurnText(text) {
  const turnIndicatorEl = document.getElementById("turnIndicator");
  if (turnIndicatorEl) turnIndicatorEl.textContent = text;
}

function updateCurrentTurnPrompt() {
  const current = gamePlayers[currentPlayerIndex];
  if (!current) return;
  updateTurnText(`${current.name}'s turn — answer a grammar card to roll.`);
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function mapYearToQuestionLevel(year) {
  if (year === "6-8") return "intermediate";
  if (year === "9-12") return "advanced";
  return "beginner";
}

function normalizeAnswer(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[.!?]+$/g, "");
}

function getTurnQuestionElements() {
  return {
    card: document.getElementById("turnQuizCard"),
    player: document.getElementById("turnQuizPlayer"),
    timer: document.getElementById("turnQuizTimer"),
    grade: document.getElementById("turnQuizGrade"),
    text: document.getElementById("turnQuizText"),
    type: document.getElementById("turnQuizType"),
    options: document.getElementById("turnQuizOptions"),
    inputWrap: document.getElementById("turnQuizInputWrap"),
    input: document.getElementById("turnQuizInput"),
    submit: document.getElementById("turnQuizSubmit"),
    feedback: document.getElementById("turnQuizFeedback"),
    explanation: document.getElementById("turnQuizExplanation"),
    continueBtn: document.getElementById("turnQuizContinue"),
  };
}

function setTurnQuizVisibility(visible) {
  const { card } = getTurnQuestionElements();
  if (!card) return;
  card.classList.toggle("is-visible", visible);
  card.setAttribute("aria-hidden", String(!visible));
}

function stopTurnQuizTimer() {
  if (!turnQuizIntervalId) return;
  clearInterval(turnQuizIntervalId);
  turnQuizIntervalId = null;
}

function stopTurnQuizReviewTimer() {
  if (!turnQuizReviewIntervalId) return;
  clearInterval(turnQuizReviewIntervalId);
  turnQuizReviewIntervalId = null;
}

function getExpectedAnswerText(question) {
  if (!question) return "";
  if (question.type === "mc") {
    return question.options?.[question.answerIndex] || "";
  }
  const answerList = question.answers?.length ? question.answers : [question.answer];
  return answerList.filter(Boolean).join(" / ");
}

function getProvidedAnswerText(question, elements) {
  if (!question) return "";
  if (question.type === "mc") {
    if (question.selectedIndex === null || question.selectedIndex === undefined) return "No option selected";
    return question.options?.[question.selectedIndex] || "";
  }
  return elements.input ? elements.input.value.trim() : "";
}

function buildIncorrectExplanation(question, providedAnswer) {
  const expected = getExpectedAnswerText(question) || "(no answer available)";
  const trimmedProvided = String(providedAnswer || "").trim() || "No answer entered";
  const why = question.explanation || "The correct answer matches the grammar rule tested in this question.";
  return `Your answer: ${trimmedProvided}. Correct answer: ${expected}. Why: ${why}`;
}

function finishIncorrectReview() {
  stopTurnQuizReviewTimer();
  closeTurnQuizCard();
  resolveTurnQuestion({ allowed: false, reason: "incorrect" });
}

function startIncorrectReview(question, elements, providedAnswer) {
  if (!question) return;

  if (question.type === "mc") {
    elements.options.querySelectorAll(".turn-quiz-option").forEach((button, index) => {
      button.disabled = true;
      if (index === question.answerIndex) {
        button.classList.add("is-correct");
      }
      if (question.selectedIndex === index && index !== question.answerIndex) {
        button.classList.add("is-incorrect");
      }
    });
  } else if (elements.input) {
    elements.input.disabled = true;
  }

  if (elements.submit) {
    elements.submit.disabled = true;
    elements.submit.textContent = "Reviewing explanation...";
  }

  if (elements.explanation) {
    elements.explanation.textContent = buildIncorrectExplanation(question, providedAnswer);
    elements.explanation.hidden = false;
  }

  if (elements.continueBtn) {
    elements.continueBtn.hidden = false;
    elements.continueBtn.disabled = false;
  }

  let secondsRemaining = INCORRECT_REVIEW_SECONDS;
  if (elements.timer) elements.timer.textContent = `${secondsRemaining}s review`;

  stopTurnQuizReviewTimer();
  turnQuizReviewIntervalId = setInterval(() => {
    secondsRemaining -= 1;
    if (elements.timer) elements.timer.textContent = `${Math.max(secondsRemaining, 0)}s review`;
    if (secondsRemaining > 0) return;
    finishIncorrectReview();
  }, 1000);
}

function closeTurnQuizCard() {
  stopTurnQuizTimer();
  stopTurnQuizReviewTimer();

  const elements = getTurnQuestionElements();
  if (elements.submit) {
    elements.submit.disabled = false;
    elements.submit.textContent = "Submit answer";
  }
  if (elements.explanation) {
    elements.explanation.hidden = true;
    elements.explanation.textContent = "";
  }
  if (elements.continueBtn) {
    elements.continueBtn.hidden = true;
    elements.continueBtn.disabled = false;
  }
  if (elements.input) {
    elements.input.disabled = false;
  }

  activeTurnQuestion = null;
  turnQuizAnswered = false;
  setTurnQuizVisibility(false);
}

function buildQuestionForPlayer(player) {
  const level = mapYearToQuestionLevel(player.year);
  const pool = TURN_QUESTION_BANK[level] || TURN_QUESTION_BANK.beginner;
  const playerKey = player.profileId || `${player.id}-${player.name}`;
  const historyKey = `${playerKey}:${level}`;
  const currentHistory = turnQuestionHistory.get(historyKey) || {
    seenIndexes: new Set(),
    lastIndex: null,
  };

  const allIndexes = pool.map((_, index) => index);
  const nonRepeatIndexes = allIndexes.filter((index) => pool.length <= 1 || index !== currentHistory.lastIndex);

  let candidateIndexes = nonRepeatIndexes.filter((index) => !currentHistory.seenIndexes.has(index));
  if (!candidateIndexes.length) {
    currentHistory.seenIndexes = new Set();
    candidateIndexes = nonRepeatIndexes.length ? nonRepeatIndexes : allIndexes;
  }

  const selectedIndex = candidateIndexes[Math.floor(Math.random() * candidateIndexes.length)];
  const template = pool[selectedIndex];

  currentHistory.seenIndexes.add(selectedIndex);
  currentHistory.lastIndex = selectedIndex;
  turnQuestionHistory.set(historyKey, currentHistory);

  return {
    ...template,
    options: Array.isArray(template.options) ? [...template.options] : [],
    answers: Array.isArray(template.answers) ? [...template.answers] : [],
    level,
    selectedIndex: null,
  };
}

function renderTurnQuestionCard(player) {
  const els = getTurnQuestionElements();
  if (!els.card) return;

  activeTurnQuestion = buildQuestionForPlayer(player);
  turnQuizAnswered = false;

  els.player.textContent = `${player.name}, your grammar challenge`;
  els.grade.textContent = `Grade level: ${player.year || "K-2"}`;
  els.text.textContent = activeTurnQuestion.text;
  els.type.textContent = activeTurnQuestion.type === "mc" ? "Multiple choice" : "Fill in the blank";
  els.feedback.textContent = "";
  els.feedback.classList.remove("success", "fail");
  if (els.explanation) {
    els.explanation.hidden = true;
    els.explanation.textContent = "";
  }
  if (els.continueBtn) {
    els.continueBtn.hidden = true;
    els.continueBtn.disabled = false;
  }
  if (els.submit) {
    els.submit.disabled = false;
    els.submit.textContent = "Submit answer";
  }
  if (els.input) els.input.value = "";

  els.options.innerHTML = "";

  if (activeTurnQuestion.type === "mc") {
    els.inputWrap.style.display = "none";
    activeTurnQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "btn secondary turn-quiz-option";
      button.textContent = option;
      button.addEventListener("click", () => {
        activeTurnQuestion.selectedIndex = index;
        els.options.querySelectorAll(".turn-quiz-option").forEach((item) => item.classList.remove("is-selected"));
        button.classList.add("is-selected");
      });
      els.options.appendChild(button);
    });
  } else {
    els.inputWrap.style.display = "block";
    setTimeout(() => {
      if (els.input) els.input.focus();
    }, 30);
  }

  setTurnQuizVisibility(true);
}

function evaluateTurnQuestionAnswer() {
  if (!activeTurnQuestion) return false;
  if (activeTurnQuestion.type === "mc") {
    return activeTurnQuestion.selectedIndex === activeTurnQuestion.answerIndex;
  }

  const { input } = getTurnQuestionElements();
  const provided = normalizeAnswer(input ? input.value : "");
  const expectedAnswers = activeTurnQuestion.answers.length
    ? activeTurnQuestion.answers
    : [activeTurnQuestion.answer];
  return expectedAnswers.map((answer) => normalizeAnswer(answer)).includes(provided);
}

function resolveTurnQuestion(result) {
  if (!turnQuizResolve) return;
  const resolver = turnQuizResolve;
  turnQuizResolve = null;
  resolver(result);
}

function startTurnQuizTimer() {
  const { timer, feedback } = getTurnQuestionElements();
  let secondsRemaining = QUIZ_TIME_LIMIT_SECONDS;
  if (timer) timer.textContent = `${secondsRemaining}s`;

  stopTurnQuizTimer();
  turnQuizIntervalId = setInterval(() => {
    secondsRemaining -= 1;
    if (timer) timer.textContent = `${Math.max(secondsRemaining, 0)}s`;
    if (secondsRemaining > 0) return;

    stopTurnQuizTimer();
    if (turnQuizAnswered) return;
    turnQuizAnswered = true;
    if (feedback) {
      feedback.textContent = "Time is up! Turn skipped.";
      feedback.classList.remove("success");
      feedback.classList.add("fail");
    }

    setTimeout(() => {
      closeTurnQuizCard();
      resolveTurnQuestion({ allowed: false, reason: "timeout" });
    }, 520);
  }, 1000);
}

function submitTurnQuestionAnswer() {
  if (!activeTurnQuestion || !turnQuizResolve || turnQuizAnswered) return;
  const elements = getTurnQuestionElements();
  const { feedback } = elements;
  turnQuizAnswered = true;
  stopTurnQuizTimer();

  const isCorrect = evaluateTurnQuestionAnswer();
  const providedAnswer = getProvidedAnswerText(activeTurnQuestion, elements);
  if (feedback) {
    feedback.classList.remove("success", "fail");
    feedback.classList.add(isCorrect ? "success" : "fail");
    feedback.textContent = isCorrect
      ? "Correct! You can roll now."
      : "Not correct. Review the explanation below.";
  }

  if (!isCorrect) {
    startIncorrectReview(activeTurnQuestion, elements, providedAnswer);
    return;
  }

  setTimeout(() => {
    closeTurnQuizCard();
    resolveTurnQuestion({
      allowed: isCorrect,
      reason: isCorrect ? "correct" : "incorrect",
    });
  }, isCorrect ? 320 : 560);
}

function runTurnQuestionGate(player) {
  return new Promise((resolve) => {
    turnQuizResolve = resolve;
    renderTurnQuestionCard(player);
    startTurnQuizTimer();
  });
}

function applySpecial(player) {
  let delta = 0;

  if (SPECIAL_CELLS.extra.includes(player.position)) {
    delta = Math.min(2, BOARD_LENGTH - 1 - player.position);
    return {
      delta,
      message: "Landed on a jungle boost 🌴 and moved +2!",
    };
  }

  if (SPECIAL_CELLS.reroll.includes(player.position)) {
    pendingReroll = true;
    return {
      delta: 0,
      message: "Found a fossil bone 🦴 — roll again!",
    };
  }

  if (SPECIAL_CELLS.back.includes(player.position)) {
    delta = -Math.min(2, player.position);
    return {
      delta,
      message: "Hit a rock trap 🪨 and moved back 2.",
    };
  }

  return {
    delta: 0,
    message: "",
  };
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function setControlsDisabled(disabled) {
  const rollBtn = document.getElementById("rollDiceBtn");
  const resetBtn = document.getElementById("resetPlayBtn");
  if (rollBtn) rollBtn.disabled = disabled;
  if (resetBtn) resetBtn.disabled = disabled;
}

function showRollBadge(text, durationMs = 1800, extraClass = "") {
  const area = document.getElementById("diceAnimationArea");
  if (!area) return;

  const badge = document.createElement("div");
  badge.className = `roll-badge ${extraClass}`.trim();
  badge.textContent = text;
  badge.style.animationDuration = `${durationMs}ms`;
  area.appendChild(badge);

  setTimeout(() => {
    badge.remove();
  }, durationMs);
}

async function animatePlayerMovement(player, steps, direction = 1, speedMs = 260) {
  for (let step = 0; step < steps; step += 1) {
    player.position = Math.max(0, Math.min(BOARD_LENGTH - 1, player.position + direction));
    renderPlayers();
    renderBoard();
    await sleep(speedMs);
  }
}

function nextTurn() {
  if (!pendingReroll) {
    currentPlayerIndex = (currentPlayerIndex + 1) % gamePlayers.length;
  }
  pendingReroll = false;
  updateCurrentTurnPrompt();
}

function showRollingDice(finalValue) {
  const animationArea = document.getElementById("diceAnimationArea");
  if (!animationArea) return;

  const dice = document.createElement("div");
  dice.className = `rolling-dice face-${finalValue}`;

  const face = document.createElement("div");
  face.className = "dice-face";
  for (let i = 0; i < 9; i += 1) {
    const pip = document.createElement("span");
    pip.className = "dice-pip";
    face.appendChild(pip);
  }
  dice.appendChild(face);

  animationArea.appendChild(dice);

  // After bouncing settles (2.8s into the 3.5s animation), show the number and keep visible
  setTimeout(() => {
    dice.classList.add("show-number");
  }, 2800);

  // Remove the dice element after full animation + extended display + fade completes
  setTimeout(() => {
    dice.remove();
  }, 6000);
}

async function handleRoll() {
  if (gameEnded || isAnimatingMove) return;

  isAnimatingMove = true;
  setControlsDisabled(true);

  const diceResultEl = document.getElementById("diceResult");
  const current = gamePlayers[currentPlayerIndex];
  if (diceResultEl) {
    diceResultEl.textContent = `${current.name}, answer your grammar card to unlock your roll.`;
  }

  const quizResult = await runTurnQuestionGate(current);
  if (!quizResult.allowed) {
    const skippedMessage =
      quizResult.reason === "timeout"
        ? `${current.name} ran out of time and was skipped.`
        : `${current.name} missed the grammar card and was skipped.`;
    if (diceResultEl) diceResultEl.textContent = skippedMessage;
    showRollBadge(skippedMessage, 2600, "guide-badge");
    await sleep(650);
    nextTurn();
    renderPlayers();
    renderBoard();
    isAnimatingMove = false;
    setControlsDisabled(false);
    return;
  }

  const value = rollDice();

  showRollingDice(value);
  if (diceResultEl) diceResultEl.textContent = `${current.name} is rolling...`;
  await sleep(3000);

  showRollBadge(`${current.name} rolled ${value}`);
  if (diceResultEl) diceResultEl.textContent = `${current.name} rolled ${value}.`;
  await sleep(220);

  const forwardSteps = Math.min(value, BOARD_LENGTH - 1 - current.position);
  await animatePlayerMovement(current, forwardSteps, 1, 240);

  let message = `${current.name} rolled ${value}.`;

  const specialResult = applySpecial(current);
  if (specialResult.delta > 0) {
    await animatePlayerMovement(current, specialResult.delta, 1, 220);
  } else if (specialResult.delta < 0) {
    await animatePlayerMovement(current, Math.abs(specialResult.delta), -1, 220);
  }
  if (specialResult.message) {
    message += ` ${specialResult.message}`;
    showRollBadge(specialResult.message, 3200, "guide-badge");
  }

  if (current.position >= BOARD_LENGTH - 1) {
    gameEnded = true;
    updateTurnText(`${current.name} wins! 🏁`);
    if (diceResultEl) diceResultEl.textContent = `${message} ${current.name} reached the finish!`;
    updatePlayerProfileResult(current);
    renderPlayers();
    renderBoard({ highlightIndex: current.position });
    isAnimatingMove = false;
    setControlsDisabled(false);
    return;
  }

  if (diceResultEl) diceResultEl.textContent = message;
  renderPlayers();
  renderBoard({ highlightIndex: current.position });
  await sleep(450);
  nextTurn();
  renderPlayers();
  renderBoard();

  isAnimatingMove = false;
  setControlsDisabled(false);
}

function resetRace() {
  closeTurnQuizCard();
  turnQuestionHistory = new Map();
  gamePlayers.forEach((player) => {
    player.position = 0;
    player.score = 0;
  });
  currentPlayerIndex = 0;
  pendingReroll = false;
  gameEnded = false;
  updateCurrentTurnPrompt();
  const diceResultEl = document.getElementById("diceResult");
  if (diceResultEl) diceResultEl.textContent = "Race reset. Roll to start again!";
  renderPlayers();
  renderBoard();
}

window.addEventListener("DOMContentLoaded", () => {
  setupPlayers();
  renderPlayers();
  renderBoard();
  updateCurrentTurnPrompt();

  window.addEventListener("resize", renderBoard);

  const rollBtn = document.getElementById("rollDiceBtn");
  if (rollBtn) rollBtn.addEventListener("click", handleRoll);

  const resetBtn = document.getElementById("resetPlayBtn");
  if (resetBtn) resetBtn.addEventListener("click", resetRace);

  const turnQuizSubmitBtn = document.getElementById("turnQuizSubmit");
  if (turnQuizSubmitBtn) turnQuizSubmitBtn.addEventListener("click", submitTurnQuestionAnswer);

  const turnQuizContinueBtn = document.getElementById("turnQuizContinue");
  if (turnQuizContinueBtn) {
    turnQuizContinueBtn.addEventListener("click", () => {
      if (!turnQuizAnswered || !turnQuizResolve) return;
      finishIncorrectReview();
    });
  }

  const turnQuizInput = document.getElementById("turnQuizInput");
  if (turnQuizInput) {
    turnQuizInput.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      submitTurnQuestionAnswer();
    });
  }
});
