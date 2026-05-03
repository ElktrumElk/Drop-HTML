

const resize = () => {

    /**
     * @type HTMLDivElement
     */
    const sideBarResize = document.getElementById('aside_resize');
    const termResize = document.getElementById('resize-terminal');
    const terminal_cnt = document.getElementById('terminal_cnt');
    const sideBarCnt = document.getElementById('side-bar-cnt');
    const app = document.getElementById('app');

    let isHover = false;
    let isSideBarJump = false;
    let isTermHover = false;

    let termStartPos;

    const sideBarResizeRect = sideBarResize.getBoundingClientRect().width;
    const termResizeRect = termResize.getBoundingClientRect().height;
    const termRectCnt = termResize.getBoundingClientRect().height;


    if (sideBarResize) {
        console.log(termResize);

        sideBarResize.addEventListener('mousedown', () => {
            if (!isHover) {
                isHover = true;
            }
        });

        termResize.addEventListener('mousedown', (e) => {
            if (!isTermHover) {
                isTermHover = true;
                termStartPos = e.clientY + termRectCnt * 20;
            }
        });

        document.body.addEventListener('mousemove', (e) => {
            if (isHover) {

                let moveX = e.clientX - sideBarResizeRect;

                if (moveX <= 75 || moveX >= 400) { return }
                else { app.style.gridTemplateColumns = `${moveX}px auto`; }
                if (moveX >= 200) {
                    sideBarCnt.style.display = 'flex';
                } else {
                    sideBarCnt.style.display = 'none';
                }
            }

            if (isTermHover) {
                const moveY = e.clientY - termResizeRect;
                if (moveY < 0 || moveY > 700) { return }
                else { terminal_cnt.style.height = `${termStartPos - moveY}px`; console.log(moveY) }
            }
        });

        document.body.addEventListener('mouseup', (e) => {
            isHover = false;
            isTermHover = false;
            isSideBarJump = false;

        });

    }
}

resize();