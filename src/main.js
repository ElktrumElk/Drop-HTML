import { folderPicker } from "./permission/folder_picker";
import { terminal } from "./permission/term";
import { renderFolder } from "./permission/render_project_folder";
import { renderComponents } from "./renderCmp";
import { setFileActive } from "./app_components/pop_up";



const handleFolderPicker = async () => {
  const { getFolderWithPermissions, verifyPermission, listFiles } = folderPicker();

  const directoryHandle = await getFolderWithPermissions();

  if (directoryHandle) {
    const { renderFileList } = renderFolder();
    await renderFileList(await directoryHandle);

    /**
     * @type HTMLInputElement
     */
    const projectTitle = document.getElementById('project-name');
    projectTitle.value = directoryHandle.name;
  }
}

function main() {

  /**
   * @type HTMLButtonElement
   */
  const folderBtn = document.getElementById('open_folder');
  const folderBtn2 = document.getElementById('dp-open-folder-btn');
  const folderBtn3 = document.getElementById('mn-open-folder-2');


  if (folderBtn) {
    folderBtn.addEventListener('click', handleFolderPicker);
    folderBtn2.addEventListener('click', handleFolderPicker);
    folderBtn3.addEventListener('click', handleFolderPicker, () => {
      
    });
    

  }

}

await renderComponents();
main();