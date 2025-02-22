import { NOTES_LIST } from "./elements.js";

const NOTES = [
  {
    id: 1,
    title: "First note",
    content: "This is the first note",
  },
  {
    id: 2,
    title: "Second note",
    content: "This is the second note",
  },
  {
    id: 3,
    title: "Third note",
    content: "This is the third note",
  },
  {
    id: 4,
    title: "Fourth note",
    content: "This is the fourth note",
  },
  {
    id: 5,
    title: "Fifth note",
    content: "This is the fifth note",
  },
];

function render() {
  NOTES_LIST.innerHTML = "";
  NOTES.map(processNote).forEach((note) => note.render());
}

export default {
  render,
};

/*****************************/
function processNote(note) {
  const { title, content } = note;

  return {
    html: `<li class="note-list-item">
              <div class="note-list-item__content">
                <h2>${title}</h2>
                <p>${content}</p>
                <div>
                  <button>Edit</button>
                  <button class="danger">Delete</button>
                </div>
              </div>
            </li>`,

    render() {
      const node = htmlToNode(this.html);
      const editButton = node.querySelector("button");
      const deleteButton = node.querySelector("button.danger");

      editButton.addEventListener("click", () => {
        console.log(`Edit button clicked for note: ${title}`);
      });

      deleteButton.addEventListener("click", () => {
        console.log(`Delete button clicked for note: ${title}`);
      });

      NOTES_LIST.appendChild(node);
    },
  };
}

function htmlToNode(html) {
  const template = document.createElement("template");
  template.innerHTML = html;
  const nNodes = template.content.childNodes.length;
  if (nNodes !== 1) {
    throw new Error(
      `html parameter must represent a single node; got ${nNodes}. ` +
        "Note that leading or trailing spaces around an element in your " +
        'HTML, like " <img/> ", get parsed as text nodes neighbouring ' +
        "the element; call .trim() on your input to avoid this."
    );
  }
  return template.content.firstChild;
}
