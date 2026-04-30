import { basicSetup, EditorView } from "codemirror";
import { html } from "@codemirror/lang-html";
import { myTheme } from "./theme";
// 2. Pass it into the extensions array
export const editor = new EditorView({
    doc: '<div class="hello">\n  <h1>Hello World</h1>\n</div>',
    extensions: [
        basicSetup,
        html(),
        myTheme
    ],
    parent: document.getElementById("editor-container")
});
