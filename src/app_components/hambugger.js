import comp from "../component/component";
import { crossEvent } from "../component/qRouter";
import { setFileActive } from "./pop_up";


export default async function Hambugger() {
    let isActive = false;

    // Comment: When the hambugger menu is clicked
    crossEvent("click", 'ham_menu', () => {

        if (!isActive) {
            document.getElementById('pop_menu-1').style.display = 'flex';
            isActive = true;

        } else {
            document.getElementById('pop_menu-1').style.display = '';
            setFileActive(false, 'none');
            isActive = false;
        }

    });


    return await comp({
        path: '/hambugger.html',
        id: 'ham_menu',
        isCached: false
    });
}