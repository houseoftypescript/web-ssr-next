if(!self.define){let e,t={};const s=(s,n)=>(s=new URL(s+".js",n).href,t[s]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=t,document.head.appendChild(e)}else e=s,importScripts(s),t()})).then((()=>{let e=t[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(t[c])return;let i={};const r=e=>s(e,c),d={module:{uri:c},exports:i,require:r};t[c]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(a(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/nextjs-template//_next/static/chunks/229.e2af736d503f1927.js",revision:"e2af736d503f1927"},{url:"/nextjs-template//_next/static/chunks/235-8cf5fecc6db0c804.js",revision:"8cf5fecc6db0c804"},{url:"/nextjs-template//_next/static/chunks/324-45afb940a950c0c9.js",revision:"45afb940a950c0c9"},{url:"/nextjs-template//_next/static/chunks/635-668d1e907532f2ec.js",revision:"668d1e907532f2ec"},{url:"/nextjs-template//_next/static/chunks/675-d50cce65e3de05b2.js",revision:"d50cce65e3de05b2"},{url:"/nextjs-template//_next/static/chunks/6c44d60f.42898c9bc66f8d03.js",revision:"42898c9bc66f8d03"},{url:"/nextjs-template//_next/static/chunks/704-a3b86cfa8d23b509.js",revision:"a3b86cfa8d23b509"},{url:"/nextjs-template//_next/static/chunks/708-9dfa72deb10d739a.js",revision:"9dfa72deb10d739a"},{url:"/nextjs-template//_next/static/chunks/715-d69e29514cac0a51.js",revision:"d69e29514cac0a51"},{url:"/nextjs-template//_next/static/chunks/72-468e9f6b82cc1c78.js",revision:"468e9f6b82cc1c78"},{url:"/nextjs-template//_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/nextjs-template//_next/static/chunks/main-169699ea1d563b98.js",revision:"169699ea1d563b98"},{url:"/nextjs-template//_next/static/chunks/pages/404-1951eae38cdb3c44.js",revision:"1951eae38cdb3c44"},{url:"/nextjs-template//_next/static/chunks/pages/500-ff28deef5bb99a80.js",revision:"ff28deef5bb99a80"},{url:"/nextjs-template//_next/static/chunks/pages/_app-12dceba1dea88873.js",revision:"12dceba1dea88873"},{url:"/nextjs-template//_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/nextjs-template//_next/static/chunks/pages/apps/calendar-55252f25108e8c0f.js",revision:"55252f25108e8c0f"},{url:"/nextjs-template//_next/static/chunks/pages/apps/chart-58c985abd466f388.js",revision:"58c985abd466f388"},{url:"/nextjs-template//_next/static/chunks/pages/apps/table-0ff5814865465aa4.js",revision:"0ff5814865465aa4"},{url:"/nextjs-template//_next/static/chunks/pages/auth/sign-in-a281961006916da4.js",revision:"a281961006916da4"},{url:"/nextjs-template//_next/static/chunks/pages/auth/sign-up-00dd1bd3d70cd5dd.js",revision:"00dd1bd3d70cd5dd"},{url:"/nextjs-template//_next/static/chunks/pages/index-e9e5dd6c316d63d3.js",revision:"e9e5dd6c316d63d3"},{url:"/nextjs-template//_next/static/chunks/pages/password/forget-d23c0d036c8bb652.js",revision:"d23c0d036c8bb652"},{url:"/nextjs-template//_next/static/chunks/pages/password/reset-4ae449bb3966459c.js",revision:"4ae449bb3966459c"},{url:"/nextjs-template//_next/static/chunks/pages/user/profile-ffe3af44314b11dc.js",revision:"ffe3af44314b11dc"},{url:"/nextjs-template//_next/static/chunks/pages/user/settings-c83d1008cb2e0c16.js",revision:"c83d1008cb2e0c16"},{url:"/nextjs-template//_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/nextjs-template//_next/static/chunks/webpack-000e4c07aab7ee14.js",revision:"000e4c07aab7ee14"},{url:"/nextjs-template//_next/static/css/2d7c39ae438cbe06.css",revision:"2d7c39ae438cbe06"},{url:"/nextjs-template//_next/static/hmGqTUh4m3ClAiSwQGRZ-/_buildManifest.js",revision:"ccdf613b7c81f4347e077998e85f1ecb"},{url:"/nextjs-template//_next/static/hmGqTUh4m3ClAiSwQGRZ-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/nextjs-template//_next/static/media/solid.1a17d133.svg",revision:"217fc83ff2e177a2e9b09793b96d9d86"},{url:"/nextjs-template/apple-touch-icon.png",revision:"7937902f0d03eab4361567de894d318e"},{url:"/nextjs-template/favicon-16x16.png",revision:"8693d4efcc5c1964643c5bad4495fed1"},{url:"/nextjs-template/favicon-32x32.png",revision:"61036d61b353e05fc0a3dc1f616e54ca"},{url:"/nextjs-template/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/nextjs-template/manifest.json",revision:"e628b05ec199019600514d3048aa23f0"},{url:"/nextjs-template/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/nextjs-template/robots.txt",revision:"3e042940d36d3b7142e5d790c68f4a39"},{url:"/nextjs-template/sitemap.xml",revision:"87cc10741326b8db7c900261716c3549"},{url:"/nextjs-template/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/nextjs-template/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/nextjs-template",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:t,event:s,state:n})=>t&&"opaqueredirect"===t.type?new Response(t.body,{status:200,statusText:"OK",headers:t.headers}):t}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const t=e.pathname;return!t.startsWith("/api/auth/")&&!!t.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
