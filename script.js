// ============================================
// BACK TO TOP BUTTON
// ============================================

// Grab the button from the page
const backToTopBtn = document.getElementById("backToTopBtn");

// Show the button only after scrolling down a bit
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// Scroll back to the top when the button is clicked
backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// ============================================
// SIMPLE FADE-IN REVEAL EFFECT ON SCROLL
// ============================================

// Select every section that should fade in
const revealElements = document.querySelectorAll(".reveal");

// This function checks if an element is visible in the window
function checkReveal() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(function (element) {
    const elementTop = element.getBoundingClientRect().top;

    // If the element is close enough to the visible area, show it
    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

// Run once on page load (in case something is already visible)
checkReveal();

// Run every time the user scrolls
window.addEventListener("scroll", checkReveal);




const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", function(){
  navLinks.classList.toggle("show");
})