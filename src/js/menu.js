(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");
  const mobileMenuAnchor = document.querySelectorAll(".mobile__menu-nav-link");
  
  // for close menu-window after click on any mobile-anchor
  mobileMenuAnchor.forEach(item => {
    item.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
    });
  });

  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

  mobileBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });
})();