window.addEventListener("scroll", function(){
const header = this.document.querySelector("header");
header.classList.toggle("sticky", this.window.scrollY > 0)
});
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");
var modal = function(modalClick) {
    serviceModals[modalClick].classList.addEventListener("active");
}
 


const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgcards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");
var portfolioModal = function(modalClick) {
    serviceModals[modalClick].classList.addEventListener("active");
}
  //our client Swiper
var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
document.body.classList.toggle("dark-theme");
themeBtn.classList.toggle("sun");
localStorage.setItem("saved-theme", getCurrentTheme());
localStorage.setItem("saved-icon", getCurrentIcon());
});
const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");
if(savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"] ("sun");
}

const scrollTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", this.window.screenY > 500);
});




scrollTopBtn.addEventListener("click", () => {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scroll = window.pageYOffset;
    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");
if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    document.querySelector(".nav-items a[href*=" + "]").classList.add("active");
}
else {
    document.querySelector(".nav-items a[href*=" + "]").classList.remove("active");
}
});
});
