const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
    menu.classList.toggle('bx-x'); /*we change the class to this icon from boxicons*/
    nav.classList.toggle('active'); /*navigation bar is going to have class active*/
}