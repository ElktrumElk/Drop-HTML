import { basicSetup, EditorView } from "codemirror";
import { html } from "@codemirror/lang-html";
import { myTheme } from "./theme";
import { RenderEditorFrame } from "../app_components/render_editor_frame";



export const editor = (content, frameId) => new EditorView({

    doc: content,
    extensions: [
        basicSetup,
        html(),
        myTheme
    ],
    parent: RenderEditorFrame(frameId)
});
