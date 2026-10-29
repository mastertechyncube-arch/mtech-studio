var C="mtech-studio-mvtykgxn";var A=["./","index.html","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return Promise.all(A.map(function(u){return c.add(u).catch(function(){})}))}).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==C&&n.indexOf("mtech-")===0}).map(function(n){return caches.delete(n)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){var r=e.request;if(r.method!=="GET")return;var u=new URL(r.url);if(u.origin!==location.origin)return;
if(r.mode==="navigate"){e.respondWith(fetch(r).then(function(x){if(x.ok){var y=x.clone();caches.open(C).then(function(c){c.put(r,y)})}return x}).catch(function(){return caches.match(r,{ignoreSearch:true}).then(function(m){return m||caches.match("index.html")})}));return}
e.respondWith(caches.match(r).then(function(m){return m||fetch(r).then(function(x){if(x.ok){var y=x.clone();caches.open(C).then(function(c){c.put(r,y)})}return x})}))});
