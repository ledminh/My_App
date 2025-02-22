import NOTES from "./notes.js";

import { ADD_NOTE_BUTTON, CLOSE_BUTTON } from "./elements.js";
import { addNewNodeHandler, closeModalHandler } from "./handlers.js";

function init() {
  ADD_NOTE_BUTTON.addEventListener("click", addNewNodeHandler);

  CLOSE_BUTTON.addEventListener("click", closeModalHandler);

  NOTES.render();
}

init();
