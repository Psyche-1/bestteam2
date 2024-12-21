import{S as m}from"./assets/vendor-BiMJRTlQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const d="/bestteam2/assets/1-dst-BGm4sndC.jpg",p="/bestteam2/assets/1-dst-2x-BDZviX4_.jpg",u="/bestteam2/assets/1-mob-RIh0sXxX.jpg",b="/bestteam2/assets/1-mob-2x-CctM9lJS.jpg",f="/bestteam2/assets/2-dst-CQfpD12x.jpg",g="/bestteam2/assets/2-dst-2x-C60Vfx3u.jpg",j="/bestteam2/assets/2-mob-CAj7JJum.jpg",x="/bestteam2/assets/2-mob-2x-BKxM-mGa.jpg",h="/bestteam2/assets/3-dst-BzUG14Uj.jpg",v="/bestteam2/assets/3-dst-2x-DNvHG7rp.jpg",y="/bestteam2/assets/3-mob-rEqaybSG.jpg",I="/bestteam2/assets/3-mob-2x-BpBASv-B.jpg",w=[{dst:d,dst2x:p,mob:u,mob2x:b},{dst:f,dst2x:g,mob:j,mob2x:x},{dst:h,dst2x:v,mob:y,mob2x:I}],M=document.querySelector(".projects-list");function S(r){return r.map(e=>`
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
                srcset="${e.dst} 1x, ${e.dst2x} 2x"
                media="(min-width: 768px)"
            />
            <source
                srcset="${e.mob} 1x, ${e.mob2x} 2x"
                media="(max-width: 767px)"
            />
            <img src=${d} alt="project image" />
            </picture>
        </div>
        </li>
      </div>
        `).join("")}M.insertAdjacentHTML("beforeend",S(w));const B=new m(".swiper",{direction:"horizontal",loop:!1,speed:400,effect:"slide",navigation:{nextEl:".button-next",prevEl:".button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0}}),n=document.querySelector(".button-prev"),a=document.querySelector(".button-next"),o=document.querySelectorAll(".projects-button-icon");B.on("progress",(r,e)=>{if(e===1){a.disabled=!0,o[1].classList.add("projects-button-icon-disabled");return}else if(e===0){n.disabled=!0,o[0].classList.add("projects-button-icon-disabled");return}o[0].classList.remove("projects-button-icon-disabled"),o[1].classList.remove("projects-button-icon-disabled"),a.disabled=!1,n.disabled=!1});
//# sourceMappingURL=index.js.map
