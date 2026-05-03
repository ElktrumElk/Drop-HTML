import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags } from "@lezer/highlight";


// Create your custom highlighting rules
export const myHighlightStyle = HighlightStyle.define([
    { tag: tags.keyword, color: "#ff7b72", fontWeight: "bold" }, // Keywords like 'export', 'const'
    { tag: tags.string, color: "#a5d6ff" },                    // "Hello World"
    { tag: tags.comment, color: "#8b949e", fontStyle: "italic" }, // // Comments
    { tag: tags.variableName, color: "#d2a8ff" },              // Variable names
    { tag: tags.number, color: "#79c0ff" },                    // 123
    { tag: tags.operator, color: "#35caf3" },                  // +, -, =, etc.
    { tag: tags.tagName, color: "#0cf149d6" } ,                // +, -, =, etc.
    { tag: tags.attributeName, color: "#17adedd6" } ,                // +, -, =, etc.
]);
