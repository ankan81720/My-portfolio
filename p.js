// Typed.js initialization
var typed = new Typed("#element", {
  strings: [
    "Software Engineer",
    " passionate Web Developer",
    " passionate Ar Vr Developer",
  ],
  typeSpeed: 50,
});

// Tab-switching function

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// Remove active class from all tabs and content
function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
    tabcontent.style.display = "none";
  }

  // Activate the clicked tab and display relevant content
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
  document.getElementById(tabname).style.display = "block";
}
// for side menu small screen
var sidemeu = document.getElementById("sidemenu");
function openmenu() {
  sidemeu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

