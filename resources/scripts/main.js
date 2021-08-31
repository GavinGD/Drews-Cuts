let sideNav = document.getElementById("mobile-menu");

const openNav = () => {
  sideNav.style.visibility = "visible";
  sideNav.style.width = "200px";
}

const closeNav = () => {
  sideNav.style.width = "0px";
  sideNav.style.visibility = "hidden";
}

