const hambergerButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const hamBarFirst = document.querySelector(".toggle-button__bar--first");
const hamBarMid = document.querySelector(".toggle-button__bar--middle");
const hamBarLast = document.querySelector(".toggle-button__bar--last");
const backdrop = document.querySelector(".backdrop");

function mobileNavClose() {
  backdrop.style.display = "none";
  mobileNav.classList.add("mobile-nav--close");
  mobileNav.classList.remove("mobile-nav--open");

  hamBarLast.style.visibility = "visible";
  hamBarMid.style.width = "70%";
  hamBarFirst.style.transform = "rotate(0deg)";

  hamBarMid.style.transform = "rotate(0deg)";
  hamBarFirst.style.position = "static";
  hamBarMid.style.position = "static";
}

hambergerButton.addEventListener("click", () => {
  if (getComputedStyle(mobileNav).visibility === "hidden") {
    // mobileNav.style.display = "block";
    backdrop.style.display = "revert";
    mobileNav.classList.remove("mobile-nav--close");
    mobileNav.classList.add("mobile-nav--open");

    hamBarLast.style.visibility = "hidden";
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
    // mobileNav.style.display = "none";
    mobileNavClose();
  }
});

backdrop.addEventListener("click", () => mobileNavClose());
