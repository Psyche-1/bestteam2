const button = document.querySelector(".header_menu_img");

button.addEventListener("click", () => {
    document.querySelector(".modal_window").style.display = "flex";
});

const close = document.querySelector(".x_icon");
close.addEventListener("click", () => {
    document.querySelector(".modal_window").style.display = "none";
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
