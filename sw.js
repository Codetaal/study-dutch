if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let f={};const c=e=>n(e,a),d={module:{uri:a},exports:f,require:c};i[a]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(r(...e),f)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-b9UMZfOn.css",revision:null},{url:"assets/index-BhU3893y.js",revision:null},{url:"images/bunny.png",revision:"4ab4e88765f0713f1a27ae82370f06c0"},{url:"images/cow.png",revision:"846fdc052e494f4438d0953993467207"},{url:"images/dog.png",revision:"1559b46ea0ebad1cecf999612beab0e9"},{url:"images/flower.png",revision:"5a6d0f7cef8f5c05b54918e8585c9651"},{url:"images/frog.png",revision:"1e643ecdc11dd0eadfcb7fe2c5ddeded"},{url:"images/giraf.png",revision:"7620173e3a7461eca8b7a887e3abcc2d"},{url:"images/icon.png",revision:"7f38f7cbad860f44beaafaf80344c1ea"},{url:"images/koala.png",revision:"5d2e61d26ea7590f7d2bc28d06634de6"},{url:"images/lion.png",revision:"b272bae7960eb79a139afb50c462cff3"},{url:"images/miffy-cheering.png",revision:"47aefea563103c57418e6566849e8a66"},{url:"images/miffy-ghosting.png",revision:"deb9bd0d51bdeafa619bf670ff9c6c9b"},{url:"images/miffy-peeking.png",revision:"e6294afc4b94b33854fdc10b1efaa01e"},{url:"images/miffy.png",revision:"2e3ebf16bf5cc75ee706a2a5ac1f0ce4"},{url:"images/pig.png",revision:"72e68896dd72a243625c91086e935037"},{url:"images/sheep.png",revision:"c93259457d141ea79380c89c821ac88b"},{url:"index.html",revision:"b9582e7c2b67a2cc26c834e738ddd1ef"},{url:"registerSW.js",revision:"f0123fa2eddfd6a2f0346afe87a123eb"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"38e228ee99eb13db5b594d3f7a1e5699"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
