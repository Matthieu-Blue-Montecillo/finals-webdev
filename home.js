const menu = document.querySelector("#menu");
const navbar = document.querySelector("#navbar");
const backdrop = document.getElementById("backdrop");
const logo = document.getElementById("nav-up");

menu.addEventListener("click", () => {
	navbar.classList.remove("hide");
  backdrop.classList.remove("hide");
  document.body.style.overflow = "hidden";
});

logo.addEventListener("click", () => hideNavBar());
backdrop.addEventListener("click", () => hideNavBar());

const hideNavBar = () => {
  navbar.classList.add("hide");
  backdrop.classList.add("hide");
  document.body.style.overflow = "";
};