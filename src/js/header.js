const burger_button = document.querySelector(".header_menu_img");
const modal_window = document.querySelector(".modal_window");
const close = document.querySelector(".x_icon");
const menu_trigger = document.querySelector('.menu_trigger');
const menu = document.querySelector('.menu');

burger_button.addEventListener("click", () => {
    modal_window.classList.toggle("active");
});

close.addEventListener("click", () => {
    modal_window.classList.remove("active");
});

menu_trigger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.querySelectorAll(".modal_list_item").forEach(item => {
    item.addEventListener("click", () => {
        modal_window.classList.remove("active");
    });
});

document.querySelectorAll(".order_btn").forEach(element => {
    element.addEventListener("click", () => {
        modal_window.classList.remove("active");
    });
});

