if(!self.define){let e,t={};const s=(s,a)=>(s=new URL(s+".js",a).href,t[s]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=t,document.head.appendChild(e)}else e=s,importScripts(s),t()})).then((()=>{let e=t[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(t[c])return;let i={};const r=e=>s(e,c),l={module:{uri:c},exports:i,require:r};t[c]=Promise.all(a.map((e=>l[e]||r(e)))).then((e=>(n(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/nextjs-template//_next/static/HPBg6FgW2EjXwlQSQAcQ1/_buildManifest.js",revision:"5df280190314b6cb0c0f83d026a50b3b"},{url:"/nextjs-template//_next/static/HPBg6FgW2EjXwlQSQAcQ1/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/nextjs-template//_next/static/chunks/229.e2af736d503f1927.js",revision:"e2af736d503f1927"},{url:"/nextjs-template//_next/static/chunks/235-6c3846b3b442b510.js",revision:"6c3846b3b442b510"},{url:"/nextjs-template//_next/static/chunks/324-414ef0f89944f7d5.js",revision:"414ef0f89944f7d5"},{url:"/nextjs-template//_next/static/chunks/635-d26928cbc68e765c.js",revision:"d26928cbc68e765c"},{url:"/nextjs-template//_next/static/chunks/675-d50cce65e3de05b2.js",revision:"d50cce65e3de05b2"},{url:"/nextjs-template//_next/static/chunks/6c44d60f.1a691aa7b7cdb3ac.js",revision:"1a691aa7b7cdb3ac"},{url:"/nextjs-template//_next/static/chunks/704-9225d2ce91bf4521.js",revision:"9225d2ce91bf4521"},{url:"/nextjs-template//_next/static/chunks/708-373b4786f3762857.js",revision:"373b4786f3762857"},{url:"/nextjs-template//_next/static/chunks/709-9ea7172cd988193a.js",revision:"9ea7172cd988193a"},{url:"/nextjs-template//_next/static/chunks/72-63ea7384996b207a.js",revision:"63ea7384996b207a"},{url:"/nextjs-template//_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/nextjs-template//_next/static/chunks/main-c58b08803a5531fe.js",revision:"c58b08803a5531fe"},{url:"/nextjs-template//_next/static/chunks/pages/404-ccee8cfb0b613c60.js",revision:"ccee8cfb0b613c60"},{url:"/nextjs-template//_next/static/chunks/pages/500-bd1d07ec497a20ce.js",revision:"bd1d07ec497a20ce"},{url:"/nextjs-template//_next/static/chunks/pages/_app-b764e95581acccb1.js",revision:"b764e95581acccb1"},{url:"/nextjs-template//_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/nextjs-template//_next/static/chunks/pages/apps/calendar-66d5e29e1f1f0b82.js",revision:"66d5e29e1f1f0b82"},{url:"/nextjs-template//_next/static/chunks/pages/apps/chart-76f5c633777a5b78.js",revision:"76f5c633777a5b78"},{url:"/nextjs-template//_next/static/chunks/pages/apps/table-6f067078a96a7aee.js",revision:"6f067078a96a7aee"},{url:"/nextjs-template//_next/static/chunks/pages/auth/sign-in-9232662e71d5ce5d.js",revision:"9232662e71d5ce5d"},{url:"/nextjs-template//_next/static/chunks/pages/auth/sign-up-2d0331932f70705f.js",revision:"2d0331932f70705f"},{url:"/nextjs-template//_next/static/chunks/pages/index-ae6b60a59b2196a4.js",revision:"ae6b60a59b2196a4"},{url:"/nextjs-template//_next/static/chunks/pages/password/forget-059811a832e52566.js",revision:"059811a832e52566"},{url:"/nextjs-template//_next/static/chunks/pages/password/reset-d2a9a6d51d7e46a6.js",revision:"d2a9a6d51d7e46a6"},{url:"/nextjs-template//_next/static/chunks/pages/user/profile-8dac7017adfd0056.js",revision:"8dac7017adfd0056"},{url:"/nextjs-template//_next/static/chunks/pages/user/settings-bd89cd90fe8f9523.js",revision:"bd89cd90fe8f9523"},{url:"/nextjs-template//_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/nextjs-template//_next/static/chunks/webpack-2798f5ac2707fa01.js",revision:"2798f5ac2707fa01"},{url:"/nextjs-template//_next/static/css/2d7c39ae438cbe06.css",revision:"2d7c39ae438cbe06"},{url:"/nextjs-template//_next/static/media/solid.1a17d133.svg",revision:"217fc83ff2e177a2e9b09793b96d9d86"},{url:"/nextjs-template/apple-touch-icon.png",revision:"7937902f0d03eab4361567de894d318e"},{url:"/nextjs-template/favicon-16x16.png",revision:"8693d4efcc5c1964643c5bad4495fed1"},{url:"/nextjs-template/favicon-32x32.png",revision:"61036d61b353e05fc0a3dc1f616e54ca"},{url:"/nextjs-template/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/nextjs-template/manifest.json",revision:"e628b05ec199019600514d3048aa23f0"},{url:"/nextjs-template/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/nextjs-template/robots.txt",revision:"3e042940d36d3b7142e5d790c68f4a39"},{url:"/nextjs-template/sitemap.xml",revision:"87cc10741326b8db7c900261716c3549"},{url:"/nextjs-template/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/nextjs-template/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/nextjs-template",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:t,event:s,state:a})=>t&&"opaqueredirect"===t.type?new Response(t.body,{status:200,statusText:"OK",headers:t.headers}):t}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const t=e.pathname;return!t.startsWith("/api/auth/")&&!!t.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
