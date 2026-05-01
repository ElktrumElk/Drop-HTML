import { editor } from "./visual/editor_view";
import { folderPicker } from "./permission/folder_picker";
import { terminal } from "./permission/term";

function main() {
  editor;

 
  /**
   * @type HTMLButtonElement
   */
  const folderBtn = document.getElementById('open_folder');

  if (folderBtn) {
    folderBtn.addEventListener('click', async () => {
      const { getFolderWithPermissions, verifyPermission, listFiles } = folderPicker();

      const directoryHandle = await getFolderWithPermissions();

      if (directoryHandle) {
        const files = await listFiles(directoryHandle);
        console.log("Folder contents:", files);
      }

    });
  }

}
main();