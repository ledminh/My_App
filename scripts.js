import NOTES from "./notes.js";

const MODAL = document.getElementById("modal");
const ADD_NOTE_BUTTON = document.getElementById("add-note-button");

function init() {
  ADD_NOTE_BUTTON.addEventListener("click", addNewNodeHandler);

  NOTES.render();
}

init();

/**************************/

function addNewNodeHandler() {
  MODAL.style.display = "block";
}
