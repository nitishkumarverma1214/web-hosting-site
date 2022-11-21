// const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const planButtons = document.querySelectorAll(".plan .button");
const modalNoButton = modal.querySelector(".modal__action--negative");

const closeModal = () => {
  backdrop.style.display = "none";
  modal.style.display = "none";
};

planButtons.forEach((planButton) => {
  planButton.addEventListener("click", () => {
    backdrop.style.display = "revert";
    modal.style.display = "revert";
  });
});

backdrop.addEventListener("click", closeModal);
modalNoButton.addEventListener("click", closeModal);
