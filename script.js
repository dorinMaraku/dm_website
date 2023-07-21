const navItem = document.querySelectorAll('.nav-item')

for (i of navItem) {
    i.onmouseover = function addUnderline () {
    this.style.textDecoration = "underline"
    this.style.color = "#6D6875"
    this.style.transition = "0.5s ease-in-out"

}
    i.onmouseout = function removeUnderline () {
    this.style.textDecoration = ""
    this.style.color = ""
}
}

const aboutBtn = document.querySelector('#about-btn')
console.log(aboutBtn)

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})
 
document.querySelectorAll("nav-link").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active') 
}))