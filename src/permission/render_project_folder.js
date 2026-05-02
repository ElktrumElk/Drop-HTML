import { styles } from "../visual/eStyle";
import { editor } from "../visual/editor_view";

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
        const openFolderCnt = document.getElementById('open_folder_cnt');
        openFolderCnt.remove();
        listContainer.innerHTML = ''; // Clear previous list

        for await (const entry of dirHandle.values()) { //
            const li = document.createElement('li');
            const span = document.createElement('span');
            const img = document.createElement('img');

            span.textContent = entry.name;
            li.className = entry.kind === 'directory' ? 'folder-item' : 'file-item';

            if (li.classList.value === 'file-item') {
                const { fileTypeIc } = styles;
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
            }

            if (entry.kind === 'file') {
                li.addEventListener('click', async () => {
                    // Highlight active file (optional)
                    document.querySelectorAll('.file-item').forEach(el => el.classList.remove('active'));
                    li.classList.add('active');

                    /**
                     * @type String
                     */
                    let fileContent = await openFile(entry); // Call open function when clicked;
                    editor(fileContent);
                });
            }
            li.appendChild(img);
            li.appendChild(span);
            listContainer.appendChild(li);
        }
    }
    return { openFile, renderFileList };
}