/* global Sortable */
// SECTION: Data
const grammarData = {
  beginner: {
    adverbs: {
      title: "Adverbs",
      description:
        "An adverb modifies (changes) a verb, adjective, or another adverb.",
      questions: [
        {
          type: "mc",
          text: "Which word is an adverb?",
          options: ["slow", "slowly", "slowest", "slowness"],
          answerIndex: 1,
          explanation: "'Slowly' modifies the verb by showing how the action happens, so it is an adverb.",
        },
        {
          type: "fib",
          text: "Type the adverb: She sang loudly.",
          answer: "loudly",
          explanation: "'Loudly' modifies the verb by showing how she sang.",
        },
        {
          type: "mc",
          text: "Which sentence uses an adverb?",
          options: ["The red bike is fast.", "They ran quickly.", "The puppy is small.", "We saw a movie."],
          answerIndex: 1,
          explanation: "'Quickly' modifies the verb 'ran', so it is an adverb.",
        },
        {
          type: "fib",
          text: "Type the adverb: The turtle moved slowly.",
          answer: "slowly",
          explanation: "'Slowly' tells how the turtle moved.",
        },
      ],
    },
    nouns: {
      title: "Nouns",
      description: "A noun names a person, place, thing, or idea.",
      questions: [
        {
          type: "mc",
          text: "Which word is a noun?",
          options: ["run", "happy", "cat", "quickly"],
          answerIndex: 2,
          explanation: "'Cat' is a thing, so it is a noun.",
        },
        {
          type: "fib",
          text: "Type the noun in this sentence: The dog barked.",
          answer: "dog",
          explanation: "'Dog' is the name of an animal.",
        },
        {
          type: "mc",
          text: "Which word is a noun?",
          options: ["happy", "table", "jump", "quickly"],
          answerIndex: 1,
          explanation: "'Table' names a thing, so it is a noun.",
        },
        {
          type: "fib",
          text: "Type the noun: My sister read a book.",
          answer: "book",
          explanation: "'Book' names a thing.",
        },
      ],
    },
    verbs: {
      title: "Verbs",
      description: "A verb shows action or a state of being.",
      questions: [
        {
          type: "mc",
          text: "Which word is a verb?",
          options: ["blue", "jump", "desk", "slow"],
          answerIndex: 1,
          explanation: "'Jump' is an action, so it is a verb.",
        },
        {
          type: "fib",
          text: "Type the verb in this sentence: We play outside.",
          answer: "play",
          explanation: "'Play' is the action in the sentence.",
        },
        {
          type: "mc",
          text: "Which word is a verb?",
          options: ["dance", "blue", "chair", "quiet"],
          answerIndex: 0,
          explanation: "'Dance' shows action, so it is a verb.",
        },
        {
          type: "fib",
          text: "Type the verb: Birds fly high.",
          answer: "fly",
          explanation: "'Fly' is the action in the sentence.",
        },
      ],
    },
    adjectives: {
      title: "Adjectives",
      description: "An adjective modifies (changes) a noun or pronoun.",
      questions: [
        {
          type: "mc",
          text: "Which word is an adjective?",
          options: ["quickly", "rabbit", "green", "run"],
          answerIndex: 2,
          explanation: "'Green' modifies a noun by giving more detail, so it is an adjective.",
        },
        {
          type: "fib",
          text: "Type the adjective: The tall tree moved.",
          answer: "tall",
          explanation: "'Tall' modifies the noun 'tree' by adding detail.",
        },
        {
          type: "mc",
          text: "Which word is an adjective?",
          options: ["quickly", "under", "shiny", "run"],
          answerIndex: 2,
          explanation: "'Shiny' modifies a noun by describing it.",
        },
        {
          type: "fib",
          text: "Type the adjective: We saw a bright star.",
          answer: "bright",
          explanation: "'Bright' describes the noun 'star'.",
        },
      ],
    },
  },
  intermediate: {
    pronouns: {
      title: "Pronouns",
      description: "A pronoun replaces a noun to avoid repetition.",
      questions: [
        {
          type: "mc",
          text: "Which word is a pronoun?",
          options: ["Sam", "they", "teacher", "desk"],
          answerIndex: 1,
          explanation: "'They' replaces a noun, so it is a pronoun.",
        },
        {
          type: "fib",
          text: "Replace the noun with a pronoun: Maria is kind. ___ is kind.",
          answer: "She is kind.",
          explanation: "'She' replaces 'Maria'.",
        },
        {
          type: "mc",
          text: "Which option uses a pronoun correctly?",
          options: ["Him are ready.", "They are ready.", "Them is ready.", "Her are ready."],
          answerIndex: 1,
          explanation: "'They' correctly replaces a noun and matches 'are'.",
        },
        {
          type: "fib",
          text: "Replace the noun with a pronoun: The dogs are loud. ___ are loud.",
          answer: "they",
          explanation: "'They' replaces the plural noun 'dogs'.",
        },
      ],
    },
    nouns: {
      title: "Concrete & abstract nouns",
      description: "Concrete nouns can be seen or touched; abstract nouns are ideas.",
      questions: [
        {
          type: "mc",
          text: "Which is an abstract noun?",
          options: ["happiness", "table", "river", "phone"],
          answerIndex: 0,
          explanation: "'Happiness' is an idea, not a physical thing.",
        },
        {
          type: "fib",
          text: "Type the concrete noun: The music filled the room with joy.",
          answer: "room",
          explanation: "'Room' is a place you can physically be in.",
        },
        {
          type: "mc",
          text: "Which word is a concrete noun?",
          options: ["freedom", "desk", "hope", "kindness"],
          answerIndex: 1,
          explanation: "'Desk' is a physical thing you can touch.",
        },
        {
          type: "fib",
          text: "Type the abstract noun: Her bravery inspired everyone.",
          answer: "bravery",
          explanation: "'Bravery' is an idea or quality, not a physical object.",
        },
      ],
    },
    verbs: {
      title: "Action & linking verbs",
      description: "Some verbs show action, others link the subject to more information.",
      questions: [
        {
          type: "mc",
          text: "Which sentence uses a linking verb?",
          options: [
            "They danced all night.",
            "She is a great teacher.",
            "We walked home.",
            "He built a house.",
          ],
          answerIndex: 1,
          explanation: "'Is' links 'she' to 'a great teacher'.",
        },
        {
          type: "fib",
          text: "Type the verb: The leaves were yellow.",
          answer: "were",
          explanation: "'Were' links 'leaves' to 'yellow'.",
        },
        {
          type: "mc",
          text: "Which sentence uses an action verb?",
          options: ["The soup smells great.", "The dog chased the ball.", "The flowers are bright.", "She seems tired."],
          answerIndex: 1,
          explanation: "'Chased' shows action.",
        },
        {
          type: "fib",
          text: "Type the linking verb: The sky is clear.",
          answer: "is",
          explanation: "'Is' links 'sky' to 'clear'.",
        },
      ],
    },
    adjectives: {
      title: "Comparative adjectives",
      description:
        "An adjective modifies (changes) a noun or pronoun. Comparative adjectives compare two things (for example: bigger, more interesting).",
      questions: [
        {
          type: "mc",
          text: "Choose the correct form: This road is ____ than that one.",
          options: ["safe", "safer", "safest", "more safe"],
          answerIndex: 1,
          explanation: "Use 'safer' to compare two things.",
        },
        {
          type: "fib",
          text: "Type the comparative form of 'bright'.",
          answer: "brighter",
          explanation: "Comparative adjectives often add -er.",
        },
        {
          type: "mc",
          text: "Choose the comparative adjective.",
          options: ["strong", "stronger", "strongest", "very strong"],
          answerIndex: 1,
          explanation: "'Stronger' compares two things.",
        },
        {
          type: "fib",
          text: "Type the comparative form of 'small'.",
          answer: "smaller",
          explanation: "Comparative adjectives often add -er.",
        },
      ],
    },
  },
  advanced: {
    sentences: {
      title: "Sentence structure",
      description:
        "A complete sentence needs a subject and a predicate and expresses a complete thought.",
      questions: [
        {
          type: "mc",
          text: "Which is a complete sentence?",
          options: [
            "Because I was late",
            "Running down the street",
            "The cat slept on the sofa.",
            "When the movie ended",
          ],
          answerIndex: 2,
          explanation: "It has a subject (the cat) and a predicate (slept on the sofa).",
        },
        {
          type: "fib",
          text: "Type a subject in this sentence: ___ ran to the bus.",
          answer: "She",
          explanation: "A subject tells who or what the sentence is about.",
        },
        {
          type: "mc",
          text: "Which sentence has both subject and predicate?",
          options: ["After lunch", "The students cheered loudly.", "Under the desk", "Because it rained"],
          answerIndex: 1,
          explanation: "'The students cheered loudly' is a complete thought with subject and predicate.",
        },
        {
          type: "fib",
          text: "Type the predicate: The scientist tested the sample.",
          answer: "tested the sample",
          explanation: "The predicate tells what the subject does.",
        },
      ],
    },
    nouns: {
      title: "Collective & proper nouns",
      description:
        "Collective nouns name groups; proper nouns name specific people, places, or things.",
      questions: [
        {
          type: "mc",
          text: "Which sentence contains a proper noun?",
          options: [
            "The team cheered loudly.",
            "The city was crowded.",
            "London was busy tonight.",
            "The crowd was huge.",
          ],
          answerIndex: 2,
          explanation: "'London' is a specific city, so it is a proper noun.",
        },
        {
          type: "fib",
          text: "Type the collective noun: The flock moved together.",
          answer: "flock",
          explanation: "'Flock' names a group.",
        },
        {
          type: "mc",
          text: "Which word is a collective noun?",
          options: ["committee", "Paris", "teacher", "honesty"],
          answerIndex: 0,
          explanation: "'Committee' names a group.",
        },
        {
          type: "fib",
          text: "Type the proper noun: We visited Canada in July.",
          answer: "canada",
          explanation: "'Canada' names a specific place.",
        },
      ],
    },
    verbs: {
      title: "Verb tenses",
      description: "Verb tenses show time: past, present, or future.",
      questions: [
        {
          type: "mc",
          text: "Which sentence is in the present perfect tense?",
          options: [
            "She walks to school.",
            "She walked to school.",
            "She has walked to school.",
            "She will walk to school.",
          ],
          answerIndex: 2,
          explanation: "Present perfect uses 'has/have' plus the past participle.",
        },
        {
          type: "fib",
          text: "Change to future tense: They played.",
          answer: "They will play.",
          explanation: "Future tense often uses 'will' plus the base verb.",
        },
        {
          type: "mc",
          text: "Which sentence is in past tense?",
          options: ["She writes notes.", "She wrote notes.", "She will write notes.", "She has written notes."],
          answerIndex: 1,
          explanation: "'Wrote' is simple past tense.",
        },
        {
          type: "fib",
          text: "Change to present tense: They were laughing.",
          answer: "they are laughing",
          explanation: "Present progressive uses 'are' + verb-ing.",
        },
      ],
    },
    adjectives: {
      title: "Order of adjectives",
      description:
        "When we use many adjectives, we usually follow a natural order (opinion, size, age, color, etc.).",
      questions: [
        {
          type: "mc",
          text: "Choose the more natural order.",
          options: [
            "a red small old car",
            "a small old red car",
            "an old red small car",
            "a red old small car",
          ],
          answerIndex: 1,
          explanation:
            "Opinion-size-age-color is more natural: small (size), old (age), red (color).",
        },
        {
          type: "fib",
          text: "Fill in: a ___, ___, wooden table (nice / round).",
          answer: "nice, round",
          explanation: "Opinion comes before shape: nice (opinion), round (shape).",
        },
        {
          type: "mc",
          text: "Choose the natural adjective order.",
          options: ["a metal old box", "an old metal box", "a metal box old", "old a metal box"],
          answerIndex: 1,
          explanation: "Age usually comes before material.",
        },
        {
          type: "fib",
          text: "Fill in order: a ___, ___, blue kite (small / beautiful).",
          answer: "beautiful, small",
          explanation: "Opinion usually comes before size.",
        },
      ],
    },
  },
};

