import NOTES from "./notes.js";

import { ADD_NOTE_BUTTON } from "./elements.js";
import { addNewNodeHandler } from "./handlers.js";

function init() {
  ADD_NOTE_BUTTON.addEventListener("click", addNewNodeHandler);

  NOTES.render();
}

init();
