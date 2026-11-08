const V="casio880-v1",FILES=["./","index.html","manifest.webmanifest","icon.svg","icon-maskable.svg","icon-192.png","icon-512.png","icon-maskable-512.png","apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>Promise.allSettled(FILES.map(f=>c.add(f)))).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const q=e.request;
  if(q.method!=="GET"||new URL(q.url).origin!==location.origin)return;
  e.respondWith(fetch(q).then(r=>{if(r.ok){const c=r.clone();caches.open(V).then(h=>h.put(q,c))}return r}).catch(()=>caches.match(q).then(m=>m||caches.match("index.html"))));
});