const PARTS_OF_SPEECH_META = {
  noun: {
    label: "Nouns",
    hint: "person, place, thing, or idea",
    words: [
      "teacher",
      "city",
      "idea",
      "mountain",
      "river",
      "school",
      "friend",
      "book",
      "garden",
      "planet",
      "library",
      "artist",
      "puzzle",
      "museum",
      "engine",
      "island",
    ],
  },
  pronoun: {
    label: "Pronouns",
    hint: "replaces a noun",
    words: ["he", "she", "they", "we", "it", "them", "us", "you", "i", "me", "him", "her", "ours", "theirs", "mine", "yours"],
  },
  verb: {
    label: "Verbs",
    hint: "action or a state of being",
    words: [
      "run",
      "jump",
      "swim",
      "sing",
      "write",
      "think",
      "is",
      "were",
      "build",
      "explore",
      "listen",
      "calculate",
      "discover",
      "teach",
      "measure",
      "design",
    ],
  },
  adjective: {
    label: "Adjectives",
    hint: "modifies a noun or pronoun",
    words: [
      "green",
      "happy",
      "brave",
      "tall",
      "bright",
      "quiet",
      "soft",
      "ancient",
      "curious",
      "tiny",
      "massive",
      "gentle",
      "noisy",
      "colorful",
      "frozen",
      "smooth",
    ],
  },
  adverb: {
    label: "Adverbs",
    hint: "modifies a verb, adjective, or adverb",
    words: [
      "quickly",
      "slowly",
      "carefully",
      "silently",
      "really",
      "very",
      "today",
      "outside",
      "boldly",
      "gracefully",
      "often",
      "always",
      "rarely",
      "soon",
      "nearby",
      "almost",
    ],
  },
  preposition: {
    label: "Prepositions",
    hint: "shows relationship between words",
    words: ["in", "on", "under", "between", "through", "across", "before", "after", "behind", "beside", "during", "inside", "outside", "against", "toward", "within"],
  },
  conjunction: {
    label: "Conjunctions",
    hint: "connects words or clauses",
    words: ["and", "but", "or", "because", "although", "so", "while", "if", "unless", "since", "therefore", "yet", "nor", "however", "when", "whereas"],
  },
  interjection: {
    label: "Interjections",
    hint: "expresses sudden feeling",
    words: ["wow", "oops", "hey", "ouch", "hooray", "alas", "yikes", "bravo", "hmm", "uh-oh", "yay", "phew", "oopsie", "aha", "gee", "whoa"],
  },
  article: {
    label: "Articles",
    hint: "introduces a noun: a, an, the",
    words: ["a", "an", "the"],
  },
};
const ALL_PARTS_OF_SPEECH = Object.keys(PARTS_OF_SPEECH_META);
const WORDS_PER_ACTIVE_PART = 3;
const DISTRACTOR_WORDS_PER_ROUND = 3;

// SECTION: State
const MAX_PLAYERS = 3;
const BOARD_LENGTH = 20;
const SCHOOL_YEARS = ["K-2", "3-5", "6-8", "9-12"];
const SPECIAL_TYPES = {
  EXTRA_SPACES: "extra_spaces",
  EXTRA_ROLL: "extra_roll",
  BACK_TO_START: "back_to_start",
};
const PLAYER_PROFILES_KEY = "grammarGamePlayerProfiles";
const LAB_HISTORY_LIMIT = 80;
const LAB_ACTIVE_PROFILE_KEY = "grammarGameActiveLabProfileId";
const SESSION_PROGRESS_TARGET = 10;
let currentLevel = "beginner";
let currentTopicKey = null;
let currentQuestionIndex = 0;
let answeredCount = 0;
let currentQuestion = null;
const INCORRECT_REVIEW_SECONDS = 60;
let incorrectReviewIntervalId = null;
let score = 0;
const badges = new Set();

let players = [];
let currentPlayerIndex = 0;
let boardCells = [];
let specialSpaces = {};
let lastRollValue = null;
let gameStarted = false;
let pendingSkipPlayerId = null;
let lastExtraRollValue = null;
let labAuthMode = "new";
let activeLabProfileId = null;
let activeLabStudentName = "";
let activeLabGrade = "K-2";
let activeWordSortBucketParts = ["noun", "verb", "adjective"];
let wordSortPartExposureCounts = ALL_PARTS_OF_SPEECH.reduce((acc, part) => {
  acc[part] = 0;
  return acc;
}, {});
const quizQuestionHistory = new Map();
const labTopicHistory = new Map();

