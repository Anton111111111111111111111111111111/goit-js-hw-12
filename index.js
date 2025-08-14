import{a as p,S as h,i as a}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function y(i){const r="https://pixabay.com/",o="api/",n="34575969-428170e5bc4fca7f33bfb3efe",e=new URLSearchParams({q:i,key:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${r}${o}`;try{return(await p.get(t,{params:e})).data}catch(s){throw console.error("Помилка при отриманні зображень:",s.message),s}}const d=document.querySelector(".gallery"),m=document.querySelector(".loader"),g=document.querySelector(".js-more");let l;async function L(i){const r=i.map(o=>`<a class="gallery-link" href="${o.largeImageURL}">
      <img
        class="gallery-image"
        src="${o.webformatURL}"
        alt="${o.tags}"
        width='360'
        height="200"
      />
      <li class="img-info-list">
        <div class="info-item">
          <h2 class="info-title">Likes</h2>
          <p class="info-text">${o.likes}</p>
        </div>
        <div class="info-item">
          <h2 class="info-title">Views</h2>
          <p class="info-text">${o.views}</p>
        </div>
        <div class="info-item">
          <h2 class="info-title">Comments</h2>
          <p class="info-text">${o.comments}</p>
        </div>
        <div class="info-item">
          <h2 class="info-title">Downloads</h2>
            <p class="info-text">${o.downloads}</p>
        </div>
      </li>
    </a>`).join(`
`);d.insertAdjacentHTML("beforeend",r),l?l.refresh():l=new h(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function v(){d.innerHTML=""}function w(){m.classList.add("is-visible")}function f(){m.classList.remove("is-visible")}function b(){g.classList.remove("hidden")}const E=document.querySelector(".form"),u=document.querySelector(".input-text");let c="";E.addEventListener("submit",async i=>{if(i.preventDefault(),v(),c=u.value.trim(),c===""){a.error({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}u.value="",w();try{const r=await y(c);if(r.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"}),f();return}L(r.hits),b()}catch{a.error({title:"Error",message:"Something went wrong. Please try again later...",position:"topRight"})}f()});
//# sourceMappingURL=index.js.map
