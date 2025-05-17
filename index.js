import{a as m,S as f,i as u}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const y="50344127-726c85bb6f98eba42715a8612",g=async r=>{try{return(await m.get("https://pixabay.com/api/",{params:{key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data.hits}catch(t){return console.error("Error fetching images:",t),[]}};let a=null,l=0,i=!1;const h=r=>{const t=document.querySelector(".gallery"),n=r.map(o=>`
        <li class="gallery-item">
          <a href="${o.largeImageURL}" class="gallery-link">
            <img src="${o.webformatURL}" alt="${o.tags}" class="gallery-image" />
          </a>
          <div class="image-info">
            <div class="info-labels">
              <span>Likes</span>
              <span>Views</span>
              <span>Comments</span>
              <span>Downloads</span>
            </div>
            <div class="info-values">
              <span>${o.likes}</span>
              <span>${o.views}</span>
              <span>${o.comments}</span>
              <span>${o.downloads}</span>
            </div>
          </div>
        </li>
      `).join("");t.insertAdjacentHTML("beforeend",n),a?a.refresh():(a=new f(".gallery a",{captionsData:"alt",captionDelay:250,close:!1}),a.on("shown.simplelightbox",()=>{i=!0}),a.on("closed.simplelightbox",()=>{i=!1,l=0}),v())};function v(){document.addEventListener("keydown",r=>{r.key==="Escape"&&i&&d()}),document.addEventListener("click",r=>{const t=document.querySelector(".sl-overlay");i&&t&&r.target===t&&d()})}function d(){l+=1,console.log(`Close attempt #${l}`),l>=3&&(a.close(),l=0)}const b=()=>{document.querySelector(".gallery").innerHTML=""},L=()=>{document.getElementById("loader").style.display="block"},w=()=>{document.getElementById("loader").style.display="none"},p=document.querySelector(".form"),E=p.querySelector('input[name="search-text"]');p.addEventListener("submit",async r=>{r.preventDefault();const t=E.value.trim();if(!t){u.error({title:"Error",message:"Please enter a search term."});return}L(),b();const n=await g(t);n.length===0?u.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):h(n),w()});
//# sourceMappingURL=index.js.map
