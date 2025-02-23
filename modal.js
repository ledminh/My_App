import { MODAL_CONTAINER } from "./elements.js";

export const ADD_NEW_NOTE = "MODAL/ADD_NEW_NOTE";
export const EDIT_NOTE = "MODAL/EDIT_NOTE";
export const DELETE_NOTE = "MODAL/DELETE_NOTE";
export const VIEW_NOTE = "MODAL/VIEW_NOTE";

function open(mode, { title, content }) {
  const modal = createModal(mode);

  switch (mode) {
    case EDIT_NOTE:
      modal.querySelector("#title").value = title;
      modal.querySelector("#content").value = content;
      break;
    case DELETE_NOTE:
      console.log("Delete note modal opened");

      break;
    case VIEW_NOTE:
      console.log("View note modal opened");
      break;
    default:
      console.log("Invalid mode");
      break;
  }

  MODAL_CONTAINER.appendChild(modal);
}

function close() {
  MODAL_CONTAINER.innerHTML = "";
}

export default {
  open,
  close,
};

/************************************
 *
 */

const modalWrapperHTML = `
        <div class="modal" id="modal">
          <div class="modal-content">
            
          </div>
        </div>
`;

const closeButtonHTML = `<button class="close" id="close-button">&times;</button>`;

const modalContentHTML = {
  [ADD_NEW_NOTE]: `
            <form>
              <h2>Add New Note</h2>
              <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" name="title" />
              </div>
              <div class="form-group">
                <label for="content">Content</label>
                <textarea id="content" name="content"></textarea>
              </div>
              <button type="submit">Add Note</button>
            </form>
  `,
  [EDIT_NOTE]: `
            <form>
                <h2>Edit Note</h2>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" id="title" name="title" />
                </div>
                <div class="form-group">
                    <label for="content">Content</label>
                    <textarea id="content" name="content"></textarea>
                </div>
                <button type="submit">Update Note</button>
            </form>
  `,

  [DELETE_NOTE]: `
            <form>
                <h2>Delete Note</h2>
                <p>Are you sure you want to delete this note?</p>
                <button class="danger" type="submit">Delete Note</button>
            </form>
    `,

  [VIEW_NOTE]: `
            <div class="note-content">
                <h2>My First Note</h2>
                <p>
                    This is a very long text. It continues to provide more details
                    about the note, including various aspects and information that
                    might be relevant to the user. The content is meant to be
                    comprehensive and cover all necessary points that need to be
                    addressed in this particular note. Additionally, it includes
                    further elaboration on the subject matter, ensuring that all
                    critical elements are thoroughly discussed and presented in a
                    clear and concise manner.
                </p>
            </div>
    `,
};

function createModal(mode) {
  const modalWrapper = htmlToNode(modalWrapperHTML);

  modalWrapper.querySelector(".modal-content").innerHTML =
    modalContentHTML[mode];

  const closeButton = htmlToNode(closeButtonHTML);
  closeButton.addEventListener("click", close);

  modalWrapper.querySelector(".modal-content").appendChild(closeButton);

  return modalWrapper;
}

const htmlToNode = (html) => {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstChild;
};
