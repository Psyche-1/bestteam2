import{S as p}from"./assets/vendor-BiMJRTlQ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelectorAll(".covers-img"),s=document.querySelector(".marquee-container");new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?r.forEach(o=>{o.style.animationPlayState="running"}):r.forEach(o=>{o.style.animationPlayState="paused"})})},{threshold:.1}).observe(s);function i(e){if(e.target.nodeName!=="IMG")return;const t=e.target.parentElement,o=document.querySelectorAll(".marquee-row");e.target.style.animationPlayState==="paused"?Array.from(t.children).forEach(n=>{n.style.animationPlayState="running"}):(Array.from(t.children).forEach(n=>{n.style.animationPlayState="paused"}),o.forEach(n=>{n!==t&&Array.from(n.children).forEach(l=>{l.style.animationPlayState==="paused"&&(l.style.animationPlayState="running")})}))}document.querySelector(".marquee-container").addEventListener("click",i)});const u="/bestteam2/assets/1-dst-BGm4sndC.jpg",f="/bestteam2/assets/1-dst-2x-BDZviX4_.jpg",b="/bestteam2/assets/1-mob-RIh0sXxX.jpg",g="/bestteam2/assets/1-mob-2x-CctM9lJS.jpg",h="/bestteam2/assets/2-dst-CQfpD12x.jpg",j="/bestteam2/assets/2-dst-2x-C60Vfx3u.jpg",y="/bestteam2/assets/2-mob-CAj7JJum.jpg",x="/bestteam2/assets/2-mob-2x-BKxM-mGa.jpg",v="/bestteam2/assets/3-dst-BzUG14Uj.jpg",I="/bestteam2/assets/3-dst-2x-DNvHG7rp.jpg",S="/bestteam2/assets/3-mob-rEqaybSG.jpg",q="/bestteam2/assets/3-mob-2x-BpBASv-B.jpg",w=[{dst:u,dst2x:f,mob:b,mob2x:g},{dst:h,dst2x:j,mob:y,mob2x:x},{dst:v,dst2x:I,mob:S,mob2x:q}],E=document.querySelector(".projects-list");function L(r){return r.map(s=>`
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
                srcset="${s.dst} 1x, ${s.dst2x} 2x"
                media="(min-width: 768px)"
            />
            <source
                srcset="${s.mob} 1x, ${s.mob2x} 2x"
                media="(max-width: 767px)"
            />
            <img src=${u} alt="project image" />
            </picture>
        </div>
        </li>
      </div>
        `).join("")}E.insertAdjacentHTML("beforeend",L(w));const M=new p(".swiper",{direction:"horizontal",loop:!1,speed:400,effect:"slide",navigation:{nextEl:".button-next",prevEl:".button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0}}),d=document.querySelector(".button-prev"),m=document.querySelector(".button-next"),a=document.querySelectorAll(".projects-button-icon");M.on("progress",(r,s)=>{if(s===1){m.disabled=!0,a[1].classList.add("projects-button-icon-disabled");return}else if(s===0){d.disabled=!0,a[0].classList.add("projects-button-icon-disabled");return}a[0].classList.remove("projects-button-icon-disabled"),a[1].classList.remove("projects-button-icon-disabled"),m.disabled=!1,d.disabled=!1});
//# sourceMappingURL=index.js.map
