/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/09/10/新建文件夹/常用概念/index.html","fd51e14342376954ccdaec6c051447f1"],["/2019/09/10/新建文件夹/面试总结/index.html","c17fb9c45e4893899fee248ad996175d"],["/2020/12/16/新建文件夹/消息队列/index.html","f4ea46ee4f6c04c545f1a9945ea6e88d"],["/2020/12/28/新建文件夹/搜索引擎/index.html","c19e653950826fdb9d8fe527cb8c51b4"],["/2021/01/05/新建文件夹/分布式/index.html","8fb525d0cb9ee98abc49ceac04921227"],["/2021/01/05/新建文件夹/缓存/index.html","21e7ed52b1f256e49d8684cfeb44e76b"],["/2022/10/22/test-my-site/index.html","db2c3752d914ef3df609a44a99f21e42"],["/2022/10/24/hello-world/index.html","d74fd65aa0ff12c59632d485f67b8441"],["/archives/2019/09/index.html","bdfee5b96208bb84d13aaa6ae7ecfbed"],["/archives/2019/index.html","534f08c7d6b8340ac8ae19a587ca1601"],["/archives/2020/12/index.html","8e3810b75c4b5ebff2b5041dd2e67c34"],["/archives/2020/index.html","c1a7e50f7b16754b2be8b3ccb893378d"],["/archives/2021/01/index.html","4d48ae9b3143234fff4495a4ccca6411"],["/archives/2021/index.html","d0780b84ae18d6d96ba5c78b5a180a4b"],["/archives/2022/10/index.html","9c3918b5f575a4b3577e75ae02cbe53f"],["/archives/2022/index.html","2bbc9e5c5fd1785d2374dbe5cf10a3fe"],["/archives/index.html","a587bf8722a52df6605df61b31de614e"],["/categories/index.html","7fac1b2eba06a440a7035b2632472b6e"],["/categories/专栏/index.html","c0873804db9a6c8e1ccd4a43f9a9b42c"],["/categories/水果/index.html","d5d9f7a383186e0dd78d64fe62acea5f"],["/categories/水果/苹果/index.html","dd9638aec249b075a4e2c1c5ed16648e"],["/css/custom/custom.css","d3a2cbfaf209fedda33e5938c2749e39"],["/css/custom/daohanglan.css","b309d0522587e527b71598e9cb2abdee"],["/css/custom/font.css","f320a327ee7f7bb4520c98bd9cdd7090"],["/css/custom/iconfont.css","82f635fd9e53963bc11648ff3fa77066"],["/css/custom/runtime.css","4c12d1e9a2f26631f84ebd4e0bf69a07"],["/css/index.css","3709a505d86d37cefcdc15b0e1343df6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/font/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/font/iconfont.ttf","8914f4d9a74ba9e40c5c026ad07caa80"],["/font/iconfont.woff","b7eb33bfcd4d600a20de3c4e9943afa5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/bg_img.png","52ddb4eaa3f34b47d60a4111e69bbbd6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.jpg","a6d3d21951313b6e28639478b04efe6a"],["/index.html","4add206ef72a955026fe12444348c1a9"],["/js/custom/diytitle.js","405e65bc3a211b60fa56f7f578eb474b"],["/js/custom/jquery.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/js/custom/mouse_snow.min.js","b1fe97fe1e64d028727b4a14ac3eb949"],["/js/custom/nav.js","404259481bf12b2a4d36c41f7e1232c9"],["/js/custom/runtime.js","5394ba3b4c00193359e1d5e06b7de03e"],["/js/custom/sun_moon.js","a4e43ec9df5df0f5db20e910b5a3ab1e"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/sw-register.js","40d412e4e4a4d32e8537e5af1aa49bf1"],["/tags/index.html","f031a925782c540e9665c2b034aabe7b"],["/tags/stone/index.html","4228b655d513105c6cd0f0d62657413c"],["/tags/test-stm32-mcu-windwos/index.html","1fbfe8b951a20b47526a8d91f5c04ac8"],["/tags/test/index.html","47fad5c24bb5f1aa52a98c76d1d008be"],["/tags/分布式/index.html","97ed974a5ba6ba395855b94fe72a4e16"],["/tags/搜索引擎/index.html","8e4cd94be508773954d3eb0541f5be7f"],["/tags/消息队列/index.html","bb0b13a4e75fdd1a8da9e1267cc2e6e3"],["/tags/缓存/index.html","442d2dddf2cd9ddf04b9a1ed5204cc87"],["/tags/面试/index.html","f0e37949d4442eaad817046998beedf7"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
