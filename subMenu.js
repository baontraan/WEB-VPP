const sideBar = document.querySelector(".sideBar");
const subMenu = document.querySelector(".sub-menu");
sideBar.addEventListener("click", function () {
  sideBar.classList.toggle("active");
  subMenu.classList.toggle("active");
});
const body = document.querySelector("body");
console.log(body);
