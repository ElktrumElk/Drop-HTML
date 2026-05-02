
/**
 * @typedef {Object} Theme
 * @property {string} bgColor
 * @property {string} fgColor
 * @property {string} txtColor
 * 
 * @typedef {Object} fileIcon
 * @property {string} txt
 * @property {string} js
 * @property {string} css
 * @property {string} html
 * @property {string} folder
 * @property {string} gitignore
 * @property {string} json
 */

/**
 * @type {{ light: Theme, dark: Theme, fileTypeIc: fileIcon }}
*/

export const styles = {
    light: {
        bgColor: '#f5f5f5',
        fgColor: '#ffffff',
        txtColor: '#0b0b0b',
    },
    dark: {
        bgColor: '#010101',
        fgColor: '#000000',
        txtColor: '#c4c2c2',
        cl: '#f2ff00'
    },
    fileTypeIc : {
        folder: 'https://img.icons8.com/?size=100&id=74359&format=png&color=7a7a7a',
        html: 'https://img.icons8.com/?size=100&id=11260&format=png&color=ff7f50',
        css: 'https://img.icons8.com/?size=100&id=38273&format=png&color=062bb0',
        js: 'https://img.icons8.com/?size=100&id=aI7FuaV1tPNN&format=png&color=f2ff00',
        json: 'https://img.icons8.com/?size=100&id=22441&format=png&color=f2ff00',
        gitignore: 'https://img.icons8.com/?size=100&id=16335&format=png&color=7a7a7a',
        txt: 'https://img.icons8.com/?size=100&id=1395&format=png&color=7a7a7a',

    }
}