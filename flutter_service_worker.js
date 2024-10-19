'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "a248072ba3eae8e243b9d0ff107dc4a9",
"index.html": "5f99978fd94c875d67b321992b84b305",
"/": "5f99978fd94c875d67b321992b84b305",
"flutter_bootstrap.js": "52d44a5b8a0ec5a5034a8d42b6057656",
"manifest.json": "f372adff0a3707b3455049cca081f5c4",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/playstore.png": "01e4d38839b1e874e374356e6468a532",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "4f095c77aa3ede9a049bc9d9ab1af6d9",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/NOTICES": "4e1071db457df5f796483c41de806770",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
".git/index": "f3593924379d75409c92503eeb95e50d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/refs/heads/main": "05a3379fc9fa4d7bcc7277bc1af96c9d",
".git/refs/remotes/origin/main": "05a3379fc9fa4d7bcc7277bc1af96c9d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/98/3ed88fcc8564c0a6c678f6791db954851f3ae8": "8790fb788f188a751cd6da709d54d6a0",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/5a/6be86831f383da931f43480fd1cf0233b6344f": "59677b24b47c0adb75b29d4a1bfd91bf",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/e09af4395b69d9e85b70feefaa8d020973c41d": "adffd8f3214428821f4d11a4ea2c4f8f",
".git/objects/df/916beabcbe4a39765b4572954943227c538f33": "0d2fa4b2268672f0fbde193429b32b3b",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/01/cbfc72c50d18dcb7a8fd28c77d1186ac3432cf": "deab9ecd1006f035bc46bf485b4d798b",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/40/d501966d28c313840ec7a3ba05ee1b56bb98e1": "13bf5b331b0ca414f5b6d5924406d78e",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/5c413c2bc575057b139c70972e333471e5bcdf": "cd1b7fb6cc90d2eb1c0e35ae9f57a8ed",
".git/objects/54/11c06a551a0e911580946cb6d61d0c7f2d3d64": "60a31fa93124e5894cc780d00e7b2fe1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/3a/43f2990ef25668c7ce8a7cc4dda08bdec4c953": "5330eb374ff43145a3bba6d93957d559",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/60/815f6078294d2b24fc6ea83bd872ac8a0454d1": "ddd7adfb8cf8f3b619549c39566568d4",
".git/objects/53/947ac4d02675e25d8e23ba1e5bb8d307ae4334": "cd7e4647025c85a403913b8ab89d4700",
".git/objects/a7/4813ccc3d7ac22b21d51a3dc2ea60c4a2d2972": "b8f2a040983667d9b35ef7ef53e57061",
".git/objects/c7/b1b97e4ad94b3560af5f2ebb32f55c2afb91aa": "adc1aeac5d7db0e485cc39ec3a8585ae",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/a0278252cb61b8864b428417da2860e83deca9": "38b3fc9b250b59c31395d1873b4f329a",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/16/3e9144c3315f60450d59349f48efb89acae081": "689621407d75a4f8a8735d506816146e",
".git/objects/52/e94f510e31631fd3be359a1c2ded8aebd10c41": "42c5cdb3a5ddeaad84b6a6a3f0f043f3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e7/144d2869161bdc9feb68ff69eb0dcabb9574b6": "70e9f5b01484d74eae798aeb2bed2391",
".git/objects/75/6dd5d6a0edd68b7e393e70748ebc0c974c80bf": "da7e75c9c6f23f1898489f23d98dad90",
".git/objects/a9/b25f4e8bfe71e981586150a93264348cb2f8c8": "89c8e1541432d63e0bfec6b6d33fc718",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/a2/4400439d953060e84a8c971d569d1359a6ceb5": "e3e0bdd7f92823eaeaf583e35cdd1d13",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/5e/184ec819eb72c9b9ad2f1283cc6a13dd886e12": "2aa1587a07df3961d6753d4e8fcd30c7",
".git/objects/6c/cbfba7031a8deff4dbf088f8ed6cbea5ac6f7c": "a774453d6b4615c5afa74f72f9bab615",
".git/objects/56/3285ab515f69ac08d3bd6bc3f0d9ea488e29f4": "0a6e916b24c1215a99a02e8f2b1054ec",
".git/objects/d1/9e2b238bdb585ba16aa784aaa247392a067dd3": "764102878aa6c68bafd7763b7d72bb40",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/62/8f39c8fb1b972b7375266b7983019e4cba6f83": "7f992a9d5a37e1d723d2255f3771b70b",
".git/objects/93/0ac1c35835c748e3e5a6b9a5fd55c64567c469": "c92d1113cbab8192a313f633c1917999",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/b6/cae3d1b6ef0da6bd01728e73d21c7f4bf31cbd": "49e8083f9c3aeffdc35220a848e76b5a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/a0/7f09478c966326e07784e358cef17ab585da65": "e3d3de6ba65517725f1e2f7c212a8964",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/62711b042b9db62f4d9dfa08de89cf1550f0e3": "48b4ec77b52730b4ef075599c0cc8859",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/config": "5f2b6b2b8ef92ed7c40866f41b8d56b7",
".git/logs/HEAD": "d25927776c6b379846e178f7d5735cb4",
".git/logs/refs/heads/main": "7076221105c7f7a682393dbaa71e8863",
".git/logs/refs/remotes/origin/main": "281fb6afe57dfa7d8e05e12c24e4e3c9",
"main.dart.js": "4fc872808a41518d94a1b17537e85ca6",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061"};
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
