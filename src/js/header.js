const button = document.querySelector(".header_menu_img");

button.addEventListener("click", () => { 
    document.querySelector(".modal_window").classList.add("opened");
})

const close = document.querySelector(".x_icon");
close.addEventListener("click", () => { 
    document.querySelector(".modal_window").classList.remove("opened");
})

const modal_menu = document.querySelector(".modal_menu");
modal_menu.addEventListener("click", (event) => { 
    document.querySelector(".modal_window").classList.remove("opened");

})
const nav_link = document.querySelector(".nav_link");
nav_link.addEventListener("click", () => { 
    document.querySelector(".menu").classList.remove("active");
})
const menu_trigger = document.querySelector('.menu_trigger');

menu_trigger.addEventListener('click', function () {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');

});
