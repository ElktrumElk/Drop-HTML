

function renderFolder() {
    // Function to read and display a file's content
    async function openFile(fileHandle) {
        const file = await fileHandle.getFile(); //
        const contents = await file.text();      //
        document.getElementById('text_1').value = contents;
    }

    // Function to render the folder contents into your UI
    async function renderFileList(dirHandle) {
        const listContainer = document.getElementById('file_list_ui');
        listContainer.innerHTML = ''; // Clear previous list

        for await (const entry of dirHandle.values()) { //
            const li = document.createElement('li');
            li.textContent = entry.name;
            li.className = entry.kind === 'directory' ? 'folder-item' : 'file-item';

            if (entry.kind === 'file') {
                li.addEventListener('click', async () => {
                    // Highlight active file (optional)
                    document.querySelectorAll('.file-item').forEach(el => el.classList.remove('active'));
                    li.classList.add('active');

                    await openFile(entry); // Call open function when clicked
                });
            }

            listContainer.appendChild(li);
        }
    }
    return {openFile, renderFileList};
}