// SECTION: DOM Helpers
const topicListEl = document.getElementById("topicList");
const boardTrackEl = document.getElementById("boardTrack");
const playerListEl = document.getElementById("playerList");
const turnIndicatorEl = document.getElementById("turnIndicator");
const topicTitleEl = document.getElementById("topicTitle");
const topicDescriptionEl = document.getElementById("topicDescription");
const topicLevelEl = document.getElementById("topicLevel");

const questionTextEl = document.getElementById("questionText");
const optionsListEl = document.getElementById("optionsList");
const fibWrapperEl = document.getElementById("fibWrapper");
const fibInputEl = document.getElementById("fibInput");
const feedbackEl = document.getElementById("feedback");
const checkAnswerBtn = document.getElementById("checkAnswerBtn");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const questionTypeLabelEl = document.getElementById("questionTypeLabel");

const progressFillEl = document.getElementById("progressFill");
const progressCountEl = document.getElementById("progressCount");
const scoreValueEl = document.getElementById("scoreValue");
const badgesDisplayEl = document.getElementById("badgesDisplay");

const wordBankEl = document.getElementById("wordBank");
const nounBucketEl = document.getElementById("nounBucket");
const verbBucketEl = document.getElementById("verbBucket");
const adjectiveBucketEl = document.getElementById("adjectiveBucket");
const gameFeedbackEl = document.getElementById("gameFeedback");
const checkGameBtn = document.getElementById("checkGameBtn");
const resetGameBtn = document.getElementById("resetGameBtn");
const quizHistoryListEl = document.getElementById("quizHistoryList");

const labAuthFormEl = document.getElementById("labAuthForm");
const labAuthMessageEl = document.getElementById("labAuthMessage");
const labStudentBannerEl = document.getElementById("labStudentBanner");
const labStudentNameEl = document.getElementById("labStudentName");
const labStudentGradeEl = document.getElementById("labStudentGrade");
const labReturningStudentSelectEl = document.getElementById("labReturningStudentSelect");
const labNewStudentRowEl = document.getElementById("labNewStudentRow");
const labReturningStudentRowEl = document.getElementById("labReturningStudentRow");
const labAuthSubmitBtnEl = document.getElementById("labAuthSubmitBtn");
const labAuthCardEl = document.getElementById("labAuthCard");
const quizHistoryCardEl = document.getElementById("quizHistoryCard");
const headerStudentBannerEl = document.getElementById("headerStudentBanner");
const labLogoutBtnEl = document.getElementById("labLogoutBtn");
const levelSwitcherEl = document.querySelector(".level-switcher");
const topicSectionEl = document.querySelector(".topic-section");

// SECTION: Board / Players
function handleNameInput(event) {
  const inputEl = event.currentTarget;
  const playerIndex = Number(inputEl.dataset.playerIndex);
  players[playerIndex].name = inputEl.value || `Player ${playerIndex + 1}`;
  renderPlayers();
}

function handleYearChange(event) {
  const selectEl = event.currentTarget;
  const playerIndex = Number(selectEl.dataset.playerIndex);
  players[playerIndex].year = selectEl.value;
  players[playerIndex].level = mapYearToLevel(selectEl.value);
}

function mapYearToLevel(year) {
  if (year === "K-2" || year === "3-5") return "beginner";
  if (year === "6-8") return "intermediate";
  return "advanced";
}

