import{A as f,S as g}from"./assets/vendor-DpF08Fhr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll(".covers-img"),r=document.querySelector(".marquee-container");new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?s.forEach(o=>{o.style.animationPlayState="running"}):s.forEach(o=>{o.style.animationPlayState="paused"})})},{threshold:.1}).observe(r);function i(e){if(e.target.nodeName!=="IMG")return;const t=e.target.parentElement,o=document.querySelectorAll(".marquee-row");e.target.style.animationPlayState==="paused"?Array.from(t.children).forEach(n=>{n.style.animationPlayState="running"}):(Array.from(t.children).forEach(n=>{n.style.animationPlayState="paused"}),o.forEach(n=>{n!==t&&Array.from(n.children).forEach(l=>{l.style.animationPlayState==="paused"&&(l.style.animationPlayState="running")})}))}document.querySelector(".marquee-container").addEventListener("click",i)});const d="/bestteam2/assets/icons-ElUfhFdg.svg";new f(".accordion-container",{showMultiple:!0});const b=document.querySelectorAll(".faq-ac-trigger");for(const s of b)s.addEventListener("click",h);function h(s){console.log(s.currentTarget.getAttribute("aria-expanded")),s.currentTarget.getAttribute("aria-expanded")==="true"?s.currentTarget.children[0].children[0].innerHTML=`<use href="${d}#icon-icon-up"></use>`:s.currentTarget.getAttribute("aria-expanded")==="false"&&(s.currentTarget.children[0].children[0].innerHTML=`<use href="${d}#icon-icon-down"></use>`)}const p="/bestteam2/assets/1-dst-BGm4sndC.jpg",y="/bestteam2/assets/1-dst-2x-BDZviX4_.jpg",j="/bestteam2/assets/1-mob-RIh0sXxX.jpg",x="/bestteam2/assets/1-mob-2x-CctM9lJS.jpg",v="/bestteam2/assets/2-dst-CQfpD12x.jpg",S="/bestteam2/assets/2-dst-2x-C60Vfx3u.jpg",I="/bestteam2/assets/2-mob-CAj7JJum.jpg",w="/bestteam2/assets/2-mob-2x-BKxM-mGa.jpg",A="/bestteam2/assets/3-dst-BzUG14Uj.jpg",q="/bestteam2/assets/3-dst-2x-DNvHG7rp.jpg",E="/bestteam2/assets/3-mob-rEqaybSG.jpg",L="/bestteam2/assets/3-mob-2x-BpBASv-B.jpg",M=[{dst:p,dst2x:y,mob:j,mob2x:x},{dst:v,dst2x:S,mob:I,mob2x:w},{dst:A,dst2x:q,mob:E,mob2x:L}],P=document.querySelector(".projects-list");function D(s){return s.map(r=>`
      <div class="swiper-slide">
        <li class="projects-item">
        <div class="projects-item-info">
            <ul class="projects-item-info-hashtags">
            <li class="projects-item-info-hashtags-tag">#react</li>
            <li class="projects-item-info-hashtags-tag">#js</li>
            <li class="projects-item-info-hashtags-tag">#node js</li>
            <li class="projects-item-info-hashtags-tag">#git</li>
            </ul>
            <div class="projects-item-info-descr">
            <h3 class="projects-item-info-descr-title">
                Programming Across Borders: Ideas, Technologies, Innovations
            </h3>
            <a target="_blank" href="https://psyche-1.github.io/bestteam2/" class="projects-item-info-descr-link">See project</a>
            </div>
        </div>
        <div class="projects-item-project">
            <picture class="project-picture">
            <source
                srcset="${r.dst} 1x, ${r.dst2x} 2x"
                media="(min-width: 768px)"
            />
            <source
                srcset="${r.mob} 1x, ${r.mob2x} 2x"
                media="(max-width: 767px)"
            />
            <img src=${p} alt="project image" />
            </picture>
        </div>
        </li>
      </div>
        `).join("")}P.insertAdjacentHTML("beforeend",D(M));const B=new g(".swiper",{direction:"horizontal",loop:!1,speed:400,effect:"slide",navigation:{nextEl:".button-next",prevEl:".button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0}}),u=document.querySelector(".button-prev"),m=document.querySelector(".button-next"),a=document.querySelectorAll(".projects-button-icon");B.on("progress",(s,r)=>{if(r===1){m.disabled=!0,a[1].classList.add("projects-button-icon-disabled");return}else if(r===0){u.disabled=!0,a[0].classList.add("projects-button-icon-disabled");return}a[0].classList.remove("projects-button-icon-disabled"),a[1].classList.remove("projects-button-icon-disabled"),m.disabled=!1,u.disabled=!1});
//# sourceMappingURL=index.js.map
