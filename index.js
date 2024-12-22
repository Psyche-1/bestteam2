import{A as p,S as g}from"./assets/vendor-DpF08Fhr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll(".covers-img"),r=document.querySelector(".marquee-container");new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?s.forEach(o=>{o.style.animationPlayState="running"}):s.forEach(o=>{o.style.animationPlayState="paused"})})},{threshold:.1}).observe(r);function i(e){if(e.target.nodeName!=="IMG")return;const t=e.target.parentElement,o=document.querySelectorAll(".marquee-row");e.target.style.animationPlayState==="paused"?Array.from(t.children).forEach(n=>{n.style.animationPlayState="running"}):(Array.from(t.children).forEach(n=>{n.style.animationPlayState="paused"}),o.forEach(n=>{n!==t&&Array.from(n.children).forEach(l=>{l.style.animationPlayState==="paused"&&(l.style.animationPlayState="running")})}))}document.querySelector(".marquee-container").addEventListener("click",i)});new p(".accordion-container",{showMultiple:!0});const f=document.querySelectorAll(".faq-ac-trigger");for(const s of f)s.addEventListener("click",b);function b(s){console.log(s.currentTarget.getAttribute("aria-expanded")),s.currentTarget.getAttribute("aria-expanded")==="true"?s.currentTarget.children[0].children[0].innerHTML='<use href="../img/icons.svg#icon-icon-up"></use>':s.currentTarget.getAttribute("aria-expanded")==="false"&&(s.currentTarget.children[0].children[0].innerHTML='<use href="../img/icons.svg#icon-icon-down"></use>')}const u="/bestteam2/assets/1-dst-BGm4sndC.jpg",h="/bestteam2/assets/1-dst-2x-BDZviX4_.jpg",y="/bestteam2/assets/1-mob-RIh0sXxX.jpg",j="/bestteam2/assets/1-mob-2x-CctM9lJS.jpg",x="/bestteam2/assets/2-dst-CQfpD12x.jpg",v="/bestteam2/assets/2-dst-2x-C60Vfx3u.jpg",S="/bestteam2/assets/2-mob-CAj7JJum.jpg",I="/bestteam2/assets/2-mob-2x-BKxM-mGa.jpg",w="/bestteam2/assets/3-dst-BzUG14Uj.jpg",A="/bestteam2/assets/3-dst-2x-DNvHG7rp.jpg",q="/bestteam2/assets/3-mob-rEqaybSG.jpg",L="/bestteam2/assets/3-mob-2x-BpBASv-B.jpg",M=[{dst:u,dst2x:h,mob:y,mob2x:j},{dst:x,dst2x:v,mob:S,mob2x:I},{dst:w,dst2x:A,mob:q,mob2x:L}],E=document.querySelector(".projects-list");function P(s){return s.map(r=>`
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
            <img src=${u} alt="project image" />
            </picture>
        </div>
        </li>
      </div>
        `).join("")}E.insertAdjacentHTML("beforeend",P(M));const D=new g(".swiper",{direction:"horizontal",loop:!1,speed:400,effect:"slide",navigation:{nextEl:".button-next",prevEl:".button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0}}),d=document.querySelector(".button-prev"),m=document.querySelector(".button-next"),a=document.querySelectorAll(".projects-button-icon");D.on("progress",(s,r)=>{if(r===1){m.disabled=!0,a[1].classList.add("projects-button-icon-disabled");return}else if(r===0){d.disabled=!0,a[0].classList.add("projects-button-icon-disabled");return}a[0].classList.remove("projects-button-icon-disabled"),a[1].classList.remove("projects-button-icon-disabled"),m.disabled=!1,d.disabled=!1});
//# sourceMappingURL=index.js.map
