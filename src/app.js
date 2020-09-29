//// HAMBURGER TOGGLER
const openHam = document.querySelector(".nav__hamburger");
const logoOff = document.querySelector(".header-logo"); // KAE off
const openNavMenu = document.querySelector(".nav__menu");

openHam.addEventListener("click", () => {
  openHam.classList.toggle("is-active");
  logoOff.classList.toggle("logoOff");
  openNavMenu.classList.toggle("open-menu");
});

// window.addEventListener('scroll', function () {

// })

/*/////////////////////////////////////////////////////////////////
ANIMATE SKILLS
/////////////////////////////////////////////////////////////////*/
animateSkills = function () {
  let windowHeight, skillJS, skillCss;

  init = function () {
    windowHeight = window.innerHeight / 1.3;
    skillJs = document.querySelector("#skills-js");
    skillCss = document.querySelector("#skills-css");
    addEventHandlers();
  };

  addEventHandlers = function () {
    window.addEventListener("resize", init);
    window.addEventListener("scroll", () => {
      let posFromTop = skillJs.getBoundingClientRect().top;

      if (posFromTop - windowHeight <= 0) {
        skillJs.classList.add("active-rotateL");
        skillCss.classList.add("active-rotateR");
      } else {
        skillJs.classList.remove("active-rotateL");
        skillCss.classList.remove("active-rotateR");
      }

      /*//////////////////////////////////////////////////////
      STICKY NAVIGATION ON SCROLL 
      //////////////////////////////////////////////////////*/
      let header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  };
  init();
};
animateSkills();
