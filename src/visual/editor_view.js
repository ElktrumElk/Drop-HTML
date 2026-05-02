import { basicSetup, EditorView } from "codemirror";
import { html } from "@codemirror/lang-html";
import { myTheme } from "./theme";



export const editor = (content) => new EditorView({

    doc: content,
    extensions: [
        basicSetup,
        html(),
        myTheme
    ],
    parent: document.getElementById("editor-container")
});
