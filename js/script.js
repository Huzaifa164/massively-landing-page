const pagesList = document.querySelectorAll(".pages-list");
const pagesLink = document.querySelectorAll(".pages-link");
const menu = document.getElementById("menu");
const xmark = document.querySelector(".fa-xmark");
const nav = document.querySelector("nav");
const body = document.querySelector("body");

for (let i = 0; i < pagesList.length; i++) {
  pagesList[i].addEventListener("mouseover", (event) => {
    pagesLink[i].style.color = "black";
  });
  pagesList[i].addEventListener("mouseout", (event) => {
    pagesLink[i].style.color = "white";
  });
}

menu.addEventListener("click", () => {
  nav.style.display = "flex";
  body.classList.toggle("blur");
});
xmark.addEventListener("click", () => {
  nav.style.display = "none";
  body.classList.toggle("blur");
});
