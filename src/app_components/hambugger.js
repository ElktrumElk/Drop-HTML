import comp from "../component/component";
import { crossEvent } from "../component/qRouter";
import { setFileActive } from "./pop_up";


export default async function Hambugger() {
    let isActive = false;

    crossEvent("click", 'ham_menu', () => {

        if (!isActive) {
            document.getElementById('pop_menu-1').style.display = 'flex';
            isActive = true;
        } else {
            document.getElementById('pop_menu-1').style.display = '';
            document.getElementById('file_sub_menu').style.display = '';
            setFileActive(false);
            isActive = false;

        }
    });


    return await comp({
        path: '/hambugger.html',
        id: 'ham_menu',
        isCached: false
    });
}