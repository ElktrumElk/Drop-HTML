import comp from "../component/component";
import { crossEvent } from "../component/qRouter";

let isFileActive = false;
let isDisplayType = 'none';

/**
 * Function to set the boolean state of the pop up menu
 * @param {Boolean} state
 * @param {String} displayType
 */
export const setFileActive = (state, displayType) => {
    
    isFileActive = state;
    isDisplayType = displayType;

    document.getElementById('file_sub_menu').style.display = isDisplayType;

}


/**
 * The popup menu is for the menu pop up bar that comes from the top
 * @returns 
 */
export default async function PopUpMenu() {

    // Comment: When the file button is clicked
    crossEvent('click', 'file', () => {
        setFileActive(!isFileActive, isDisplayType === 'none' ? 'flex' : 'none');
    });

    return await comp({
        path: '/popup_menu.html',
        id: 'pop_menu-1'
    });
}