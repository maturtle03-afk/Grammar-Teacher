/**
 * seed-profiles.js
 * Run this once in the browser console while quiz.html is open.
 * It clears all saved profiles and creates one test student per grade range.
 *
 * Usage:
 *   1. Open quiz.html in your browser.
 *   2. Open DevTools (F12) → Console tab.
 *   3. Paste the entire contents of this file and press Enter.
 */

(function seedTestProfiles() {
  const PLAYER_PROFILES_KEY = "grammarGamePlayerProfiles";
  const LAB_ACTIVE_PROFILE_KEY = "grammarGameActiveLabProfileId";

  const testStudents = [
    { name: "Test Student K-2",  grade: "K-2"  },
    { name: "Test Student 3-5",  grade: "3-5"  },
    { name: "Test Student 6-8",  grade: "6-8"  },
    { name: "Test Student 9-12", grade: "9-12" },
  ];

  const profiles = testStudents.map(({ name, grade }) => ({
    id: name.toLowerCase().replace(/\s+/g, "-"),
    name,
    lastPlayedGrade: grade,
    wins: 0,
    losses: 0,
    history: [],
    labStats: {
      quizCorrect: 0,
      quizIncorrect: 0,
      wordSortAttempts: 0,
      wordSortPerfect: 0,
    },
  }));

  localStorage.setItem(PLAYER_PROFILES_KEY, JSON.stringify(profiles));
  localStorage.removeItem(LAB_ACTIVE_PROFILE_KEY);

  console.log(
    `%c✔ Profiles seeded (${profiles.length} students). Reload the page to see them.`,
    "color: green; font-weight: bold;"
  );
  profiles.forEach((p) => console.log(`  • ${p.name} — Grade ${p.lastPlayedGrade}`));

  // Auto-reload if the page is already quiz.html
  if (confirm("Profiles seeded! Reload the page now?")) {
    location.reload();
  }
})();
