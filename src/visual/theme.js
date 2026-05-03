import { EditorView } from "codemirror";
import { styles } from "./eStyle";

const { light, dark } = styles;

// 1. Define the theme first
export const myTheme = EditorView.theme({
    "&": {
        color: dark.txtColor,
        backgroundColor: dark.fgColor,
        height: "100%",
        width: "100%",
        overflowY: 'auto'
    },

    ".cm-content": {
        caretColor: "#0e9"
    },
    ".cm-gutters": {
        backgroundColor: dark.fgColor,
        color: "#555252",
        border: "none",
        overflowY: 'auto'
    },
    ".cm-activeLine": {
        backgroundColor: "#2a292945"
    },

    ".cm-activeLineGutter": {
        backgroundColor: "transparent"
    },

    // The main popup window
    ".cm-tooltip.cm-tooltip-autocomplete": {
        backgroundColor: "rgb(10, 30, 40)",
        border: "1px solid rgb(9, 19, 37)",
        borderRadius: "5px",
        color: "white"
    },
    // The list of items
    ".cm-tooltip-autocomplete ul li": {
        padding: "3px 8px"
    },
    // The selected (hovered/active) item
    ".cm-tooltip-autocomplete ul li[aria-selected]": {
        backgroundColor: "#074 !important", // Use !important to override defaults
        color: "white"
    },
    // Matches (the part of the word you already typed)
    ".cm-completionMatchedText": {
        textDecoration: "underline",
        color: "#0e9"
    },

    //the scrollbar 
    ".cm-scroller": {

        // For Firefox
        scrollbarWidth: "12px",

        // For IE/Edge (Legacy)
        msOverflowStyle: "12px",

        // For Chrome/Safari
        "&::-webkit-scrollbar": {
            display: "flex"
        },

        "&::-webkit-scrollbar-thumb": {
            background: "rgba(37, 37, 37, 0.31)",
            borderRadius: ".1rem",
            width: '1px'
        }
    },
    ".cm-tooltip-autocomplete ul::-webkit-scrollbar": {
        display: "none"
    },

    "& .cm-minimap": {
        backgroundColor: 'transparent',
        width: "10px !important",
        height: '100%'
    },
    "& .cm-minimap-inner": {
        width: "20px !important"
    },
    "& .cm-minimap *::-webkit-scrollbar": {
        display: 'none'
    },

    // The "active zone" box that follows your scroll
    "& .cm-minimap-overlay": {
        width: '100% !important',
        backgroundColor: "transparent",
        border: "none",

    },

    // The text or blocks inside the minimap
    "& .cm-minimap-gutter": {
        opacity: 0.6
    },

    "& .cm-minimap-gutter::-webkit-scrollbar": {
       display: 'none'
    }

}, { dark: true });

