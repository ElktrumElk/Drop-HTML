import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import { WebglAddon } from '@xterm/addon-webgl';
import '@xterm/xterm/css/xterm.css';
import { styles } from '../visual/eStyle';

export function terminal({ name }) {
    const { dark } = styles;
    const container = document.getElementById('terminal_cnt');

    // Safety check: Don't run if the div doesn't exist yet
    if (!container) {
        console.error("Terminal container #terminal_cnt not found!");
        return;
    }

    const fitAddon = new FitAddon();
    const webglAddon = new WebglAddon();

    const term = new Terminal({
        cursorBlink: true,
        fontFamily: '"Fira Code", monospace',
        letterSpacing: 0,
        theme: {
            backgroundColor: dark.fgColor,
            foreground: '#ffffff'
        }
    });



    // 1. Load Addons
    term.loadAddon(fitAddon);

    // 2. Open Terminal
    term.open(container);

    // 4. Initial fit and writing
    fitAddon.fit();
    term.write(`${name} \x1B[1;3;31mxterm.js\x1B[0m $ `);

    // 5. IMPORTANT: The Input Handler (Makes it typeable)
    term.onData(data => {
        // Handle Enter key (\r)
        if (data === '\r') {
            term.write('\r\n' + `${name} $ `);
        }
        // Handle Backspace (\x7f)
        else if (data === '\x7f') {
            // Only backspace if there is something to delete
            // (Simplification for now)
            term.write('\b \b');
        }
        else {
            term.write(data);
        }
    });

    // 6. Resize listener
    window.addEventListener('resize', () => fitAddon.fit());

    return term; // Return instance in case you need it elsewhere
}
