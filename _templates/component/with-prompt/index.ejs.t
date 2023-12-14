---
to: components/<%= h.changeCase.pascal(name) %>/index.js
---
export * from './<%= h.changeCase.pascal(name) %>'
export { default } from './<%= h.changeCase.pascal(name) %>'
