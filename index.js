import{a as m,S as d,i as a}from"./assets/vendor-BK_rxH-O.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function h(s){const o="https://pixabay.com/",t="api/",n="34575969-428170e5bc4fca7f33bfb3efe",e=new URLSearchParams({q:s,key:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${o}${t}`;return m.get(r,{params:e}).then(i=>i.data).catch(i=>{throw console.error("Помилка при отриманні зображень:",i.message),i})}const f=document.querySelector(".gallery"),u=document.querySelector(".loader");let l;function p(s){const o=s.map(t=>`<a class="gallery-link" href="${t.largeImageURL}">
      <img
        class="gallery-image"
        src="${t.webformatURL}"
        alt="${t.tags}"
        width='360'
        height="200"
      />
      <li class="img-info-list">
        <div class="info-item">
          <h2 class="info-title">Likes</h2>
          <p class="info-text">${t.likes}</p>
        </div>
        <div class="info-item">
          <h2 class="info-title">Views</h2>
          <p class="info-text">${t.views}</p>
        </div>
        <div class="info-item">
          <h2 class="info-title">Comments</h2>
          <p class="info-text">${t.comments}</p>
        </div>
        <div class="info-item">
          <h2 class="info-title">Downloads</h2>
            <p class="info-text">${t.downloads}</p>
        </div>
      </li>
    </a>`).join(`
`);f.insertAdjacentHTML("beforeend",o),l?l.refresh():l=new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function g(){f.innerHTML=""}function y(){u.classList.add("is-visible")}function v(){u.classList.remove("is-visible")}const L=document.querySelector(".form"),c=document.querySelector(".input-text");L.addEventListener("submit",s=>{s.preventDefault(),g();const o=c.value.trim();if(o===""){a.error({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}c.value="",y(),h(o).then(t=>{if(t.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"});return}p(t.hits)}).catch(t=>{a.error({title:"Error",message:"Something went wrong. Please try again later...",position:"topRight"})}).finally(()=>{v()})});
//# sourceMappingURL=index.js.map
