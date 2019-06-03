importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/04a1b104f9c0525e4ac2.js",
    "revision": "ff64d9ea0d911d25fa2023d6e1a8fab3"
  },
  {
    "url": "/_nuxt/04a49847ddf370bdf6f4.js",
    "revision": "94bdea7963ab70d6c67193e49a5bbab1"
  },
  {
    "url": "/_nuxt/0c49f17779e2aab68e9b.js",
    "revision": "d2429c79ceaa978961dc90161a6a5fc9"
  },
  {
    "url": "/_nuxt/20e642ace2c12dfee2af.js",
    "revision": "fa015be53df8b104ca8279898a93ba0d"
  },
  {
    "url": "/_nuxt/2236e5ed68f253c588c4.js",
    "revision": "07c5ff68eb0f4da2d4ce1764444cb299"
  },
  {
    "url": "/_nuxt/5a920052895cfc5f14c4.js",
    "revision": "995f063659b14d7993e4b416301b2daf"
  },
  {
    "url": "/_nuxt/6374b07099ccee87d732.js",
    "revision": "5b6ffff71acd1e0c8dad5ae93157d197"
  },
  {
    "url": "/_nuxt/70b8197dfae12f8d60fb.js",
    "revision": "0785e03a24431a8923fbc998452c0e3d"
  },
  {
    "url": "/_nuxt/78cce5a04b27eb90c2c7.js",
    "revision": "8a1315ffd3e7898b793f18ba9a58eb6d"
  },
  {
    "url": "/_nuxt/c4a8a447ed55edabed41.js",
    "revision": "e5e4cca5f2f143c4f3ae7408336fade4"
  },
  {
    "url": "/_nuxt/d003a0591803eb3a571a.js",
    "revision": "e67e7bab0654b01c8d61791657630b14"
  },
  {
    "url": "/_nuxt/fb2c937c0ef91a4ac6e8.js",
    "revision": "ca9db3ce40176cafc068d5f922cd0afb"
  }
], {
  "cacheId": "nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
