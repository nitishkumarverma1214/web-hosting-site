const hambergerButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const hamBarFirst = document.querySelector(".toggle-button__bar--first");
const hamBarMid = document.querySelector(".toggle-button__bar--middle");
const hamBarLast = document.querySelector(".toggle-button__bar--last");
hambergerButton.addEventListener("click", () => {
  if (getComputedStyle(mobileNav).display === "none") {
    mobileNav.style.display = "block";
    mobileNav.style.width = "80%";
    mobileNav.style.transition = "width 10s ease-in-out 0s";
    hamBarLast.style.display = "none";
    hamBarMid.style.width = "100%";

    hamBarMid.style.transform = "rotate(45deg)";
    hamBarFirst.style.transform = "rotate(-45deg)";

    hamBarFirst.style.position = "absolute";
    hamBarFirst.style.top = "30%";
    hamBarFirst.style.transition = "transform 3s ease-in-out 0s";
    hamBarMid.style.position = "absolute";
    hamBarMid.style.top = "30%";
    hamBarMid.style.transition = "transform 3s ease-in-out 0s";
  } else {
    mobileNav.style.width = "0px";
    mobileNav.style.display = "none";
    hamBarLast.style.display = "block";
    hamBarMid.style.width = "70%";
    hamBarFirst.style.transform = "rotate(0deg)";
    // hamBarFirst.style.transition = "rotate 10s ease-in-out 3s";
    hamBarMid.style.transform = "rotate(0deg)";
    // hamBarMid.style.transition = "rotate 10s ease-in-out 3s";
    hamBarFirst.style.position = "static";
    hamBarMid.style.position = "static";
  }
});
