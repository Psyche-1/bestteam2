import{A as h,a as v,S as x}from"./assets/vendor-CB-3IKOr.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll(".covers-img"),s=document.querySelector(".marquee-container");new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?o.forEach(r=>{r.style.animationPlayState="running"}):o.forEach(r=>{r.style.animationPlayState="paused"})})},{threshold:.1}).observe(s);function a(e){if(e.target.nodeName!=="IMG")return;const t=e.target.parentElement,r=document.querySelectorAll(".marquee-row");e.target.style.animationPlayState==="paused"?Array.from(t.children).forEach(i=>{i.style.animationPlayState="running"}):(Array.from(t.children).forEach(i=>{i.style.animationPlayState="paused"}),r.forEach(i=>{i!==t&&Array.from(i.children).forEach(u=>{u.style.animationPlayState==="paused"&&(u.style.animationPlayState="running")})}))}document.querySelector(".marquee-container").addEventListener("click",a)});new h(".accordion-container",{showMultiple:!0});const j=document.querySelectorAll(".faq-ac-trigger");for(const o of j)o.addEventListener("click",I);function I(o){const s=o.currentTarget.querySelector(".faq-arrow-down"),n=o.currentTarget.querySelector(".faq-arrow-up");o.currentTarget.getAttribute("aria-expanded")==="true"?(s.classList.add("visually-hidden"),n.classList.remove("visually-hidden")):o.currentTarget.getAttribute("aria-expanded")==="false"&&(s.classList.remove("visually-hidden"),n.classList.add("visually-hidden"))}const p=document.getElementById("form-together"),d=document.getElementById("successModal"),c=document.getElementById("modalOverlay"),m=document.getElementById("modalMessage"),w=document.getElementById("closeModal");function b(){d.classList.remove("active"),c.classList.remove("active")}p.addEventListener("submit",async o=>{o.preventDefault();const s=document.getElementById("together-input--email"),n=document.getElementById("together-input--comments"),a={email:s.value.trim(),comment:n.value.trim()};if(!a.email||!a.comment){m.textContent="Please fill out all required fields.",d.classList.add("active"),c.classList.add("active");return}try{const t=(await v.post("https://portfolio-js.b.goit.study/api/requests",a,{headers:{"Content-Type":"application/json"}})).data;m.innerHTML=`
      <span class="thank-you-text">${t.title}</span><br>
      <span class="thank-you-text--two">${t.message}</span>
    `,d.classList.add("active"),c.classList.add("active"),p.reset()}catch(e){let t="An error occurred while sending data. Try again.";e.response?e.response.status===400?t="Bad request: Invalid request body.":e.response.status===404?t="Not found: The requested resource could not be found.":e.response.status===500&&(t="Server error: Please try again later."):e.request?t="A network error occurred. Please check your connection and try again.":t=`Error: ${e.message}`,m.textContent=t,d.classList.add("active"),c.classList.add("active")}});w.addEventListener("click",b);c.addEventListener("click",b);const y="/bestteam2/assets/1-dst-BGm4sndC.jpg",L="/bestteam2/assets/1-dst-2x-BDZviX4_.jpg",q="/bestteam2/assets/1-mob-RIh0sXxX.jpg",E="/bestteam2/assets/1-mob-2x-CctM9lJS.jpg",S="/bestteam2/assets/2-dst-CQfpD12x.jpg",M="/bestteam2/assets/2-dst-2x-C60Vfx3u.jpg",A="/bestteam2/assets/2-mob-CAj7JJum.jpg",B="/bestteam2/assets/2-mob-2x-BKxM-mGa.jpg",P="/bestteam2/assets/3-dst-BzUG14Uj.jpg",D="/bestteam2/assets/3-dst-2x-DNvHG7rp.jpg",C="/bestteam2/assets/3-mob-rEqaybSG.jpg",O="/bestteam2/assets/3-mob-2x-BpBASv-B.jpg",T=[{dst:y,dst2x:L,mob:q,mob2x:E},{dst:S,dst2x:M,mob:A,mob2x:B},{dst:P,dst2x:D,mob:C,mob2x:O}],k=document.querySelector(".projects-list");function $(o){return o.map(s=>`
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
            <img src=${y} alt="project image" />
            </picture>
        </div>
        </li>
      </div>
        `).join("")}k.insertAdjacentHTML("beforeend",$(T));const G=new x(".swiper",{direction:"horizontal",loop:!1,speed:400,effect:"slide",navigation:{nextEl:".button-next",prevEl:".button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0}}),f=document.querySelector(".button-prev"),g=document.querySelector(".button-next"),l=document.querySelectorAll(".projects-button-icon");G.on("progress",(o,s)=>{if(s===1){g.disabled=!0,l[1].classList.add("projects-button-icon-disabled");return}else if(s===0){f.disabled=!0,l[0].classList.add("projects-button-icon-disabled");return}l[0].classList.remove("projects-button-icon-disabled"),l[1].classList.remove("projects-button-icon-disabled"),g.disabled=!1,f.disabled=!1});
//# sourceMappingURL=index.js.map
