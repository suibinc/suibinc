importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0690c5aee8d379c8718d.js",
    "revision": "52be6394b0494fddb77f4783ec8d2a81"
  },
  {
    "url": "/_nuxt/576fde662e44c08cd471.js",
    "revision": "19a2b5fb62056ae6904128af8a5a0ae9"
  },
  {
    "url": "/_nuxt/9f5d1aeac1e15d3f363d.js",
    "revision": "21ed565003d448ab14f63a3e7d1ec9bd"
  },
  {
    "url": "/_nuxt/bcdd1ef93a9116936021.js",
    "revision": "69a8832b9cbb208b90e6b265395bd236"
  },
  {
    "url": "/_nuxt/d0b495ac3ebc94d7eaf8.js",
    "revision": "5345e5a0944daec79585cbe75bdb0850"
  },
  {
    "url": "/_nuxt/e608f2997bf7e569b111.js",
    "revision": "999643548f9f303a2adc76fec02f80b4"
  }
], {
  "cacheId": "suibinc.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
