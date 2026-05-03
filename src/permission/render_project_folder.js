import { RenderEditorFrame } from "../app_components/render_editor_frame";
import { styles } from "../visual/eStyle";
import { editor } from "../visual/editor_view";
import RenderTabBtn from "../app_components/render_tab_btn";

export function renderFolder() {

    // Function to read and display a file's content
    async function openFile(fileHandle) {
        const file = await fileHandle.getFile(); //
        const contents = await file.text();      //
        return contents;
    }

    // Function to render the folder contents into your UI
    async function renderFileList(dirHandle) {

        const listContainer = document.getElementById('file_cnt_ui');

        // Comment: The open folder container 
        const openFolderCnt = document.getElementById('open_folder_cnt');
        openFolderCnt.remove(); // Remove

        listContainer.innerHTML = ''; // Clear previous list

        for await (const entry of dirHandle.values()) { //
            const li = document.createElement('li');
            const span = document.createElement('span');
            const img = document.createElement('img');

            // Comment: Give random dataset id
            const randId = Math.floor(Math.random() * 9999);

            span.textContent = entry.name; // Name of the file
            li.className = entry.kind === 'directory' ? 'folder-item' : 'file-item';

            li.setAttribute('data-id', `${entry.name}-${randId}`);
            span.setAttribute('data-id', `${entry.name}-${randId}`);

            const { fileTypeIc } = styles;

            if (li.classList.value === 'file-item') {

                if (span.textContent.split('.').reverse()[0] === 'html') {
                    img.src = fileTypeIc.html;
                }
                else if (span.textContent.split('.').reverse()[0] === 'css') {
                    img.src = fileTypeIc.css;
                }
                else if (span.textContent.split('.').reverse()[0] === 'js') {
                    img.src = fileTypeIc.js;
                }
                else if (span.textContent.split('.').reverse()[0] === 'json') {
                    img.src = fileTypeIc.json;
                }
                else {
                    img.src = fileTypeIc.txt;
                }
            } else {
                img.src = fileTypeIc.folder
            }

            if (entry.kind === 'file') {

                li.addEventListener('click', async (e) => {

                    //Check if already openned to prevent multiple open
                    if (e.target.dataset.open) {
                        RenderEditorFrame(e.target.dataset.id, e.target.dataset.open);
                        return;
                    }
                    else {
                        RenderTabBtn({
                            typeIc: '',
                            tabName: entry.name,
                            dataId: `${entry.name}-${randId}`,
                            dataState: true
                        });
                    }

                    // Highlight active file (optional)
                    document.querySelectorAll('.file-item').forEach(el => el.classList.remove('active'));
                    e.target.classList.add('active');
                    e.target.setAttribute('data-open', true);
                    e.target.setAttribute('data-type', `${entry.name.split('.').reverse()[0]}`);



                    /**
                     * @type String
                     */
                    let fileContent = await openFile(entry); // Call open function when clicked;
                    editor(fileContent, e.target.dataset.id, e.target.dataset.type);
                });
            }

            li.appendChild(img);
            li.appendChild(span);
            listContainer.appendChild(li);
        }
    }
    return { openFile, renderFileList };
}