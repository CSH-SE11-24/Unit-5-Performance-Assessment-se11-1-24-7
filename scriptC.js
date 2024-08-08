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

// Showing the images when the button is clicked 
let weatherBtn = document.querySelector("#weatherBtnC")
let weatherImg = document.querySelector("#weatherC")
let extremeC = document.querySelector("#extremeC")
weatherBtn.addEventListener("click", function() {
  weatherImg.src = "current/weatherC.gif"
  weatherImg.alt = "the weather right now"

  extremeC.src = "current/extremesC.png"
  extremeC.alt = "Global Extremes"
})