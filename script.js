function showit(var1) {
  console.log(var1)
  //hide the one div that is shown
  document.getElementById("home").style.display = "none"
  document.getElementById("about").style.display = "none"
  document.getElementById("gallery").style.display = "none"
  document.getElementById("invest").style.display = "none"
  document.getElementById("testimonials").style.display = "none"
  document.getElementById("contact").style.display = "none"
  
  document.getElementById(var1).style.display = 'block';
}
