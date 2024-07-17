let main_h1 = document.getElementById('main_h1');
let burger__menu = document.getElementById('burger-menu');
let menu = document.getElementById('menu');
let close__menu = document.getElementById('close__menu');
let str = document.getElementsByClassName('.str');
let expand_str = document.getElementsByClassName('.expand_str');
// const expand_h6_elements = document.querySelectorAll('.expand_h6');

if (window.innerWidth < 910) {
    main_h1.innerText = 'Аренда тематических лофтов.';
}
if (window.innerWidth > 1210) {
    menu.style.width = +((window.innerWidth - 1110) / 2 + 70) + 'px';
} else {
    menu.style.width = +(window.innerWidth * 0.8) + 'px';
}

const burger_menu = () => {
    if (menu.style.display === 'none') {
        menu.style.zIndex = '100';
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
        menu.style.zIndex = '0';
    }
}

const close_menu = () => {
    menu.style.display = 'none';
    menu.style.zIndex = '0';
    menu.style.transition = '0.3 ease-in-out';
}

const expand__str = (element) => {
    const h6 = element.parentElement.nextElementSibling;
    h6.style.display = h6.style.display === 'block' ? 'none' : 'block';
}
