function openNav() {
  document.getElementById("navtab").classList.add("openNav");
  document.getElementById("close").style.display = "block";
  document.getElementById("menu").style.display = "none";
}
function closeNav() {
  document.getElementById("navtab").classList.remove("openNav");
  document.getElementById("close").style.display = "none";
  document.getElementById("menu").style.display = "block";
}
