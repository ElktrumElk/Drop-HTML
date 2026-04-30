
/**
 * @typedef {Object} Theme
 * @property {string} bgColor
 * @property {string} fgColor
 * @property {string} txtColor
 */

/**
 * @type {{ light: Theme, dark: Theme }}
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
        txtColor: '#faf8f8',
    }
}