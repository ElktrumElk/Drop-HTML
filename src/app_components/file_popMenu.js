//file_sub_menu
import comp from "../component/component";

export default async function FilePopUpMenu() {
    return await comp({
        path: '/popup_menu.html',
        id: 'file_sub_menu'
    });
}