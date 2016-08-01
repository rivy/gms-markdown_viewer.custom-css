// ==UserScript==
// @name        markdown_viewer.custom-css.user.js
// @namespace   com.houseofivy
//
// @version     1.32
// @updateURL   https://raw.githubusercontent.com/rivy/gms-markdown_viewer.custom-css/master/markdown_viewer.custom-css.user.js
//
// file extension: .m(arkdown|kdn?|d(o?wn)?)
// @include     file://*.markdown
// @include     file://*.mkdn
// @include     file://*.mkd
// @include     file://*.mdown
// @include     file://*.mdwn
// @include     file://*.md
//
// @grant       none
// ==/UserScript==
//
// add customizations to the base css for the "Markdown Viewer" Firefox extension
// ref: [Markdown Viewer] https://github.com/Thiht/markdown-viewer / https://addons.mozilla.org/en-US/firefox/addon/markdown-viewer
// NOTE: must have "extensions.greasemonkey.fileIsGreasable"=TRUE (found in firefox about:config)
//
var link = window.document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'data:text/css,'
  // css selectors
  // ref: [base css ~ sss.css] https://github.com/Thiht/sss/blob/master/sss.css
  // see http://www.cssfontstack.com for font stack info
  + 'body { font-family: Lora, "Noto Serif", "DejaVu Serif", Palatino, serif; font-size: 1em; }'
  + 'body { max-width: 90%; }'
  + 'h1, h2, h3, h4, h5, h6 { font-family: "Fira Sans", "Open Sans", "DejaVu Sans", Calibri, Arial, sans-serif; }'
  + 'h1, h2 { font-weight: 400; }'
  + 'h3, h4 { font-weight: 300; }'
  + 'h5, h6 { font-weight: 200; }'
  + 'h1 { font-size: 3em }'
  + 'h2 { font-size: 2.5em }'
  + 'h3 { font-size: 2em }'
  + 'h4 { font-size: 1.5em }'
  + 'h5, h6 { font-size: 1.25em }'
  + 'h6 { color: gray }'
  + 'code { font-family: "Fira Mono", "Open Sans Mono", "Anonymous Pro", monospace; font-size: 0.8em; }'
  + 'table { width: auto; }'
  //// see jsfiddle @ http://jsfiddle.net/5HQ7p
  //+ "h1:after { content:' '; display:block; border:1px dashed #505050; border-radius:2px; -webkit-border-radius:2px; -moz-border-radius:2px; }"
  + "h1 { border-bottom: 0.05em solid lightgrey; border-radius:2px; -webkit-border-radius:2px; -moz-border-radius:2px; }"
  ;
document.getElementsByTagName('HEAD') [0].appendChild(link);
