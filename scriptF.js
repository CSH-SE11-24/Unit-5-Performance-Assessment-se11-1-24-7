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
let humanBtn = document.querySelector("#humanBtnF")
let humanImg = document.querySelector("#humanF")
humanBtn.addEventListener("click", function() {
  humanImg.src = "future/humanAct.png"
  humanImg.alt = "Human Activity Trend"
})