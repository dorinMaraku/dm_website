const toggleIcon = document.querySelector(".toggle-icon i")
toggleIcon.addEventListener("click", function () {
    const lightTheme = document.querySelector(".light")
    lightTheme.classList.toggle("dark");
    if (lightTheme.classList.contains("dark")) {
        this.style.transform = "rotate(180deg)"
    }
    else {
        this.style.transform = "rotate(0deg)"
    }
})

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