window.addEventListener("load", () => {
  document.body.style.overflow = "hidden";

  const delay = () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader--hidden");
    document.body.style.overflow = "visible";
    
    }
  setTimeout(delay, 1500);
})
 document.body.style.overflow = "auto";

//rotating header text based on tutorial by Coding Artist https://www.youtube.com/watch?v=f0qX-lkk8Y8