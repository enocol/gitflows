if(!self.define){let e,t={};const i=(i,s)=>(i=new URL(i+".js",s).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(t[o])return;let r={};const d=e=>i(e,o),l={module:{uri:o},exports:r,require:d};t[o]=Promise.all(s.map((e=>l[e]||d(e)))).then((e=>(n(...e),r)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"1dc3ee2be3fa6601d0657d96f6233a80"},{url:"main.js",revision:"fa7e4d18855b0aa99c40d3d0d023223b"}],{})}));
