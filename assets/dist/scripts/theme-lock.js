!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}({19:function(e,t,n){e.exports=n("CKUc")},CKUc:function(e,t){jQuery(function(e){e("#theme_lock").change(function(){this.checked||(window.confirm(PB_ThemeLockToken.confirmation)?e("#theme_lock").attr("checked",!1):e("#theme_lock").attr("checked",!0))})})}});