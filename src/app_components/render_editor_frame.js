//id="editor-container" 

/**
 * ## RenderEditorFrame
 * The **RenderEditorFrame** is used to render the ditors when a button file is clicked
 * 
 * @param {String} frameId 
 * @param {Boolean} isOpen 
 * @returns Void
 */
export const RenderEditorFrame = (frameId, isOpen = false) => {
    // Comment: Get the main parent where the editor and it frame lyes
    const parent = document.getElementById('editor_panel');

    // Comment: Check if the editor has already been open prevention of recreating it.
    if (isOpen) {

        // Comment: Hide all the frame or the one even active
        Array.from(parent.children)?.forEach(child => {
            child.style.display = 'none';
        });

        // Comment: Display the targeted editor and it frame
        document.getElementById(frameId).style.display = 'flex';
        return;
    }

    // Comment: Create the frame of the editor
    const frame = document.createElement('div');
    frame.setAttribute('class', 'editor');
    frame.setAttribute('id', frameId);

    // Comment: Hide all tabs
    Array.from(parent.children)?.forEach(child => {
        child.style.display = 'none';
    });

    // Comment: Add the new Editor frame
    parent.appendChild(frame);
    frame.style.display = 'flex'; // set style to flex

    return frame;

}