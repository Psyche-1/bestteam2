const burger_button = document.querySelector(".header_menu_img");
const modal_window = document.querySelector(".modal_window");


burger_button.addEventListener("click", () => {
    modal_window.classList.toggle("active");
});

const close = document.querySelector(".x_icon");
close.addEventListener("click", () => {
    modal_window.classList.toggle("active");
});   


const nav_link = document.querySelector(".nav_link");
nav_link.addEventListener("click", () => {
    document.querySelector(".menu").classList.remove("active");
});


const menu_trigger = document.querySelector('.menu_trigger');

menu_trigger.addEventListener('click', function () {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');

});