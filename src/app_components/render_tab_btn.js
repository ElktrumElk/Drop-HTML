import { RenderEditorFrame } from "./render_editor_frame";

/**
 * 
 * @param {Object} param0
 * @param {String} param0.typeIc
 * @param {String} param0.tabName
 * @param {String} param0.dataId
 * @param {Boolean} param0.dataState
 */
export default function RenderTabBtn({ typeIc, tabName, dataId, dataState }) {
    /**
     * @type HTMLDivElement 
     */
    const parent = document.getElementById('ed-file-tab-cnt');
    const button = document.createElement('button');
    const fileTypeIc = document.createElement('img');
    const span = document.createElement('span');
    const closeIc = document.createElement('img');

    button.setAttribute('class', 'tabs');
    button.setAttribute('data-id', dataId);
    button.setAttribute('data-open', dataState);
    fileTypeIc.setAttribute('data-id', dataId);
    fileTypeIc.setAttribute('data-open', dataState);
    span.setAttribute('data-id', dataId);
    span.setAttribute('data-open', dataState);


    fileTypeIc.src = typeIc;
    span.innerText = tabName;
    closeIc.src = 'https://img.icons8.com/?size=100&id=71200&format=png&color=7a7a7a'

    button.appendChild(fileTypeIc);
    button.appendChild(span);
    button.appendChild(closeIc);

    parent.appendChild(button);

    button.addEventListener('click', () => RenderEditorFrame(button.dataset.id, button.dataset.open));
}