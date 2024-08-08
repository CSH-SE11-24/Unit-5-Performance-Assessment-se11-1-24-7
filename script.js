console.log("connected...")

let introImgAll = document.querySelectorAll(".introImg")
console.log(introImgAll.length)

let newSrc;

// When mouse is over the image, the JPG will change to GIF 
for (let i = 0; i < introImgAll.length; i++) {
  introImgAll[i].addEventListener("mouseover", function() {
    newSrc = introImgAll[i].src.replace("jpg", "gif")
    introImgAll[i].src = newSrc
  })

  introImgAll[i].addEventListener("mouseout", function() {
    newSrc = introImgAll[i].src.replace("gif", "jpg")
    introImgAll[i].src = newSrc
  })
}

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