function isLabPage() {
  return Boolean(labAuthFormEl);
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

function normalizeProfile(profile) {
  const normalized = { ...profile };
  normalized.id = normalized.id || String(normalized.name || "student").toLowerCase().replace(/\s+/g, "-");
  normalized.name = normalized.name || "Student";
  normalized.lastPlayedGrade = normalized.lastPlayedGrade || "K-2";
  normalized.wins = Number(normalized.wins || 0);
  normalized.losses = Number(normalized.losses || 0);
  if (!Array.isArray(normalized.history)) normalized.history = [];
  if (!normalized.labStats || typeof normalized.labStats !== "object") {
    normalized.labStats = {
      quizCorrect: 0,
      quizIncorrect: 0,
      wordSortAttempts: 0,
      wordSortPerfect: 0,
    };
  }
  return normalized;
}

function upsertProfileByName(name) {
  const cleanName = String(name || "").trim();
  const profiles = loadProfiles().map(normalizeProfile);
  const index = profiles.findIndex((profile) => profile.name.toLowerCase() === cleanName.toLowerCase());

  if (index >= 0) {
    return { profiles, profile: profiles[index], index };
  }

  const created = normalizeProfile({
    id: cleanName.toLowerCase().replace(/\s+/g, "-"),
    name: cleanName,
    history: [],
    wins: 0,
    losses: 0,
    lastPlayedGrade: "K-2",
  });
  profiles.push(created);
  return { profiles, profile: created, index: profiles.length - 1 };
}

function setLabAuthMessage(text, tone = "") {
  if (!labAuthMessageEl) return;
  labAuthMessageEl.textContent = text;
  labAuthMessageEl.classList.remove("correct", "incorrect");
  if (tone === "correct" || tone === "incorrect") {
    labAuthMessageEl.classList.add(tone);
  }
}

function lockLabControls(locked) {
  if (!isLabPage()) return;
  if (nextQuestionBtn) nextQuestionBtn.disabled = true;
  if (fibInputEl) fibInputEl.disabled = false;
  if (locked && gameFeedbackEl) {
    gameFeedbackEl.textContent = "Save or proceed with a student profile to track results.";
    gameFeedbackEl.className = "feedback incorrect";
  }
}

function swapToHistoryCard() {
  if (labAuthCardEl) labAuthCardEl.hidden = true;
  if (quizHistoryCardEl) quizHistoryCardEl.hidden = false;
}

function swapToAuthCard() {
  if (labAuthCardEl) labAuthCardEl.hidden = false;
  if (quizHistoryCardEl) quizHistoryCardEl.hidden = true;
}

function setLabTopicSelectorHidden(hidden = true) {
  if (!isLabPage()) return;
  if (levelSwitcherEl) levelSwitcherEl.hidden = hidden;
  if (topicSectionEl) topicSectionEl.hidden = hidden;
}

function renderLabStudentBanner() {
  if (!headerStudentBannerEl) return;
  if (!activeLabProfileId) {
    headerStudentBannerEl.hidden = true;
    headerStudentBannerEl.textContent = "";
    if (labLogoutBtnEl) labLogoutBtnEl.hidden = true;
    return;
  }
  headerStudentBannerEl.hidden = false;
  headerStudentBannerEl.textContent = `Student: ${activeLabStudentName} (Grade ${activeLabGrade})`;
  if (labLogoutBtnEl) labLogoutBtnEl.hidden = false;
}

function handleLabLogout() {
  if (!isLabPage()) return;

  localStorage.removeItem(LAB_ACTIVE_PROFILE_KEY);
  activeLabProfileId = null;
  activeLabStudentName = "";
  activeLabGrade = "K-2";
  currentLevel = "beginner";

  if (incorrectReviewIntervalId) {
    clearInterval(incorrectReviewIntervalId);
    incorrectReviewIntervalId = null;
  }

  resetLabSessionState();
  renderTopics();
  setupGameLists();
  lockLabControls(true);
  renderLabStudentBanner();
  renderLearningHistory();
  swapToAuthCard();
  setLabAuthMode("returning");
  setLabAuthMessage("Logged out. Choose a student to continue.", "correct");
}

function renderLearningHistory() {
  if (!quizHistoryListEl) return;
  if (!activeLabProfileId) {
    quizHistoryListEl.innerHTML = '<p class="history-empty">Save a student profile to view Lab and board history.</p>';
    return;
  }

  const profiles = loadProfiles().map(normalizeProfile);
  const active = profiles.find((profile) => profile.id === activeLabProfileId);
  if (!active) {
    quizHistoryListEl.innerHTML = '<p class="history-empty">No history yet.</p>';
    return;
  }

  const entries = active.history.slice(0, 20);
  if (!entries.length) {
    quizHistoryListEl.innerHTML = '<p class="history-empty">No history yet. Start answering questions to build progress.</p>';
    return;
  }

  quizHistoryListEl.innerHTML = "";
  entries.forEach((entry) => {
    const row = document.createElement("div");
    row.className = "history-item";

    const stamp = document.createElement("p");
    stamp.className = "history-stamp";
    const date = new Date(entry.date || Date.now());
    stamp.textContent = date.toLocaleString();

    const text = document.createElement("p");
    text.className = "history-text";
    if (entry.mode === "board") {
      text.textContent = `Board game: ${entry.result || "result"} (${entry.grade || "K-2"}) • Winner: ${entry.winner || "Unknown"}`;
    } else if (entry.activity === "word-sort") {
      text.textContent = `Lab Word Sort: ${entry.correct}/${entry.total} correct (${entry.percent}%).`;
    } else {
      const status = entry.result === "correct" ? "Correct" : "Incorrect";
      text.textContent = `Lab Quiz: ${status} • ${entry.topic || "Topic"} (${entry.level || currentLevel}).`;
    }

    row.appendChild(stamp);
    row.appendChild(text);
    quizHistoryListEl.appendChild(row);
  });
}

function saveLabHistoryEntry(entry, updater) {
  if (!activeLabProfileId) return;
  const profiles = loadProfiles().map(normalizeProfile);
  const index = profiles.findIndex((profile) => profile.id === activeLabProfileId);
  if (index < 0) return;

  const profile = profiles[index];
  profile.history.unshift({
    ...entry,
    mode: entry.mode || "lab",
    grade: activeLabGrade,
    date: new Date().toISOString(),
  });
  profile.history = profile.history.slice(0, LAB_HISTORY_LIMIT);

  if (typeof updater === "function") {
    updater(profile);
  }

  profiles[index] = profile;
  saveProfiles(profiles);
  renderLearningHistory();
}

function populateReturningStudents() {
  if (!labReturningStudentSelectEl) return;
  const profiles = loadProfiles().map(normalizeProfile).sort((a, b) => a.name.localeCompare(b.name));

  labReturningStudentSelectEl.innerHTML = "";
  if (!profiles.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No saved students yet";
    labReturningStudentSelectEl.appendChild(option);
    labReturningStudentSelectEl.disabled = true;
    return;
  }

  labReturningStudentSelectEl.disabled = false;
  profiles.forEach((profile) => {
    const option = document.createElement("option");
    option.value = profile.name;
    option.textContent = profile.name;
    labReturningStudentSelectEl.appendChild(option);
  });
}

function setLabAuthMode(mode) {
  labAuthMode = mode === "returning" ? "returning" : "new";
  if (labNewStudentRowEl) labNewStudentRowEl.hidden = labAuthMode !== "new";
  if (labReturningStudentRowEl) labReturningStudentRowEl.hidden = labAuthMode !== "returning";
  if (labAuthSubmitBtnEl) {
    labAuthSubmitBtnEl.textContent = labAuthMode === "returning" ? "Proceed" : "Save student";
  }

  const chips = document.querySelectorAll("#labAuthCard [data-auth-mode]");
  chips.forEach((chip) => {
    chip.classList.toggle("chip-active", chip.dataset.authMode === labAuthMode);
  });

  if (labAuthMode === "returning") {
    populateReturningStudents();
    const selectedName = labReturningStudentSelectEl ? labReturningStudentSelectEl.value : "";
    const existing = loadProfiles().map(normalizeProfile).find((profile) => profile.name === selectedName);
    if (existing && labStudentGradeEl) {
      labStudentGradeEl.value = existing.lastPlayedGrade || "K-2";
    }
  }
}

function resetLabSessionState() {
  currentQuestionIndex = 0;
  answeredCount = 0;
  score = 0;
  badges.clear();
  if (badgesDisplayEl) badgesDisplayEl.innerHTML = "";
  updateProgress();
  updateScoreUI();
  currentTopicKey = null;
}

function handleLabAuthSubmit(event) {
  event.preventDefault();

  let chosenName = "";
  if (labAuthMode === "returning") {
    chosenName = labReturningStudentSelectEl ? labReturningStudentSelectEl.value.trim() : "";
  } else {
    chosenName = labStudentNameEl ? labStudentNameEl.value.trim() : "";
  }
  const chosenGrade = labStudentGradeEl ? labStudentGradeEl.value : "K-2";

  if (!chosenName) {
    setLabAuthMessage("Enter or select a student name first.", "incorrect");
    return;
  }

  const { profiles, profile, index } = upsertProfileByName(chosenName);
  profile.lastPlayedGrade = chosenGrade;
  profiles[index] = profile;
  saveProfiles(profiles);

  activeLabProfileId = profile.id;
  activeLabStudentName = profile.name;
  activeLabGrade = chosenGrade;
  localStorage.setItem(LAB_ACTIVE_PROFILE_KEY, activeLabProfileId);
  currentLevel = mapYearToLevel(chosenGrade);

  resetLabSessionState();
  renderTopics();
  setupGameLists();
  lockLabControls(false);
  renderLabStudentBanner();
  renderLearningHistory();
  swapToHistoryCard();
  setLabAuthMessage(
    labAuthMode === "returning"
      ? `Welcome back, ${profile.name}. Progress tracking is active.`
      : `Saved ${profile.name}. Progress is now being tracked.`,
    "correct",
  );
}

function restoreLastActiveLabProfile() {
  if (!isLabPage()) return false;
  const savedId = localStorage.getItem(LAB_ACTIVE_PROFILE_KEY);
  if (!savedId) return false;

  const profiles = loadProfiles().map(normalizeProfile);
  const profile = profiles.find((item) => item.id === savedId);
  if (!profile) return false;

  activeLabProfileId = profile.id;
  activeLabStudentName = profile.name;
  activeLabGrade = profile.lastPlayedGrade || "K-2";
  currentLevel = mapYearToLevel(activeLabGrade);

  if (labStudentGradeEl) {
    labStudentGradeEl.value = activeLabGrade;
  }

  resetLabSessionState();
  renderTopics();
  setupGameLists();
  renderLabStudentBanner();
  renderLearningHistory();
  swapToHistoryCard();
  setLabAuthMessage(`Welcome back, ${profile.name}.`, "correct");
  return true;
}

function setupLabAuth() {
  if (!isLabPage()) return;

  lockLabControls(true);
  setLabTopicSelectorHidden(true);
  renderLabStudentBanner();
  renderLearningHistory();
  setLabAuthMode("new");

  const chips = document.querySelectorAll("#labAuthCard [data-auth-mode]");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      setLabAuthMode(chip.dataset.authMode);
      setLabAuthMessage("");
    });
  });

  if (labReturningStudentSelectEl) {
    labReturningStudentSelectEl.addEventListener("change", () => {
      const selectedName = labReturningStudentSelectEl.value;
      const selected = loadProfiles().map(normalizeProfile).find((profile) => profile.name === selectedName);
      if (selected && labStudentGradeEl) {
        labStudentGradeEl.value = selected.lastPlayedGrade || "K-2";
      }
    });
  }

  if (labAuthFormEl) {
    labAuthFormEl.addEventListener("submit", handleLabAuthSubmit);
  }

  if (labLogoutBtnEl) {
    labLogoutBtnEl.addEventListener("click", handleLabLogout);
  }

  if (restoreLastActiveLabProfile()) {
    setLabAuthMode("returning");
    if (labReturningStudentSelectEl) {
      labReturningStudentSelectEl.value = activeLabStudentName;
    }
  }
}

