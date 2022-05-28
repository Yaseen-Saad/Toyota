function closing_nav(params) {
  const nav = document.getElementById("side-bar");
  const closer1 = document.getElementById("nav-close");
  const closer2 = document.getElementById("nav-closer");
  nav.style.width = "0px";
  closer2.style.width = "0%";
}
function oppinenig_nav(params) {
  const nav = document.getElementById("side-bar");
  const closer1 = document.getElementById("nav-close");
  const closer2 = document.getElementById("nav-closer");
  nav.style.width = "250px";
  closer2.style.width = "100%";
}