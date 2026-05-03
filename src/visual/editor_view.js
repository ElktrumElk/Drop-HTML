import { basicSetup, EditorView } from "codemirror";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import { json } from "@codemirror/lang-json";
import { myTheme } from "./theme";
import { RenderEditorFrame } from "../app_components/render_editor_frame";
import { showMinimap } from '@replit/codemirror-minimap';
import { myHighlightStyle } from "./syntaxHighlight";
import { syntaxHighlighting } from "@codemirror/language";

export const editor = (content, frameId, langType) => {

    const langExtension = {
        'html': html(),
        'js': javascript(),
        'json': json(),
        'css': css()
    }[langType] || html();

    new EditorView({

        doc: content,
        extensions: [
            basicSetup,
            langExtension,
            myTheme,
            syntaxHighlighting(myHighlightStyle),
            showMinimap.compute(['doc'], (state) => ({
                create: (v) => {
                    const dom = document.createElement('div');
                    return { dom };
                },
                displayText: 'blocks', // Options: 'blocks' or 'characters'
                showOverlay: 'always', // Options: 'always' or 'mouse-over'
            })),

        ],
        parent: RenderEditorFrame(frameId)
    });
}