function initPlayers(count) {
  players = [];
  const playerInputsEl = document.getElementById("playerInputs");
  if (!playerInputsEl || !playerListEl || !boardTrackEl) return;
  playerInputsEl.innerHTML = "";
  for (let i = 0; i < count; i += 1) {
    const index = i;
    const defaultYear = SCHOOL_YEARS[Math.min(index, SCHOOL_YEARS.length - 1)];
    players.push({
      id: index,
      name: `Player ${index + 1}`,
      year: defaultYear,
      level: mapYearToLevel(defaultYear),
      position: 0,
      score: 0,
      lastRoll: null,
    });

    const row = document.createElement("div");
    row.className = "player-input-row";

    const nameLabel = document.createElement("label");
    nameLabel.textContent = `P${index + 1} name:`;
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = players[index].name;
    nameInput.dataset.playerIndex = String(index);
    nameInput.addEventListener("input", handleNameInput);


    const yearLabel = document.createElement("label");
    yearLabel.textContent = "Year:";
    const yearSelect = document.createElement("select");
    SCHOOL_YEARS.forEach((y) => {
      const opt = document.createElement("option");
      opt.value = y;
      opt.textContent = y;
      if (y === defaultYear) opt.selected = true;
      yearSelect.appendChild(opt);
    });
    yearSelect.dataset.playerIndex = String(index);
    yearSelect.addEventListener("change", handleYearChange);


    row.appendChild(nameLabel);
    row.appendChild(nameInput);
    row.appendChild(yearLabel);
    row.appendChild(yearSelect);
    playerInputsEl.appendChild(row);
  }
  currentPlayerIndex = 0;
  score = 0;
  badges.clear();
  if (badgesDisplayEl) badgesDisplayEl.innerHTML = "";
  updateScoreUI();
  answeredCount = 0;
  updateProgress();
  gameStarted = false;
  pendingSkipPlayerId = null;
  lastExtraRollValue = null;
  lastRollValue = null;
  renderPlayers();
  renderBoard();
  updateTurnIndicator();
}

function renderPlayers() {
  playerListEl.innerHTML = "";
  players.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "player-card" + (index === currentPlayerIndex ? " active" : "");

    const main = document.createElement("div");
    main.className = "player-main";

    const token = document.createElement("div");
    token.className = `player-token p${p.id + 1}`;

    const nameSpan = document.createElement("span");
    nameSpan.className = "player-name";
    nameSpan.textContent = p.name;

    main.appendChild(token);
    main.appendChild(nameSpan);

    const meta = document.createElement("div");
    meta.className = "player-meta";

    const posSpan = document.createElement("span");
    posSpan.className = "player-pos";
    posSpan.textContent = `Space ${p.position + 1}`;

    const scoreSpan = document.createElement("span");
    scoreSpan.className = "player-score";
    scoreSpan.textContent = `${p.score} pts`;

    meta.appendChild(posSpan);
    meta.appendChild(scoreSpan);

    card.appendChild(main);
    card.appendChild(meta);

    playerListEl.appendChild(card);
  });
}

function generateSpecialSpaces() {
  specialSpaces = {};
  const indices = [];
  while (indices.length < 3) {
    const idx = Math.floor(Math.random() * (BOARD_LENGTH - 2)) + 1;
    if (!indices.includes(idx)) indices.push(idx);
  }
  specialSpaces[indices[0]] = { type: SPECIAL_TYPES.EXTRA_SPACES, value: 2 };
  specialSpaces[indices[1]] = { type: SPECIAL_TYPES.EXTRA_ROLL };
  specialSpaces[indices[2]] = { type: SPECIAL_TYPES.BACK_TO_START };
}

function renderBoard() {
  boardCells = [];
  boardTrackEl.innerHTML = "";
  generateSpecialSpaces();
  for (let i = 0; i < BOARD_LENGTH; i += 1) {
    const cell = document.createElement("div");
    cell.className = "board-cell";

    const special = specialSpaces[i];
    if (special) {
      if (special.type === SPECIAL_TYPES.EXTRA_SPACES) {
        cell.classList.add("special-extra");
        cell.title = "+2 spaces";
      } else if (special.type === SPECIAL_TYPES.EXTRA_ROLL) {
        cell.classList.add("special-reroll");
        cell.title = "Extra roll";
      } else if (special.type === SPECIAL_TYPES.BACK_TO_START) {
        cell.classList.add("special-back");
        cell.title = "Back to start";
      }
    }

    if (i === 0) cell.classList.add("start");
    if (i === BOARD_LENGTH - 1) cell.classList.add("finish");
    cell.dataset.index = String(i);
    cell.textContent = i === 0 ? "Start" : i === BOARD_LENGTH - 1 ? "Finish" : String(i + 1);

    const tokensContainer = document.createElement("div");
    tokensContainer.className = "tokens";
    cell.appendChild(tokensContainer);

    boardTrackEl.appendChild(cell);
    boardCells.push(cell);
  }
  updateBoardTokens();
}

function updateBoardTokens() {
  boardCells.forEach((cell) => {
    const tokensContainer = cell.querySelector(".tokens");
    if (tokensContainer) tokensContainer.innerHTML = "";
  });

  players.forEach((p) => {
    const clampedPos = Math.min(p.position, BOARD_LENGTH - 1);
    const cell = boardCells[clampedPos];
    if (!cell) return;
    const tokensContainer = cell.querySelector(".tokens");
    if (!tokensContainer) return;
    const dot = document.createElement("span");
    dot.className = `p${p.id + 1}`;
    tokensContainer.appendChild(dot);
  });
}

function showInstruction(title, body) {
  const modal = document.getElementById("instructionModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  modalTitle.textContent = title;
  modalBody.textContent = body;
  modal.classList.add("is-visible");
  modal.hidden = false;
}

function hideInstruction() {
  const modal = document.getElementById("instructionModal");
  modal.classList.remove("is-visible");
  modal.hidden = true;
}

function updateTurnIndicator(message) {
  if (message) {
    turnIndicatorEl.textContent = message;
    return;
  }
  if (!players.length) {
    turnIndicatorEl.textContent = "Set up players to begin.";
    return;
  }
  const current = players[currentPlayerIndex];
  if (!gameStarted) {
    turnIndicatorEl.textContent = `${current.name}, roll to decide who starts.`;
  } else {
    const skipNote = pendingSkipPlayerId === current.id ? " (this turn will be skipped)" : "";
    turnIndicatorEl.textContent = `${current.name}'s turn – roll, then answer a question to move.${skipNote}`;
  }
}

function advanceTurn() {
  if (!players.length) return;
  const nextIndex = (currentPlayerIndex + 1) % players.length;
  const nextPlayer = players[nextIndex];
  if (pendingSkipPlayerId === nextPlayer.id) {
    pendingSkipPlayerId = null;
    currentPlayerIndex = (nextIndex + 1) % players.length;
  } else {
    currentPlayerIndex = nextIndex;
  }
  renderPlayers();
  updateTurnIndicator();
}

// SECTION: Topic List Rendering
function renderTopics() {
  if (!topicListEl) return;
  const topics = grammarData[currentLevel];
  topicListEl.innerHTML = "";
  const shouldAutoRotateTopics = isLabPage() && Boolean(topicSectionEl?.hidden);

  Object.entries(topics).forEach(([key, topicDef], index) => {
    const li = document.createElement("li");
    li.className = "topic-item";
    li.tabIndex = 0;
    li.dataset.topicKey = key;

    const labelSpan = document.createElement("span");
    labelSpan.className = "topic-label";
    labelSpan.textContent = topicDef.title;
    li.appendChild(labelSpan);

    li.addEventListener("click", () => selectTopic(key));
    li.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectTopic(key);
      }
    });

    topicListEl.appendChild(li);

    if (index === 0 && !currentTopicKey) {
      selectTopic(shouldAutoRotateTopics ? pickNextLabTopicKey() || key : key);
    }
  });
}

function updateTopicActiveState() {
  const items = topicListEl.querySelectorAll(".topic-item");
  items.forEach((item) => {
    if (item.dataset.topicKey === currentTopicKey) {
      item.classList.add("topic-item-active");
    } else {
      item.classList.remove("topic-item-active");
    }
  });
}

function selectTopic(topicKey) {
  currentTopicKey = topicKey;
  const topicDef = grammarData[currentLevel][topicKey];
  currentQuestionIndex = pickNextQuizQuestionIndex(topicDef);

  topicTitleEl.textContent = topicDef.title;
  topicDescriptionEl.textContent = topicDef.description;
  topicLevelEl.textContent = capitalize(currentLevel);

  updateTopicActiveState();
  loadQuestion();
}

