if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const f=e=>a(e,d),b={module:{uri:d},exports:r,require:f};s[d]=Promise.all(c.map((e=>b[e]||f(e)))).then((e=>(i(...e),r)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.b14fc868.css",revision:"49fd0b24e574921956aa75401b4bc875"},{url:"assets/img/danger-dark.86c63c40.svg",revision:"86c63c4006d5cd5f860cdef57310696a"},{url:"assets/img/danger.1c7d8a0f.svg",revision:"1c7d8a0f45b8bee5d5b92334a16e2711"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.a1decb69.svg",revision:"a1decb69db82fb8eebb48704dd74e649"},{url:"assets/img/info.6f2cfedb.svg",revision:"6f2cfedb8e6d19d1b24eb73943f7ff4e"},{url:"assets/img/note-dark.8668720f.svg",revision:"8668720f2e50ebd01173f11a89d9da6e"},{url:"assets/img/note.32319b2e.svg",revision:"32319b2e9c86860d8a4f1c8f660096cb"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.0d0028db.svg",revision:"0d0028db13caec45ac1527d8b673fae0"},{url:"assets/img/tip.a9004be5.svg",revision:"a9004be5a8a5a83cc9c77bba88c816ff"},{url:"assets/img/warning-dark.b995cb45.svg",revision:"b995cb45fa552ac10ad35fa7716af15b"},{url:"assets/img/warning.57a43d6d.svg",revision:"57a43d6dcdee07d8db78a5dd3d6137ba"},{url:"assets/js/15.14ce27e9.js",revision:"161a605a86cfb2fbd4fa1b3ecb575daf"},{url:"assets/js/16.b765ae0f.js",revision:"71d3c7de53f9d9f7d013eb1b0fefcc67"},{url:"assets/js/17.9548712d.js",revision:"9404c6583d11e92c75655a98a99f7904"},{url:"assets/js/18.f45d4513.js",revision:"b5c26021ccb595b366d2d53c58b24303"},{url:"assets/js/19.381b1ebd.js",revision:"ca07e29be37d452aa5df91d748a0f1f0"},{url:"assets/js/app.0c64eb18.js",revision:"9bca8cc976f53c6c591084321e9272c7"},{url:"assets/js/layout-Blog.e7f69fc1.js",revision:"b7ff53df68d8103dc5a8a8735506f120"},{url:"assets/js/layout-Layout.6e8a234f.js",revision:"126b92cc485a5abdf9b9bdd2e4118978"},{url:"assets/js/layout-NotFound.dc5bb11d.js",revision:"d1c20fc16f1038c154efd703e63c1a40"},{url:"assets/js/layout-Slide.8ca1ce5f.js",revision:"a5a8c6b20f4897c0a9dd93a4e8821258"},{url:"assets/js/page-CreandounacuentaenScratch.4c1e8b53.js",revision:"def49ffa158d22aa090793b5d683a209"},{url:"assets/js/page-Desafio01-PingPong.4c092553.js",revision:"4075c371abd463e80516fbb8771596f9"},{url:"assets/js/page-Desafio02-Bruja.682c1de3.js",revision:"8b4e7879ecde6063241d5d752c6d7aed"},{url:"assets/js/page-Desafío03-Arkanoid.6c1c28f0.js",revision:"d7a2f7560bf23dbbc7c7e7224431a9f0"},{url:"assets/js/page-Home.23075173.js",revision:"3a0e02289e7c69ce1f6c6bc0c47bd4b0"},{url:"assets/js/page-Scratch.6aa2f996.js",revision:"ce953be1dce3a9bc0e63174d4e813621"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.4e4f3471.js",revision:"2c8f5fa61b137240397d8af88b00f26f"},{url:"assets/js/vendors~layout-Layout.71cf452a.js",revision:"05fa062cc3fc64f2f0c77c35901d7e5a"},{url:"assets/js/vendors~photo-swipe.56509527.js",revision:"c7878ee72a2eee0c94850c6af069803a"},{url:"404.html",revision:"798eb160a8f5eb9e288babff99bcbb84"},{url:"article/index.html",revision:"f5d9b258dd2ba8411c1b4792ba983fcd"},{url:"category/index.html",revision:"0929397926a3c7bfff9b4762ec6ba1bb"},{url:"encrypt/index.html",revision:"9d6085e02f86f5808af654de5dd813a7"},{url:"index.html",revision:"f0deac0f1a0a8624b0ddbcfb8ae30a6f"},{url:"scratch/01-pingpong/index.html",revision:"c8c778f135ab2485d165284790cb9a93"},{url:"scratch/02-bruja/index.html",revision:"10536c563c61b30d9cbc4c479c6dd9a3"},{url:"scratch/03-arkanoid/index.html",revision:"30289ab05b172005358819017a1ab5e4"},{url:"scratch/crear-cuenta/index.html",revision:"d1be44bf8a2a611036539e5b5cd918e7"},{url:"scratch/index.html",revision:"76e13129fc702a0f6e2ca1753cf268fa"},{url:"slide/index.html",revision:"2516c8b70ab16892a0749040ff4d0ed1"},{url:"star/index.html",revision:"20a4c04ee453fd058b073c0260f87310"},{url:"tag/index.html",revision:"9ee8903a72f6fc16017efb3e729f5264"},{url:"timeline/index.html",revision:"669baf84b5536fcf1e823c07cb56fea0"}],{}),e.cleanupOutdatedCaches()}));
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
