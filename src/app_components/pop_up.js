import comp from "../component/component";
import { crossEvent } from "../component/qRouter";

let isFileActive = false;

/**
 * @param {Boolean} state
 */
export const setFileActive = (state) => {
    isFileActive = state;
}

export default async function PopUpMenu() {
    crossEvent('click', 'file', () => {

        if (!isFileActive) {
            document.getElementById('file_sub_menu').style.display = 'flex';
            isFileActive = true;
        } else {
            document.getElementById('file_sub_menu').style.display = '';
            isFileActive = false;
        }
    })

    return await comp({
        path: '/popup_menu.html',
        id: 'pop_menu-1'
    });
}