// SECTION: Quiz Logic
function pickNextLabTopicKey() {
  const topics = Object.keys(grammarData[currentLevel] || {});
  if (!topics.length) return null;

  const history = labTopicHistory.get(currentLevel) || { seenKeys: new Set(), lastKey: "" };
  if (history.seenKeys.size >= topics.length) {
    history.seenKeys.clear();
  }

  let candidates = topics.filter((topicKey) => !history.seenKeys.has(topicKey));
  if (!candidates.length) {
    candidates = [...topics];
  }

  if (topics.length > 1 && history.lastKey) {
    const withoutLast = candidates.filter((topicKey) => topicKey !== history.lastKey);
    if (withoutLast.length) {
      candidates = withoutLast;
    }
  }

  const chosen = candidates[Math.floor(Math.random() * candidates.length)];
  history.seenKeys.add(chosen);
  history.lastKey = chosen;
  labTopicHistory.set(currentLevel, history);
  return chosen;
}

function pickNextQuizQuestionIndex(topicDef) {
  if (!topicDef || !Array.isArray(topicDef.questions) || !topicDef.questions.length) return 0;

  const key = `${currentLevel}:${currentTopicKey}`;
  const total = topicDef.questions.length;
  const history = quizQuestionHistory.get(key) || { seenIndexes: new Set(), lastIndex: -1 };

  if (history.seenIndexes.size >= total) {
    history.seenIndexes.clear();
  }

  const unseen = [];
  for (let index = 0; index < total; index += 1) {
    if (!history.seenIndexes.has(index)) {
      unseen.push(index);
    }
  }

  let candidates = unseen;
  if (total > 1 && history.lastIndex >= 0) {
    const withoutLast = unseen.filter((index) => index !== history.lastIndex);
    if (withoutLast.length) {
      candidates = withoutLast;
    }
  }

  const randomIndex = Math.floor(Math.random() * candidates.length);
  const chosen = candidates[randomIndex];

  history.seenIndexes.add(chosen);
  history.lastIndex = chosen;
  quizQuestionHistory.set(key, history);
  return chosen;
}

function loadQuestion() {
  const topicDef = grammarData[currentLevel][currentTopicKey];
  if (!topicDef) return;

  stopIncorrectReviewTimer();
  if (nextQuestionBtn) {
    nextQuestionBtn.textContent = "Next question";
  }

  currentQuestion = topicDef.questions[currentQuestionIndex % topicDef.questions.length];

  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  optionsListEl.innerHTML = "";
  fibWrapperEl.hidden = true;
  fibInputEl.value = "";

  questionTextEl.textContent = currentQuestion.text;

  if (currentQuestion.type === "mc") {
    questionTypeLabelEl.textContent = "Multiple choice";
    currentQuestion.options.forEach((opt, index) => {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.type = "button";
      btn.textContent = opt;
      btn.dataset.index = index;
      btn.addEventListener("click", () => {
        selectOption(index);
      });
      optionsListEl.appendChild(btn);
    });
    checkAnswerBtn.disabled = true;
  } else if (currentQuestion.type === "fib") {
    questionTypeLabelEl.textContent = "Fill in the blank";
    fibWrapperEl.hidden = false;
    fibInputEl.focus();
    checkAnswerBtn.disabled = false;
  }

  nextQuestionBtn.disabled = true;
}

function selectOption(index) {
  const buttons = optionsListEl.querySelectorAll(".option");
  buttons.forEach((btn) => {
    btn.classList.remove("option-selected");
  });

  const selected = optionsListEl.querySelector(`.option[data-index="${index}"]`);
  if (selected) {
    selected.classList.add("option-selected");
  }

  currentQuestion.selectedIndex = index;
  checkAnswerBtn.disabled = false;
}

