(() => {
  const textDots = document.querySelector("[data-dots]");
  const moreText = document.querySelector("[data-more]");
  const readMoreBtn = document.querySelector("[data-read-more-btn]");

  readMoreBtn.addEventListener("click", () => {
    moreText.classList.toggle("is-hidden");
    textDots.classList.toggle("is-hidden");

  if (textDots.className !== "is-hidden") {
    readMoreBtn.innerHTML = "Read more"; 
  } else {
    readMoreBtn.innerHTML = "Hide"; 
  }
  });
})();