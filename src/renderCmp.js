import Hambugger from "./app_components/hambugger";
import render from "./component/render";
import PopUpMenu from "./app_components/pop_up";
import FilePopUpMenu from "./app_components/file_popMenu";


export async function renderComponents() {

    const ham = render({
        components: await Hambugger(),
        id: 'hamBugger',
        type: 'replace'
    });

    const pop = render({
        components: await PopUpMenu(),
        id: 'header',
        type: 'append'
    });

    const filePop = render({
        components: await FilePopUpMenu(),
        id: 'header',
        type: 'append'
    });

    const cmp = await Promise.allSettled([ham, pop, filePop]);

};