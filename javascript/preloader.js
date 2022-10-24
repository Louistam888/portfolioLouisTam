window.addEventListener("load", () => {

  const delay = () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
      loader.classList.remove(".loader");
    }
  )}
  setTimeout(delay, 1500);
})