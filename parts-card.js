const partsDefinitions = {
  noun: "A noun names a person, place, thing, or idea.",
  pronoun: "A pronoun replaces a noun to avoid repetition.",
  verb: "A verb shows action or a state of being.",
  adjective: "An adjective modifies (changes) a noun or pronoun. Instead of just saying 'The girl is sleeping', you can say, 'The pretty girl is sleeping', where 'pretty' changes the way the girl looks.",
  adverb: "An adverb modifies (changes) a verb, adjective, or another adverb. Instead of just saying, 'The girl runs', you can say, 'The girl runs fast' where the word 'fast' changes the way she runs.",
  preposition: "A preposition shows the relationship between words in a sentence.",
  conjunction: "A conjunction connects words, phrases, or clauses.",
  interjection: "An interjection expresses sudden feeling or emotion.",
  article: "An article introduces a noun: a, an, or the."
};

function setupPartsDefinitionCard() {
  const tiles = document.querySelectorAll(".parts-dino-item[data-pos]");
  const defTitle = document.getElementById("partsDefTitle");
  const defLabel = document.getElementById("partsDefLabel");
  const defBody = document.getElementById("partsDefBody");

  if (!tiles.length || !defTitle || !defLabel || !defBody) {
    return;
  }

  tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
      const key = tile.dataset.pos;
      const labelEl = tile.querySelector(".parts-dino-label");
      const label = labelEl ? labelEl.textContent : "Part of Speech";
      const definition = partsDefinitions[key] || "Definition coming soon.";

      tiles.forEach((item) => item.classList.remove("parts-dino-item-active"));
      tile.classList.add("parts-dino-item-active");

      defTitle.textContent = "Definition";
      defLabel.textContent = label;
      defBody.textContent = definition;
    });
  });
}

window.addEventListener("DOMContentLoaded", setupPartsDefinitionCard);
