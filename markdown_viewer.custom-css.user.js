// ==UserScript==
// @name        markdown_viewer.custom.css.user.js
// @namespace   com.houseofivy
//
// @version     1.01
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
// @version     1
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
  + 'h1, h2, h3 { font-weight: 900; }'
  + 'code { font-family: "Fira Mono", "Open Sans Mono", "Anonymous Pro", monospace; font-size: 0.8em; }'
  + 'table { width: auto; }'
  ;
document.getElementsByTagName('HEAD') [0].appendChild(link);