function addBadge(id, label, colorClass) {
  if (badges.has(id) || !badgesDisplayEl) return;
  badges.add(id);
  const span = document.createElement("span");
  span.className = `badge-pill ${colorClass}`;
  span.textContent = label;
  badgesDisplayEl.appendChild(span);
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function applySpecialSpace(player) {
  const special = specialSpaces[player.position];
  if (!special) return "";

  if (special.type === SPECIAL_TYPES.EXTRA_SPACES) {
    player.position = Math.min(player.position + special.value, BOARD_LENGTH - 1);
    return "Landed on a speed boost! Move extra spaces.";
  }
  if (special.type === SPECIAL_TYPES.EXTRA_ROLL) {
    return "Landed on an extra roll space! Roll again.";
  }
  if (special.type === SPECIAL_TYPES.BACK_TO_START) {
    player.position = 0;
    return "Oh no! A tar pit sends you back to the start.";
  }
  return "";
}

function updateScoreUI() {
  if (!scoreValueEl) return;
  scoreValueEl.textContent = String(score);
}

function getQuestionStep() {
  if (!currentQuestion) return 1;
  return currentQuestion.type === "fib" ? 2 : 1;
}

function stopIncorrectReviewTimer() {
  if (!incorrectReviewIntervalId) return;
  clearInterval(incorrectReviewIntervalId);
  incorrectReviewIntervalId = null;
}

function startIncorrectReviewTimer() {
  if (!nextQuestionBtn) return;
  stopIncorrectReviewTimer();

  let secondsRemaining = INCORRECT_REVIEW_SECONDS;
  nextQuestionBtn.textContent = `Next question (${secondsRemaining}s)`;

  incorrectReviewIntervalId = setInterval(() => {
    secondsRemaining -= 1;

    if (secondsRemaining <= 0) {
      stopIncorrectReviewTimer();
      nextQuestion();
      return;
    }

    nextQuestionBtn.textContent = `Next question (${secondsRemaining}s)`;
  }, 1000);
}

function checkAnswer() {
  if (!currentQuestion) return;
  if (isLabPage() && !activeLabProfileId) {
    setLabAuthMessage("Save a student profile before answering questions.", "incorrect");
    return;
  }

  let isCorrect = false;
  let firstTimeCorrect = false;

  if (currentQuestion.type === "mc") {
    const selectedIndex = currentQuestion.selectedIndex;
    if (typeof selectedIndex !== "number") return;

    const buttons = optionsListEl.querySelectorAll(".option");
    buttons.forEach((btn) => {
      const idx = Number(btn.dataset.index);
      if (idx === currentQuestion.answerIndex) {
        btn.classList.add("option-correct");
      }
      if (idx === selectedIndex && idx !== currentQuestion.answerIndex) {
        btn.classList.add("option-incorrect");
      }
      btn.disabled = true;
    });

    isCorrect = selectedIndex === currentQuestion.answerIndex;
    if (isCorrect && !currentQuestion.answeredCorrectly) {
      firstTimeCorrect = true;
      currentQuestion.answeredCorrectly = true;
    }
  } else if (currentQuestion.type === "fib") {
    const userAnswer = fibInputEl.value.trim().toLowerCase();
    const expected = currentQuestion.answer.toLowerCase();
    isCorrect = userAnswer === expected;
    if (isCorrect && !currentQuestion.answeredCorrectly) {
      firstTimeCorrect = true;
      currentQuestion.answeredCorrectly = true;
    }
  }

  const step = getQuestionStep();

  if (firstTimeCorrect) {
    score += 10 * step;
    if (players.length) {
      players[currentPlayerIndex].score += 10 * step;
    }
    updateScoreUI();
  }

  if (players.length) {
    if (isCorrect) {
      const player = players[currentPlayerIndex];
      const diceValue = lastRollValue || step;
      const target = player.position + diceValue;
      const finishIndex = BOARD_LENGTH - 1;

      if (target === finishIndex) {
        player.position = finishIndex;
        updateBoardTokens();
        renderPlayers();
        gameStarted = true;
        showInstruction("Winner!", `${player.name} reached the dino nest and wins the game!`);
        updateTurnIndicator(`${player.name} reaches the dino nest and wins!`);
      } else if (target > finishIndex) {
        updateTurnIndicator(`${player.name} needed an exact roll to finish and stays put.`);
        advanceTurn();
      } else {
        player.position = target;
        const specialMsg = applySpecialSpace(player);
        updateBoardTokens();
        renderPlayers();
        if (specialMsg) {
          updateTurnIndicator(`${player.name} moves to space ${player.position + 1}. ${specialMsg}`);
        } else {
          updateTurnIndicator();
        }

        const special = specialSpaces[player.position];
        if (special && special.type === SPECIAL_TYPES.EXTRA_ROLL) {
          if (lastExtraRollValue !== null && lastExtraRollValue === diceValue) {
            pendingSkipPlayerId = player.id;
            showInstruction(
              "Turn skipped",
              `${player.name} rolled the same number on the extra roll and will lose their next turn.`,
            );
          } else {
            lastExtraRollValue = diceValue;
            showInstruction("Extra roll", `${player.name} gets an extra roll! Roll again and answer another question.`);
          }
          return;
        }
        advanceTurn();
      }
    } else {
      advanceTurn();
    }
  }

  if (isCorrect) {
    answeredCount += 1;
    updateProgress();
    updateLabBadges();
  }

  feedbackEl.textContent = isCorrect
    ? "Nice work! " + currentQuestion.explanation
    : "Not quite. " + currentQuestion.explanation;
  feedbackEl.classList.toggle("correct", isCorrect);
  feedbackEl.classList.toggle("incorrect", !isCorrect);

  saveLabHistoryEntry(
    {
      activity: "quiz",
      level: currentLevel,
      topic: grammarData[currentLevel]?.[currentTopicKey]?.title || "Topic",
      result: isCorrect ? "correct" : "incorrect",
      scoreDelta: firstTimeCorrect ? 10 * step : 0,
    },
    (profile) => {
      profile.labStats.quizCorrect += isCorrect ? 1 : 0;
      profile.labStats.quizIncorrect += isCorrect ? 0 : 1;
    },
  );

  checkAnswerBtn.disabled = true;
  nextQuestionBtn.disabled = false;

  if (!isCorrect) {
    startIncorrectReviewTimer();
  } else {
    stopIncorrectReviewTimer();
    nextQuestionBtn.textContent = "Next question";
  }
}

function nextQuestion() {
  stopIncorrectReviewTimer();
  if (nextQuestionBtn) {
    nextQuestionBtn.textContent = "Next question";
  }

  if (isLabPage() && Boolean(topicSectionEl?.hidden)) {
    const nextTopicKey = pickNextLabTopicKey();
    if (nextTopicKey) {
      selectTopic(nextTopicKey);
      return;
    }
  }

  const topicDef = grammarData[currentLevel][currentTopicKey];
  if (!topicDef) return;

  currentQuestionIndex = pickNextQuizQuestionIndex(topicDef);
  loadQuestion();
}

function updateProgress() {
  if (!progressFillEl || !progressCountEl) return;
  const target = SESSION_PROGRESS_TARGET;
  const ratio = Math.min(answeredCount / target, 1);
  progressFillEl.style.width = `${ratio * 100}%`;
  progressCountEl.textContent = String(Math.min(answeredCount, target));
}

function updateLabBadges() {
  if (score >= 50) {
    addBadge("score-50", "50+ points", "green");
  }
  if (score >= 100) {
    addBadge("score-100", "100+ points", "gold");
  }
  if (answeredCount >= SESSION_PROGRESS_TARGET) {
    addBadge("session-10", "Session complete", "orange");
  }
}

// SECTION: Game Logic
let currentWordSetIndex = 0;
let hasScoredCurrentWordSet = false;
const wordSortWordHistory = new Map();

function shuffleArray(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function pickRandomUnique(items, count) {
  return shuffleArray(items).slice(0, Math.min(count, items.length));
}

function pickNonRepeatingWords(partKey, items, count) {
  const pool = Array.isArray(items) ? [...items] : [];
  if (!pool.length) return [];

  const history = wordSortWordHistory.get(partKey) || { seenWords: new Set(), lastWords: [] };
  if (history.seenWords.size >= pool.length) {
    history.seenWords.clear();
  }

  let candidates = pool.filter((word) => !history.seenWords.has(word));
  if (candidates.length < count) {
    history.seenWords.clear();
    candidates = [...pool];
  }

  if (pool.length > count && history.lastWords.length) {
    const withoutRecent = candidates.filter((word) => !history.lastWords.includes(word));
    if (withoutRecent.length >= count) {
      candidates = withoutRecent;
    }
  }

  const picked = shuffleArray(candidates).slice(0, Math.min(count, candidates.length));
  picked.forEach((word) => history.seenWords.add(word));
  history.lastWords = [...picked];
  wordSortWordHistory.set(partKey, history);
  return picked;
}

function getBucketConfigs() {
  return [
    {
      dropzone: nounBucketEl,
      parent: nounBucketEl ? nounBucketEl.parentElement : null,
    },
    {
      dropzone: verbBucketEl,
      parent: verbBucketEl ? verbBucketEl.parentElement : null,
    },
    {
      dropzone: adjectiveBucketEl,
      parent: adjectiveBucketEl ? adjectiveBucketEl.parentElement : null,
    },
  ].filter((config) => Boolean(config.dropzone && config.parent));
}

function pickCoverageBalancedParts(count) {
  const ranked = ALL_PARTS_OF_SPEECH
    .map((part) => {
      const seen = Number(wordSortPartExposureCounts[part] || 0);
      return {
        part,
        score: seen + Math.random() * 0.35,
      };
    })
    .sort((left, right) => left.score - right.score);

  return ranked.slice(0, Math.min(count, ranked.length)).map((item) => item.part);
}

function randomizeWordSortBucketParts() {
  activeWordSortBucketParts = pickCoverageBalancedParts(3);
  activeWordSortBucketParts.forEach((part) => {
    wordSortPartExposureCounts[part] = Number(wordSortPartExposureCounts[part] || 0) + 1;
  });

  const bucketConfigs = getBucketConfigs();

  bucketConfigs.forEach((config, index) => {
    const partKey = activeWordSortBucketParts[index] || "noun";
    const meta = PARTS_OF_SPEECH_META[partKey] || PARTS_OF_SPEECH_META.noun;
    config.dropzone.dataset.acceptPart = partKey;

    const titleEl = config.parent.querySelector(".bucket-title");
    const hintEl = config.parent.querySelector(".bucket-hint");
    if (titleEl) titleEl.textContent = meta.label;
    if (hintEl) hintEl.textContent = meta.hint;
  });
}

function buildWordSortRoundWords() {
  const selected = [];

  activeWordSortBucketParts.forEach((partKey) => {
    const meta = PARTS_OF_SPEECH_META[partKey];
    if (!meta) return;
    const pickedWords = pickNonRepeatingWords(partKey, meta.words, WORDS_PER_ACTIVE_PART);
    pickedWords.forEach((word) => {
      selected.push({ word, part: partKey });
    });
  });

  const distractorParts = ALL_PARTS_OF_SPEECH.filter((part) => !activeWordSortBucketParts.includes(part));
  const chosenDistractorParts = pickRandomUnique(distractorParts, DISTRACTOR_WORDS_PER_ROUND);
  chosenDistractorParts.forEach((partKey) => {
    const meta = PARTS_OF_SPEECH_META[partKey];
    if (!meta || !meta.words.length) return;
    const [word] = pickNonRepeatingWords(partKey, meta.words, 1);
    if (!word) return;
    selected.push({ word, part: partKey });
  });

  return shuffleArray(selected);
}

function setupGameLists() {
  if (!wordBankEl || !nounBucketEl || !verbBucketEl || !adjectiveBucketEl || !gameFeedbackEl) return;
  randomizeWordSortBucketParts();
  hasScoredCurrentWordSet = false;

  wordBankEl.innerHTML = "";
  nounBucketEl.innerHTML = "";
  verbBucketEl.innerHTML = "";
  adjectiveBucketEl.innerHTML = "";

  const shuffled = buildWordSortRoundWords();

  shuffled.forEach((item) => {
    const div = document.createElement("div");
    div.className = "word-chip";
    div.textContent = item.word;
    div.dataset.part = item.part;
    wordBankEl.appendChild(div);
  });

  new Sortable(wordBankEl, {
    group: { name: "words", pull: true, put: true },
    animation: 150,
    ghostClass: "sortable-ghost",
  });

  [
    { el: nounBucketEl, part: "noun" },
    { el: verbBucketEl, part: "verb" },
    { el: adjectiveBucketEl, part: "adjective" },
  ].forEach(({ el }) => {
    new Sortable(el, {
      group: { name: "words", pull: true, put: true },
      animation: 150,
      ghostClass: "sortable-ghost",
    });
  });

  gameFeedbackEl.textContent = "";
  gameFeedbackEl.className = "feedback";
  nounBucketEl.parentElement.classList.remove("bucket-correct", "bucket-incorrect");
  verbBucketEl.parentElement.classList.remove("bucket-correct", "bucket-incorrect");
  adjectiveBucketEl.parentElement.classList.remove("bucket-correct", "bucket-incorrect");
}

function checkGameMatches() {
  if (isLabPage() && !activeLabProfileId) {
    setLabAuthMessage("Save a student profile before checking Word Sort.", "incorrect");
    if (gameFeedbackEl) {
      gameFeedbackEl.textContent = "Save or proceed with a student profile first, then check matches.";
      gameFeedbackEl.className = "feedback incorrect";
    }
    return;
  }

  let total = 0;
  let correct = 0;

  [wordBankEl, nounBucketEl, verbBucketEl, adjectiveBucketEl].forEach((container) => {
    if (!container) return;
    container.querySelectorAll(".word-chip").forEach((chip) => {
      chip.classList.remove("match-correct", "match-incorrect");
    });
  });

  const checkBucket = (bucketEl, part) => {
    const parent = bucketEl.parentElement;
    parent.classList.remove("bucket-correct", "bucket-incorrect");
    const chips = bucketEl.querySelectorAll(".word-chip");
    let bucketCorrect = true;

    chips.forEach((chip) => {
      const expected = chip.dataset.part;
      total += 1;
      const isCorrectPlacement = expected === part;
      if (isCorrectPlacement) {
        correct += 1;
        chip.classList.add("match-correct");
      } else {
        bucketCorrect = false;
        chip.classList.add("match-incorrect");
      }
    });

    if (chips.length > 0) {
      parent.classList.add(bucketCorrect ? "bucket-correct" : "bucket-incorrect");
    }
  };

  const bucketConfigs = getBucketConfigs();
  bucketConfigs.forEach((config) => {
    checkBucket(config.dropzone, config.dropzone.dataset.acceptPart || "noun");
  });

  // Words left in the bank that belong to an active bucket count as missed
  if (wordBankEl) {
    wordBankEl.querySelectorAll(".word-chip").forEach((chip) => {
      if (activeWordSortBucketParts.includes(chip.dataset.part)) {
        chip.classList.add("match-incorrect");
        total += 1;
      }
    });
  }

  if (total === 0) {
    gameFeedbackEl.textContent = "Drag some words into the buckets first.";
    gameFeedbackEl.className = "feedback incorrect";
    return;
  }

  const percent = Math.round((correct / total) * 100);
  let wordSortScoreDelta = 0;
  let progressDelta = 0;
  if (!hasScoredCurrentWordSet) {
    if (percent === 100) {
      wordSortScoreDelta = 10;
    } else if (percent >= 80) {
      wordSortScoreDelta = 5;
    } else if (percent >= 60) {
      wordSortScoreDelta = 2;
    }

    if (wordSortScoreDelta > 0) {
      score += wordSortScoreDelta;
      updateScoreUI();
    }

    progressDelta = 1;
    answeredCount += progressDelta;
    updateProgress();
    updateLabBadges();

    hasScoredCurrentWordSet = true;
  }

  if (percent === 100) {
    gameFeedbackEl.textContent = `Perfect sorting! All words are in the correct buckets.${wordSortScoreDelta ? ` +${wordSortScoreDelta} points.` : ""}`;
    gameFeedbackEl.className = "feedback correct";
  } else {
    gameFeedbackEl.textContent = `You matched ${correct} out of ${total} correctly. Adjust and try again.${wordSortScoreDelta ? ` +${wordSortScoreDelta} points.` : ""}`;
    gameFeedbackEl.className = "feedback incorrect";
  }

  saveLabHistoryEntry(
    {
      activity: "word-sort",
      correct,
      total,
      percent,
      scoreDelta: wordSortScoreDelta,
      progressDelta,
      result: percent === 100 ? "perfect" : "practice",
    },
    (profile) => {
      profile.labStats.wordSortAttempts += 1;
      if (percent === 100) {
        profile.labStats.wordSortPerfect += 1;
      }
    },
  );
}

function resetGame() {
  currentWordSetIndex += 1;
  setupGameLists();
}

// SECTION: Helpers
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// SECTION: Event Handlers
function setupLevelTabs() {
  const levelTabs = document.querySelectorAll(".level-tab");
  levelTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const level = tab.dataset.level;
      if (level === currentLevel) return;
      currentLevel = level;
      currentTopicKey = null;
      levelTabs.forEach((t) => t.classList.remove("level-tab-active"));
      tab.classList.add("level-tab-active");
      renderTopics();
    });
  });
}

