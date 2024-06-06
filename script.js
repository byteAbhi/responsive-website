const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".btn");
const ishowButton = document.querySelector(".i-btn");
const closeButton = document.querySelector("dialog .close-btn");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default link behavior
  dialog.showModal();
});

ishowButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default link behavior
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
