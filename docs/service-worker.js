if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let f={};const c=e=>a(e,r),b={module:{uri:r},exports:f,require:c};s[r]=Promise.all(i.map((e=>b[e]||c(e)))).then((e=>(d(...e),f)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.ddf0ff8d.css",revision:"9d162fd89d2800d86e7eb7054b4df743"},{url:"assets/img/danger-dark.86c63c40.svg",revision:"86c63c4006d5cd5f860cdef57310696a"},{url:"assets/img/danger.1c7d8a0f.svg",revision:"1c7d8a0f45b8bee5d5b92334a16e2711"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.a1decb69.svg",revision:"a1decb69db82fb8eebb48704dd74e649"},{url:"assets/img/info.6f2cfedb.svg",revision:"6f2cfedb8e6d19d1b24eb73943f7ff4e"},{url:"assets/img/note-dark.8668720f.svg",revision:"8668720f2e50ebd01173f11a89d9da6e"},{url:"assets/img/note.32319b2e.svg",revision:"32319b2e9c86860d8a4f1c8f660096cb"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.0d0028db.svg",revision:"0d0028db13caec45ac1527d8b673fae0"},{url:"assets/img/tip.a9004be5.svg",revision:"a9004be5a8a5a83cc9c77bba88c816ff"},{url:"assets/img/warning-dark.b995cb45.svg",revision:"b995cb45fa552ac10ad35fa7716af15b"},{url:"assets/img/warning.57a43d6d.svg",revision:"57a43d6dcdee07d8db78a5dd3d6137ba"},{url:"assets/js/14.26c45601.js",revision:"3003c1e7b87f7c59505a35ece9653263"},{url:"assets/js/15.29b4f50f.js",revision:"32ee2f49c2b48b46293651391be295b2"},{url:"assets/js/16.79811957.js",revision:"545cf24b97bd03aeb735648b4605d47d"},{url:"assets/js/17.16a53159.js",revision:"fca34592f4c5a148b0b2fed9397dae0f"},{url:"assets/js/18.889a6a3b.js",revision:"36b5089c7a6a1717f9a50a07f08acd31"},{url:"assets/js/app.27d0ce91.js",revision:"e2a03754b855ae405e866defddc2fe81"},{url:"assets/js/layout-Blog.e7f69fc1.js",revision:"b7ff53df68d8103dc5a8a8735506f120"},{url:"assets/js/layout-Layout.6e8a234f.js",revision:"126b92cc485a5abdf9b9bdd2e4118978"},{url:"assets/js/layout-NotFound.dc5bb11d.js",revision:"d1c20fc16f1038c154efd703e63c1a40"},{url:"assets/js/layout-Slide.8ca1ce5f.js",revision:"a5a8c6b20f4897c0a9dd93a4e8821258"},{url:"assets/js/page-CreandounacuentaenScratch.c46f83c4.js",revision:"0cc5bedd7824f91d8bb96c5434415af1"},{url:"assets/js/page-Desafio01-PingPong.a2f6ba8a.js",revision:"1602fb1f74534f39bc8a31235b818c52"},{url:"assets/js/page-Desafio02-Bruja.4b618333.js",revision:"55e34b032eda6fdae2fa6ea5a2b27f55"},{url:"assets/js/page-Home.24dd5672.js",revision:"54a7db7a134236f082455f7f167e20a2"},{url:"assets/js/page-Scratch.5183bca8.js",revision:"f7eb3c959b50ddfafc770cdf3f2f3093"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.4e4f3471.js",revision:"2c8f5fa61b137240397d8af88b00f26f"},{url:"assets/js/vendors~layout-Layout.ee6b4c74.js",revision:"f0a0841f12bcbddf616b9466fdc5e70d"},{url:"assets/js/vendors~photo-swipe.24008903.js",revision:"9b962e5154178048158835dc519bb08d"},{url:"404.html",revision:"6823d4a82ccf0e11c73b94f664eaa4f4"},{url:"article/index.html",revision:"85ad9d7867785d839bca3735c632f88d"},{url:"category/index.html",revision:"e90c1a1f7df263bb1434fdcff081441e"},{url:"encrypt/index.html",revision:"359b038a1e6a34e1ec86a7cc0ae22416"},{url:"index.html",revision:"b1f85248b83a52cb08183eb5198bf015"},{url:"scratch/01-pingpong/index.html",revision:"60353d90c6e1c29cc1f2f82a0c7e0eee"},{url:"scratch/02-bruja/index.html",revision:"a7d0eabefac1650ca82ba88cd1026f04"},{url:"scratch/crear-cuenta/index.html",revision:"b137fbf84658502a9661494e222acd15"},{url:"scratch/index.html",revision:"fdc44b7c0ee6f1b41421137d828b045e"},{url:"slide/index.html",revision:"f2bd47d0e505b299b88f44cf888dcbba"},{url:"star/index.html",revision:"741852f19a2f79450e755eeb8eaaa1ff"},{url:"tag/index.html",revision:"ea4222577ef4dd0bc8da14b70d20a084"},{url:"timeline/index.html",revision:"70be8453491e71e9a798afff2bcd5f09"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
