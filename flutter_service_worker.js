'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "d7bde834b6902ea818ea4e1e5563d86b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c377209cf68cd395b28a4faa3c059855",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2daf57d17236f5994de018f61189fa31",
".git/logs/refs/heads/main": "a45315cf43943e5807c8ace893d094c2",
".git/logs/refs/remotes/origin/main": "2972e10f79b8a8baf3656af5d34e13f9",
".git/objects/02/9c008ffadcc8eafadbf8547f7d913245f0e53a": "6908c972ba395946ca8fc39bb615417d",
".git/objects/08/1299cffdbcdb9bea5633a9b7026d544e007fe1": "a929bb87e601873278f626781c3c0c51",
".git/objects/08/52293685ed4500ca328313421f81439150cd0d": "420bb88fd7218e38ff52019da8347944",
".git/objects/0b/1d99ebcec7e75438911372e90c20f7859f451c": "d6e5c28090f3d921ecbb3dfdef9a6b78",
".git/objects/0c/bd07b49a457c1ab95767bc8430f54d7b2684ae": "311e1d129673c072fe6c8e47ff6f3ce2",
".git/objects/0f/b754dc93880d748d7a1e3523cff47b40ffd498": "fdc35b02715d8e07acf70b2c511bc9ca",
".git/objects/11/54cce83839f91e4a63804274503b961d9c0780": "8691dad21f2f8e9167a112c6ded93875",
".git/objects/1f/052695c2fac7fda848ad488fdddca0b14de965": "8f1d398f772e09aaf4059111c4f8dc15",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/dda01fe0a6ff8cc26b9fc5f9494783553f98da": "3737bd20d20745735f1b6575b22dfcdc",
".git/objects/28/d9472e90968af91b6e50e4df34a5453c94484b": "81ce27a839ec71adf6adadbafcaeb008",
".git/objects/2e/c4cd977c00fe3d58b541cbe91bf1622a9b59e0": "fbca7de639e6f0b5b88e0486ce7ea78c",
".git/objects/30/e0c75fdb4573d0b08389d9e93c950b5a894446": "85eabe2d88fb598be49f91682b669c84",
".git/objects/30/f351defeb8ad63c0427f7eb09ff5050d83ffab": "2d072e14ebc60712ad6428e63a9eca80",
".git/objects/33/3a9152add7f4ed92fd6f1083715f62f7d2ec7d": "a0e97c0f2bb47051fd28e46200b8051a",
".git/objects/38/e903db8a5cf6428e762826ab76e060d5387239": "b56788b5e741f4b5b66a7512ca5dec5b",
".git/objects/3d/21a608ac9b7c2ebd029577be3778054d22a3b2": "ea7286738bafa3077c6ad32d1d391667",
".git/objects/3e/cc78d1513ab6b836b7d983cef357f03bfcf922": "9a16b8ee17d6b4dffa55e4aede6c6eb3",
".git/objects/42/94017644fc80f915d64519357a48ef91f425ee": "677e033903f1a34a3e3a7af85a110aae",
".git/objects/46/fcef4c33adb93126cf98f86cb5afccd0cbaab2": "559df570a11d236393d8c3b7e78724d8",
".git/objects/54/dbd74351b1a438eae6c59e7119e044a166cf83": "8916bb75898d0139183a934dd75343c5",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/64/7ea7bc38ce31ab95c1c4c2b591590a8bf93927": "5bacde0780c3a6cb33f8e1ca71a911ca",
".git/objects/65/c6bee54a4aebea71dcaeeb2f23f1fd80a05bd4": "22782a7067a2a7079f73dbee12648d89",
".git/objects/66/24d495e3de04388126fe82533e707a79c9be00": "e53e2a63efe1aafb9e2cbd19bd6ba87e",
".git/objects/71/6c112028d0c6699ad3418240202f6aca6779ed": "2b60db1c6366c1fe14d8857493dcbb7f",
".git/objects/77/ca8617db4042d2c99e5a2cef6a88c9149b1a4c": "d99e45508e6f2f5329c15b66e739a8ab",
".git/objects/7b/ea289d26341d64efbc6a9b6ddaa37517aeea21": "899006ae07fef513e1572125ef77430f",
".git/objects/82/055b849c023871d3ad55d7334a22852e7ed0fc": "c733476a7107b66031f19f13e2fe71c6",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/76983edddad4bef259b0048cdab2d9080e8ad8": "475aa305b222e6e8fc3acf67729cfcd2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/0fc494e2565bf9b2cf2dcf32b9e89a33cf0928": "3aba565108900aa103fe88826deb428c",
".git/objects/99/0df8cc74e403ec4293f2cbf0f2c0cae93f79b5": "fb5199edfecb3d223c1b4b6b105d4af1",
".git/objects/99/fd05c3d6fde5eadb2ea3aa3e959707b927ae8d": "ede1e20f7760a3c38d06c6d1cff7eeee",
".git/objects/9a/75c368695d7c1f3523e51ee0c8764cb9975be7": "f0681d7be82a11817e165f1c5c065d9e",
".git/objects/9b/45a4a9e33d9ff60c5ef31ec29527a43c7faeda": "c3caa07ed6e3d897f657ba90873ab2da",
".git/objects/9e/ed7b2c0fa27d74eeddc0d0336e6dc383743d03": "10baeb12a86b9564f10ce008858633fb",
".git/objects/a3/756a63ca5104eff64473d7a30435bac34c3d66": "fa6e1a493caff9cd1092ba0d6b7c8706",
".git/objects/aa/39580019307c0aafd4daa1cce9e11ff3db959a": "4fadb6794df826cd05a70d8c522e46df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ca/67ad3b1a307792d593a219a0ad53a77ba95da3": "ee4c7346aa6b8547e50ac28119a20bb9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/8237fa8312a7b6085dbc961e2e6038e4e098f8": "ce2efc9a00ff0d93759697103f9fa682",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/37852428080e0ac47f76e43a272785c11bdf56": "bf4771c9bd56e238e74614a125898e67",
".git/objects/df/822d8df824c964c13d0e2c5be7e2c33a4ca9fa": "4eface379f773c8d1a9f462a73f4bb5d",
".git/objects/e0/253c5bcc18ec3df8371f8d3497c68e66be3b5c": "6b10448177bbd8a0b1f158305dc7cb81",
".git/objects/e0/873fe2a6717466ba29411dc1f8adfdf567857c": "f23d29b96be575b0e782985fe76036fe",
".git/objects/e1/608ee7fdcc22d1dc0adf7efc388f991e83f04f": "1108334f50679b865ebc74393be19866",
".git/objects/e5/18876f3fc0336d8cc3ef8bbd89cc430af25c2b": "c920de108aecc841b39badbd46b06deb",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/e3fa8743b326bf0e205551fb1fd5f02bd31a26": "dd25b41ae23fc06b936eb8801fa61d87",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/a10db64d5d82193b16254424d57f653d5a7f7b": "ed924b64041bb93d3aba5e064898ebdd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/cbd55192016837738b1c919cbbcb07fbb07032": "a72d84bf5194a0ea33f31b6973e6d6e7",
".git/objects/f4/24fa9be0aa1b8ce24b7b012f9bf546e6dacd2c": "c70ae7eda2ecd41253ef7911679acafe",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f5/9ed8ec42464379c8623576ccaf669b1e9f871e": "63b9cd25338e997e95d71ab0e9beed18",
".git/objects/f7/248f839f0b393f38b59c915a696618868534a8": "a650b4d1344708271962d8f072d51f6c",
".git/objects/fd/b9b24d49814494e2115862bc72aa191dd0897f": "c1ae50d481b4d07b9a07cd277c76d406",
".git/refs/heads/main": "f92366acc1529aead0d0b5813c43c034",
".git/refs/remotes/origin/main": "f92366acc1529aead0d0b5813c43c034",
"assets/asset/0_0_1.jpg": "46803db2fed15094076b5f1708a88db7",
"assets/asset/0_0_3.jpg": "0399cb2287d8485b9600156fdd849e05",
"assets/asset/0_0_6.jpg": "19e37b708f677bbe1aedbb284a6f49e2",
"assets/asset/atonarp%2520logo.png": "d97afea4c5ead06959f2cf793728be1b",
"assets/asset/flutter%2520logo.png": "3dc6785f74abe73391c73e3770cf7e1a",
"assets/asset/univar%2520logo.jpg": "069251222aa05c5bf1924a8b063432a7",
"assets/AssetManifest.bin": "2f17d286c9e9292e061d387f5475ac72",
"assets/AssetManifest.bin.json": "2ac5bd96e3dad5a15f96543c06870a75",
"assets/AssetManifest.json": "44d910147e7a20bd7ad66d68e20f7261",
"assets/FontManifest.json": "3020802906dc520f88ca973c65aa46d8",
"assets/NOTICES": "4e7f6792eef10d1da8c734ca8255ea4e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "07c19b69fa5f53224712e8471c00344d",
"canvaskit/canvaskit.wasm": "f312edac4fb4c74852dc1a4f069ab100",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "100d192729121969872b80009e47a5b7",
"canvaskit/chromium/canvaskit.wasm": "f9074e52c7e9c770f1130c6ed9e2677f",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "ab140650f4d351b74f4e6bca3e8dd0e0",
"canvaskit/skwasm.wasm": "7fe5c39ff8466de52fbb0c66473abbe3",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "424eaa90da93184db219461ca3182162",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6376eee745a8b254e505f316934d7171",
"/": "6376eee745a8b254e505f316934d7171",
"main.dart.js": "178f49cb38bc160174cb2b6b34ba8b9a",
"manifest.json": "a6cdf1496d914e51bcbe11d1df131ee7",
"README.md": "218b7ece6bb852f9043228ec7c2c3a43",
"version.json": "83bd039ada952d8733e7bc3743a9c5ec"};
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
