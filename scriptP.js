// When the mouse is over the logo, the theme will change to its designated one
let logo = document.querySelector("#logo")

let nav = document.querySelector("nav")

logo.addEventListener("mouseover", function() {
  document.body.classList.toggle("theme")
  nav.classList.remove("bg-body-tertiary")
  nav.classList.add("navtheme")
})

logo.addEventListener("mouseout", function() {
  document.body.classList.toggle("theme")
  nav.classList.remove("navtheme")
  nav.classList.add("bg-body-tertiary")
})

// Showing the image when the button is clicked
let geoBtnP = document.querySelector("#geoBtnP")

let geoWeatherP = document.querySelector("#geoWeatherP")

geoBtnP.addEventListener("click", function() {
  geoWeatherP.src = "past/geoP.jpg";
  geoWeatherP.alt = "geography for the weather in the past"
})