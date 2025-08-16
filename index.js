import{a as S,S as q,i}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p=15;async function y(s,t=1){const o="https://pixabay.com/",a="api/",e="34575969-428170e5bc4fca7f33bfb3efe",r=new URLSearchParams({q:s,key:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:t}),l=`${o}${a}`;try{return(await S.get(l,{params:r})).data}catch(m){throw m}}const g=document.querySelector(".gallery"),L=document.querySelector(".loader"),w=document.querySelector(".js-more");let d;async function E(s){const t=s.map(o=>`
      <a class="gallery-link" href="${o.largeImageURL}">
      <img
        class="gallery-image"
        src="${o.webformatURL}"
        alt="${o.tags}"
        width='360'
        height="200"
      />
      <ul class="img-info-list">
        <li class="info-item">
          <h2 class="info-title">Likes</h2>
          <p class="info-text">${o.likes}</p>
        </li>
        <li class="info-item">
          <h2 class="info-title">Views</h2>
          <p class="info-text">${o.views}</p>
        </li>
        <li class="info-item">
          <h2 class="info-title">Comments</h2>
          <p class="info-text">${o.comments}</p>
        </li>
        <li class="info-item">
          <h2 class="info-title">Downloads</h2>
            <p class="info-text">${o.downloads}</p>
        </li>
      </ul>
    </a>`).join(`
`);g.insertAdjacentHTML("beforeend",t),d?d.refresh():d=new q(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function x(){g.innerHTML=""}function b(){L.classList.add("is-visible")}function v(){L.classList.remove("is-visible")}function P(){w.classList.remove("hidden")}function u(){w.classList.add("hidden")}const R=document.querySelector(".form"),h=document.querySelector(".input-text"),$=document.querySelector(".js-more");let c,f,n;R.addEventListener("submit",async s=>{if(s.preventDefault(),u(),x(),c=h.value.trim(),n=1,c===""){i.error({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}h.value="",b();try{const t=await y(c,n);if(f=Math.ceil(t.totalHits/p),t.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"});return}n<f?P():(u(),i.info({message:"We're sorry, but you've reached the end of search results."})),E(t.hits)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later...",position:"topRight"})}finally{v()}});$.addEventListener("click",async s=>{s.preventDefault(),n+=1,b(),u();try{const t=await y(c,n);E(t.hits);const e=document.querySelector(".gallery").children[0].getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),n<f?P():(u(),i.info({message:"We're sorry, but you've reached the end of search results."}))}catch{i.error({title:"Error",message:"Something went wrong. Please try again later...",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
