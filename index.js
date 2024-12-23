import{A as y,S as g,N as j,K as q,a as h,i as E}from"./assets/vendor-DPRnm3ij.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();new y(".about-accordion-container",{duration:400,showMultiple:!0,openOnInit:[0]});const M=new g(".about-me-swiper",{modules:[j,q],loop:!0,slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!0}});document.querySelector(".swiper-button-next").addEventListener("click",s=>{M.slideNext()});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll(".covers-img"),r=document.querySelector(".marquee-container");new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?s.forEach(i=>{i.style.animationPlayState="running"}):s.forEach(i=>{i.style.animationPlayState="paused"})})},{threshold:.1}).observe(r);function n(e){if(e.target.nodeName!=="IMG")return;const t=e.target.parentElement,i=document.querySelectorAll(".marquee-row");e.target.style.animationPlayState==="paused"?Array.from(t.children).forEach(d=>{d.style.animationPlayState="running"}):(Array.from(t.children).forEach(d=>{d.style.animationPlayState="paused"}),i.forEach(d=>{d!==t&&Array.from(d.children).forEach(f=>{f.style.animationPlayState==="paused"&&(f.style.animationPlayState="running")})}))}document.querySelector(".marquee-container").addEventListener("click",n)});new y(".accordion-container",{showMultiple:!0});const k=document.querySelectorAll(".faq-ac-trigger");for(const s of k)s.addEventListener("click",B);function B(s){const r=s.currentTarget.querySelector(".faq-arrow-down"),o=s.currentTarget.querySelector(".faq-arrow-up");s.currentTarget.getAttribute("aria-expanded")==="true"?(r.classList.add("visually-hidden"),o.classList.remove("visually-hidden")):s.currentTarget.getAttribute("aria-expanded")==="false"&&(r.classList.remove("visually-hidden"),o.classList.add("visually-hidden"))}const b=document.getElementById("form-together"),u=document.getElementById("successModal"),l=document.getElementById("modalOverlay"),p=document.getElementById("modalMessage"),P=document.getElementById("closeModal");function w(){u.classList.remove("active"),l.classList.remove("active")}b.addEventListener("submit",async s=>{s.preventDefault();const r=document.getElementById("together-input--email"),o=document.getElementById("together-input--comments"),n={email:r.value.trim(),comment:o.value.trim()};if(!n.email||!n.comment){p.textContent="Please fill out all required fields.",u.classList.add("active"),l.classList.add("active");return}try{const t=(await h.post("https://portfolio-js.b.goit.study/api/requests",n,{headers:{"Content-Type":"application/json"}})).data;p.innerHTML=`
      <span class="thank-you-text">${t.title}</span><br>
      <span class="thank-you-text--two">${t.message}</span>
    `,u.classList.add("active"),l.classList.add("active"),b.reset()}catch(e){let t="An error occurred while sending data. Try again.";e.response?e.response.status===400?t="Bad request: Invalid request body.":e.response.status===404?t="Not found: The requested resource could not be found.":e.response.status===500&&(t="Server error: Please try again later."):e.request?t="A network error occurred. Please check your connection and try again.":t=`Error: ${e.message}`,p.textContent=t,u.classList.add("active"),l.classList.add("active")}});P.addEventListener("click",w);l.addEventListener("click",w);const A=document.querySelector(".header_menu_img"),x=document.querySelector(".modal_window");A.addEventListener("click",()=>{x.classList.toggle("active")});const D=document.querySelector(".x_icon");D.addEventListener("click",()=>{x.classList.toggle("active")});const _=document.querySelector(".nav_link");_.addEventListener("click",()=>{document.querySelector(".menu").classList.remove("active")});const $=document.querySelector(".menu_trigger");$.addEventListener("click",function(){document.querySelector(".menu").classList.toggle("active")});const L="/bestteam2/assets/1-dst-BGm4sndC.jpg",C="/bestteam2/assets/1-dst-2x-BDZviX4_.jpg",T="/bestteam2/assets/1-mob-RIh0sXxX.jpg",H="/bestteam2/assets/1-mob-2x-CctM9lJS.jpg",N="/bestteam2/assets/2-dst-CQfpD12x.jpg",O="/bestteam2/assets/2-dst-2x-C60Vfx3u.jpg",V="/bestteam2/assets/2-mob-CAj7JJum.jpg",R="/bestteam2/assets/2-mob-2x-BKxM-mGa.jpg",U="/bestteam2/assets/3-dst-BzUG14Uj.jpg",G="/bestteam2/assets/3-dst-2x-DNvHG7rp.jpg",z="/bestteam2/assets/3-mob-rEqaybSG.jpg",K="/bestteam2/assets/3-mob-2x-BpBASv-B.jpg",J=[{dst:L,dst2x:C,mob:T,mob2x:H},{dst:N,dst2x:O,mob:V,mob2x:R},{dst:U,dst2x:G,mob:z,mob2x:K}],X=document.querySelector(".projects-list");function F(s){return s.map(r=>`
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
swiper.on('progress', (swiper, progress) => {
  if (progress === 1) {
    nextButton.disabled = true;
    buttonIcons[1].classList.add('projects-button-icon-disabled');
    return;
  } else if (progress === 0) {
    prevButton.disabled = true;
    buttonIcons[0].classList.add('projects-button-icon-disabled');
    return;
  }

  buttonIcons[0].classList.remove('projects-button-icon-disabled');
  buttonIcons[1].classList.remove('projects-button-icon-disabled');
  nextButton.disabled = false;
  prevButton.disabled = false;
});
            />
            <img src=${L} alt="project image" />
            </picture>
        </div>
        </li>
      </div>
        `).join("")}X.insertAdjacentHTML("beforeend",F(J));new g(".swiper",{direction:"horizontal",loop:!1,speed:400,effect:"slide",navigation:{nextEl:".button-next",prevEl:".button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0}});document.querySelector(".button-prev");document.querySelector(".button-next");document.querySelectorAll(".projects-button-icon");const v=document.querySelector(".reviews-list"),a=document.querySelector(".prev-btn"),c=document.querySelector(".next-btn"),W="https://portfolio-js.b.goit.study/api/reviews",m=new g(".swiper",{speed:400,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!0},mousewheel:{invert:!0}}),I=document.querySelector(".swiper").swiper;let S;const Q=document.querySelector(".sec-reviews"),Z={root:null,rootMargin:"0px",threshold:1},Y=(s,r)=>{s.forEach(o=>{if(o.intersectionRatio){async function n(e=W,t={}){return m.enable(),(await h(e,t)).data}n().then(e=>{a.classList.remove("isHIdden"),c.classList.remove("isHIdden"),S=e,v.insertAdjacentHTML("beforeend",te(e))}).catch(e=>{E.show({theme:"dark",position:"topRight",message:`Sorry, ${e}`,messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#EF4040",timeout:5e3,displayMode:1}),v.innerHTML="<p>Not found</p>",m.disable(),a.classList.add("isHIdden"),c.classList.add("isHIdden")})}})},ee=new IntersectionObserver(Y,Z);ee.observe(Q);function te(s){return s.map(({_id:r,author:o,avatar_url:n,review:e})=>`<div class="swiper-slide"><li data-id="${r}" class="review-card">
        <img class="avatar-review" src="${n}" alt="${o}" width="48" height="48"></img>
        <h3 class="author-review">${o}</h3>
        <p class="comment-review">${e}</p>
    </li></div>`).join("")}c.addEventListener("click",se);function se(s){if(I.activeIndex===S.length-1)return c.disabled=!0;c.disabled=!1,a.disabled=!1,c.classList.remove("isHIdden"),m.slideNext(400)}a.addEventListener("click",re);function re(s){if(I.activeIndex===0)return a.disabled=!0;a.disabled=!1,c.disabled=!1,a.classList.remove("isHIdden"),m.slidePrev(400)}
//# sourceMappingURL=index.js.map
