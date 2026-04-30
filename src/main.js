import { basicSetup, EditorView } from "codemirror"; // Note: EditorView is also exported from 'codemirror'
import { html } from "@codemirror/lang-html";

// 1. Define the theme first
const myTheme = EditorView.theme({
  "&": {
    color: "white",
    backgroundColor: "rgb(6, 11, 13)",
    minHeight: "100%",
    width: "100%"
  },
  ".cm-content": {
    caretColor: "#0e9"
  },
  ".cm-gutters": {
    backgroundColor: "rgb(6, 11, 13)", // Match your background
    color: "#555252",
    border: "none"
  },
  ".cm-activeLine": {
    backgroundColor: "#2a292945"
  },
  ".cm-activeLineGutter": {
    backgroundColor: "transparent"
  }

}, { dark: true });

// 2. Pass it into the extensions array
const editor = new EditorView({
  doc: '<div class="hello">\n  <h1>Hello World</h1>\n</div>',
  extensions: [
    basicSetup,
    html(),
    myTheme // <--- Add it here!
  ],
  parent: document.getElementById("editor-container")
});
