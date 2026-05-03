
export function folderPicker() {

    async function getFolderWithPermissions() {
        try {
            // 1. Open the folder picker with read/write request
            const directoryHandle = await window.showDirectoryPicker({
                mode: 'readwrite'
            });

            // 2. Double-check/Verify permissions (essential for re-opening)
            const hasPermission = await verifyPermission(directoryHandle, true);

            if (hasPermission) {
                console.log("Access granted to:", directoryHandle.name);
                
                // Now you can list files or read content
                await listFiles(directoryHandle);
            }

            return directoryHandle;
        } catch (err) {
            console.error("User cancelled or browser blocked access:", err);
        }
    }

    async function verifyPermission(handle, withWrite) {
        const opts = { mode: withWrite ? 'readwrite' : 'read' };

        // Check if we already have permission
        if ((await handle.queryPermission(opts)) === 'granted') {
            return true;
        }

        // Request explicit permission from the user
        if ((await handle.requestPermission(opts)) === 'granted') {
            return true;
        }

        return false;
    }

    async function listFiles(dirHandle) {
        for await (const entry of dirHandle.values()) {
          
            // entry.kind is either 'file' or 'directory'
        }
    }

    return { getFolderWithPermissions, verifyPermission, listFiles }
}