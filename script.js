function showit(page) {
  console.log(page)
  document.getElementById("home").style.display = "none"
  document.getElementById("about").style.display = "none"
  document.getElementById("gallery").style.display = "none"
  document.getElementById("invest").style.display = "none"
  document.getElementById("testimonials").style.display = "none"
  document.getElementById("contact").style.display = "none"

  document.getElementById(page).style.display = "block"
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