function setupAgeChips() {
  const chips = document.querySelectorAll(".chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("chip-active"));
      chip.classList.add("chip-active");
    });
  });
}

function setupQuizControls() {
  if (!checkAnswerBtn || !nextQuestionBtn || !fibInputEl) return;
  checkAnswerBtn.addEventListener("click", checkAnswer);

  const playerCountButtons = document.querySelectorAll('[data-player-count]');
  playerCountButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      playerCountButtons.forEach((b) => b.classList.remove("chip-active"));
      btn.classList.add("chip-active");
      const count = Number(btn.dataset.playerCount) || 1;
      initPlayers(Math.min(Math.max(count, 1), MAX_PLAYERS));
    });
  });
  nextQuestionBtn.addEventListener("click", () => {
    nextQuestion();
  });

  fibInputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!checkAnswerBtn.disabled) {
        checkAnswer();
      }
    }
  });
}

function setupGameControls() {
  if (checkGameBtn) checkGameBtn.addEventListener("click", checkGameMatches);
  if (resetGameBtn) resetGameBtn.addEventListener("click", resetGame);

  const rollDiceBtn = document.getElementById("rollDiceBtn");
  const diceResultEl = document.getElementById("diceResult");
  if (!rollDiceBtn || !diceResultEl) return;
  rollDiceBtn.addEventListener("click", () => {
    if (!players.length) return;
    const current = players[currentPlayerIndex];
    const value = rollDice();
    lastRollValue = value;

    if (!gameStarted) {
      current.lastRoll = value;
      diceResultEl.textContent = `${current.name} rolled a ${value} to decide starting order.`;
      const allRolled = players.every((p) => typeof p.lastRoll === "number");
      if (allRolled) {
        const order = ["K-2", "3-5", "6-8", "9-12"]; // youngest first
        const highest = [...players].reduce((best, p) => {
          if (!best || p.lastRoll > best.lastRoll) return p;
          if (p.lastRoll === best.lastRoll) {
            const aIndex = order.indexOf(p.year);
            const bIndex = order.indexOf(best.year);
            return aIndex < bIndex ? p : best;
          }
          return best;
        }, null);
        currentPlayerIndex = players.findIndex((p) => p.id === highest.id);
        gameStarted = true;
        lastExtraRollValue = null;
        pendingSkipPlayerId = null;
        players.forEach((p) => {
          p.lastRoll = null;
        });
        renderPlayers();
        showInstruction(
          "Game start",
          `${highest.name} rolled the highest and will start. On your turn, roll the dino dice, answer a question, and move if you are correct.`,
        );
        updateTurnIndicator();
      } else {
        advanceTurn();
      }
    } else {
      diceResultEl.textContent = `${current.name} rolled a ${value}. Answer a question to try to move ${value} spaces.`;
    }
  });

  const modalCloseBtn = document.getElementById("modalCloseBtn");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", hideInstruction);
}

// SECTION: Init
window.addEventListener("DOMContentLoaded", () => {
  setupLevelTabs();
  setupAgeChips();
  setupQuizControls();
  setupGameControls();
  renderTopics();
  setupGameLists();
  updateScoreUI();
  initPlayers(1);
  setupLabAuth();
});
