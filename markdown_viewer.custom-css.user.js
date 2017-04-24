// ==UserScript==
// @name        markdown_viewer.custom-css.user.js
// @namespace   com.houseofivy
//
// @version     1.39
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
// add customizations to the base css for the "Markdown Viewer" Firefox extension [by Thibaut Rousseau]
// ref: [Markdown Viewer] https://github.com/Thiht/markdown-viewer / https://addons.mozilla.org/en-US/firefox/addon/markdown-viewer
// NOTE: uses GreaseMonkey Firefox extension @ https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
// NOTE: must have "extensions.greasemonkey.fileIsGreasable"=TRUE (found in firefox about:config)
//
// add compatible customizations to the base css for "Markdown Viewer" Chrome extension [by Simeon Velichkov]
// ref: [Markdown Viewer] https://github.com/simov/markdown-viewer / https://chrome.google.com/webstore/detail/markdown-viewer/ckkdlimhmcjmikdlpkmbgfkaikojcbjk?hl=en
// NOTE: must enable "Allow access to file URLs" for customization of local markdown files
// NOTE: uses TamperMonkey  Chrome extension @ https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
// NOTE: * this is currently a *hack* since the Chrome "Markdown Viewer" extension adds the css into the BODY instead of the HEAD
//
var link = window.document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'data:text/css,' +
  // css selectors
  // ref: [base css ~ sss.css] https://github.com/Thiht/sss/blob/master/sss.css
  // see http://www.cssfontstack.com for font stack info
  'body { font-family: Lora, "Noto Serif", "DejaVu Serif", Palatino, serif; font-size: 1.2em; line-height: 1.35; }' +
  'body { max-width: 90%; }' +
  'h1, h2, h3, h4, h5, h6 { font-family: "Fira Sans", "Open Sans", "DejaVu Sans", Calibri, Arial, sans-serif; }' +
  'h1, h2 { font-weight: 400; }' +
  'h3, h4 { font-weight: 300; }' +
  'h5, h6 { font-weight: 200; }' +
  'h1 { font-size: 3em; }' +
  'h2 { font-size: 2.5em }' +
  'h3 { font-size: 2em }' +
  'h4 { font-size: 1.5em }' +
  'h5, h6 { font-size: 1.25em }' +
  // // see jsfiddle @ http://jsfiddle.net/5HQ7p
  // + "h1:after { content:' '; display:block; border:1px dashed #505050; border-radius:2px; -webkit-border-radius:2px; -moz-border-radius:2px; }"
  'h1 { border-bottom: 0.05em solid lightgrey; border-radius: 2px; }' +
  'h6 { color: grey }' +
  'pre { border-left: 4px solid green; }' +
  'code { font-family: "Fira Mono", "Open Sans Mono", "Anonymous Pro", monospace; font-size: 80%; }' +
  'code { border: 1px solid teal; border-radius: 2px; }' +
  'pre code { padding: 0; border: none; background: none; font-size: 75%; line-height: 1.5; }' +
  'sup code { padding: 0; background: none; font-size: 75%; border: none; }' +
  'table { width: auto; }' +
  '';
document.getElementsByTagName('HEAD')[0].appendChild(link);
document.getElementsByTagName('BODY')[0].appendChild(link);
