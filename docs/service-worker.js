if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const b=e=>a(e,r),f={module:{uri:r},exports:c,require:b};s[r]=Promise.all(i.map((e=>f[e]||b(e)))).then((e=>(d(...e),c)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.b14fc868.css",revision:"49fd0b24e574921956aa75401b4bc875"},{url:"assets/img/danger-dark.86c63c40.svg",revision:"86c63c4006d5cd5f860cdef57310696a"},{url:"assets/img/danger.1c7d8a0f.svg",revision:"1c7d8a0f45b8bee5d5b92334a16e2711"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.a1decb69.svg",revision:"a1decb69db82fb8eebb48704dd74e649"},{url:"assets/img/info.6f2cfedb.svg",revision:"6f2cfedb8e6d19d1b24eb73943f7ff4e"},{url:"assets/img/note-dark.8668720f.svg",revision:"8668720f2e50ebd01173f11a89d9da6e"},{url:"assets/img/note.32319b2e.svg",revision:"32319b2e9c86860d8a4f1c8f660096cb"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.0d0028db.svg",revision:"0d0028db13caec45ac1527d8b673fae0"},{url:"assets/img/tip.a9004be5.svg",revision:"a9004be5a8a5a83cc9c77bba88c816ff"},{url:"assets/img/warning-dark.b995cb45.svg",revision:"b995cb45fa552ac10ad35fa7716af15b"},{url:"assets/img/warning.57a43d6d.svg",revision:"57a43d6dcdee07d8db78a5dd3d6137ba"},{url:"assets/js/16.e2516e52.js",revision:"35b48768f5ce8d12e45cfcb2c7812ccb"},{url:"assets/js/17.244e5bcd.js",revision:"9e226095b1657b0a8964ac89c6870d61"},{url:"assets/js/18.041b70b4.js",revision:"1c3b9d36e57b31257a4b3048a97ab588"},{url:"assets/js/19.69b3e273.js",revision:"2b47901085e01cc3a989f8b647049420"},{url:"assets/js/20.82978997.js",revision:"11be045fd5477362846b28a8a75d0298"},{url:"assets/js/app.4bc75fd4.js",revision:"13e9f0a97ed41f9fd4b880d6fe9a6748"},{url:"assets/js/layout-Blog.e7f69fc1.js",revision:"b7ff53df68d8103dc5a8a8735506f120"},{url:"assets/js/layout-Layout.6e8a234f.js",revision:"126b92cc485a5abdf9b9bdd2e4118978"},{url:"assets/js/layout-NotFound.dc5bb11d.js",revision:"d1c20fc16f1038c154efd703e63c1a40"},{url:"assets/js/layout-Slide.8ca1ce5f.js",revision:"a5a8c6b20f4897c0a9dd93a4e8821258"},{url:"assets/js/page-CreandounacuentaenScratch.4a3ea89a.js",revision:"914a63e3dfa11ea71af7236e2206e199"},{url:"assets/js/page-Desafio01-PingPong.c55fc37f.js",revision:"8d2ebc4978a58d416d58727b7e5b96ea"},{url:"assets/js/page-Desafio02-Bruja.02f49fe9.js",revision:"af1a89e8456240495fb07711faa5f0ea"},{url:"assets/js/page-Desafío03-Arkanoid.22fe6469.js",revision:"9b66c6b1d93c006d22435df5d1a7dee8"},{url:"assets/js/page-Home.7e0fcd10.js",revision:"b11f0684eb4796de385b9179855eeb6f"},{url:"assets/js/page-Piedrapapelotijera.528d5362.js",revision:"5f0a5b54809885770899e420d7996ba0"},{url:"assets/js/page-Scratch.3a2158e7.js",revision:"108b10c3e3963bc83d1b83e0310c4732"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.4e4f3471.js",revision:"2c8f5fa61b137240397d8af88b00f26f"},{url:"assets/js/vendors~layout-Layout.b3827240.js",revision:"f50538d4c78273a80e39d8e173e9639e"},{url:"assets/js/vendors~photo-swipe.5b379aee.js",revision:"6e8ab7e505d1ec059d320715f8356ba0"},{url:"404.html",revision:"11eefe9b85ff6e65adea6d8637ba3f71"},{url:"article/index.html",revision:"d3c2e5bfd309eee567726115c8303a4d"},{url:"category/index.html",revision:"15b14030e014564a98df8110349a0bf1"},{url:"encrypt/index.html",revision:"4b083b3efaa0d2b196a33a9a8577bedd"},{url:"index.html",revision:"a9528a7ecf6abd28b492d132e6b98e30"},{url:"MicroBit/01-piedra-papel/index.html",revision:"d4e0ce9ff05d6807d7b3a48fa397afc7"},{url:"scratch/01-pingpong/index.html",revision:"79d68dd567cdb241047c176d0c9a1e65"},{url:"scratch/02-bruja/index.html",revision:"bd4fce46d372fedb115f40ba971ea7b7"},{url:"scratch/03-arkanoid/index.html",revision:"ef0811ebe50e1831bd2392d3d7bc4e9f"},{url:"scratch/crear-cuenta/index.html",revision:"db9a620759c462aea74c48caea8a6831"},{url:"scratch/index.html",revision:"451fc0b1852600b28ef0af67708fec34"},{url:"slide/index.html",revision:"e9022e73d656280df7b828b1d6cbeed1"},{url:"star/index.html",revision:"89769aa925f4e4b063620e2e491fa17a"},{url:"tag/index.html",revision:"8f14d62dee9ec8a5afc7eac4c33bbbc1"},{url:"timeline/index.html",revision:"c0e82c20917f2165ba1b8f4ebcbd603b"}],{}),e.cleanupOutdatedCaches()}));
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
