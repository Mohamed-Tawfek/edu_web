'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "79ea11abb667a3038da5430ddbf83176",
"assets/AssetManifest.bin.json": "1c6fa12c2c45c698276a96dd75b740c4",
"assets/AssetManifest.json": "6a9f837781f6a3db50630d845ae977b9",
"assets/assets/icons/About.png": "f5b3db45ff3ba8e19436a8e2b4c015fe",
"assets/assets/icons/app_icon.png": "9678d327ca0275f1a8e097f1eb5d5148",
"assets/assets/icons/archieve.png": "19704b589bf9e4c3a17b69c08a249860",
"assets/assets/icons/association.png": "ba6273807fdeb0728066d60e1b9b1d43",
"assets/assets/icons/Businessman.png": "7a43943bad855404079e6a8315791107",
"assets/assets/icons/card.png": "373e15f9a3d6ed5a66b42ac3d36dc4bf",
"assets/assets/icons/challenge.png": "679bc07e26ccfd3791ef3daa194ac225",
"assets/assets/icons/child.png": "ccfa072de190a39972dd09c689e9a821",
"assets/assets/icons/Contact.png": "d97a13ff71871821a7a694b070b9e195",
"assets/assets/icons/delete_account.png": "d926a7113232cf763cbc8a2b1afcaeea",
"assets/assets/icons/evaluation.png": "58ab163d85fbcc1f8b6f09b8603f4cb7",
"assets/assets/icons/Group-Ideas-1--Streamline-Ux.svg.png": "8dafb6e0953a18372bccd0282649dd46",
"assets/assets/icons/Group.png": "650d6108c364e55d2fd7c44c50427db0",
"assets/assets/icons/keep.png": "e28b004e9b2edb73c7038858a5566fbe",
"assets/assets/icons/logout.png": "98ef745beb7305f822f4c9b97f1d474d",
"assets/assets/icons/Money.png": "a9c1ccf34a3126cb95bd4200b71b7c57",
"assets/assets/icons/News.png": "285c4e2ed4868d4b4f8434433151fd00",
"assets/assets/icons/print.png": "7cbe4a07dd2aa35900391a359d4bdc03",
"assets/assets/icons/prize.png": "0e4826d372f01e10e144fbb9bf50ce5d",
"assets/assets/icons/Quiz.png": "62191a559f79d94a005282c792e37a20",
"assets/assets/icons/requests.png": "346a3b1bb5e27f331e8421c9ad512fad",
"assets/assets/icons/small_Student.png": "6f3b1fa13b69b7b9bfd119b109742e6b",
"assets/assets/icons/small_teacher.png": "13c766fedbc09b227023d99bfee78eab",
"assets/assets/icons/Student.png": "0d19dca503b44400fa2b2f3896e68307",
"assets/assets/icons/student_boy.png": "cbf788be00a160cb69e9b8b469c52b00",
"assets/assets/icons/time_line.png": "447ebdc4a292067b91fcca5935bcf7bc",
"assets/assets/icons/user.png": "e3c2b4bfbf51b93279150acd7123acfc",
"assets/assets/icons/whatsapp.png": "64955b289c3856ad31744d47419f6be2",
"assets/assets/icons/youtube.png": "ca6d67e60f758d352745329b283e8f32",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "427ae155b745ff1798b138206090b32c",
"assets/NOTICES": "f85afb940f8a6ed6199196da737453a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/custom_calendar_viewer/assets/icons/back.svg": "444676cc6ac83f961419ca5958b7a733",
"assets/packages/custom_calendar_viewer/assets/icons/forward.svg": "ccae22d8b5d4814a0d66719437f06ff6",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "493b0ac8dd80f2d5fa52d3899287403f",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "c8ecf329791a69931c37da1ae5b251ec",
"icons/Icon-192.png": "1e3efad3d670fee7d7f75c8eb3e4c21c",
"icons/Icon-512.png": "3e9a423a4c3303dfc1a572085b501f4d",
"icons/Icon-maskable-192.png": "1e3efad3d670fee7d7f75c8eb3e4c21c",
"icons/Icon-maskable-512.png": "3e9a423a4c3303dfc1a572085b501f4d",
"index.html": "370906c6d3b638ab4e455b2eabc63294",
"/": "370906c6d3b638ab4e455b2eabc63294",
"main.dart.js": "f6e75d65bc14f7ec9084be10c3ab3050",
"manifest.json": "ce0f2a0fb800e451e81ef914c948555d",
"splash/img/dark-1x.png": "ccb5740ead1ee73d47029af15fa54dcb",
"splash/img/dark-2x.png": "053c3950485f83976ca4044b5ed04df4",
"splash/img/dark-3x.png": "2a9c2982f4dfe1d47cecc7085600adc9",
"splash/img/dark-4x.png": "3e9a423a4c3303dfc1a572085b501f4d",
"splash/img/light-1x.png": "ccb5740ead1ee73d47029af15fa54dcb",
"splash/img/light-2x.png": "053c3950485f83976ca4044b5ed04df4",
"splash/img/light-3x.png": "2a9c2982f4dfe1d47cecc7085600adc9",
"splash/img/light-4x.png": "3e9a423a4c3303dfc1a572085b501f4d",
"version.json": "5b11a9ab9e2463444514a66a7cccd5f0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
