/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bd38676505e2c7b89cf85b31d80dbd09"
  },
  {
    "url": "assets/css/0.styles.dc0f58ca.css",
    "revision": "43a26da08afde659aeb005c0fc980e6c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9089e379.js",
    "revision": "86d91dd7e0e193fc1f55c20c1cf02c12"
  },
  {
    "url": "assets/js/2.3c584a52.js",
    "revision": "44e8abe29570c067a5b45fbf70822edb"
  },
  {
    "url": "assets/js/3.c0d69dbc.js",
    "revision": "6b79231b7fc9822b8cf5c33996cf42c5"
  },
  {
    "url": "assets/js/app.80951e15.js",
    "revision": "62d7a10c4213a9d699f62e64ba810e3b"
  },
  {
    "url": "index.html",
    "revision": "b4af3bdfaeb7c45cbd2e5dcef879539b"
  },
  {
    "url": "login-wap/zh-cn.html",
    "revision": "b1dd17978f81dd195b8b6d125da65b90"
  },
  {
    "url": "login/zh-cn.html",
    "revision": "b3013a08cb07ba5035137ed1e75dc192"
  },
  {
    "url": "logo.png",
    "revision": "a53179ca13039218c56cb6bce42e3aa6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
