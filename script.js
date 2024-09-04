const userPic = document.querySelector(".user-pic");

userPic.addEventListener("click", () => {
  const subMenu = document.getElementById("subMenu");
  subMenu.classList.toggle("open-menu");
})