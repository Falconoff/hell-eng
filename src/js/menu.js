(() => {
  // burger btn
  const menuBtnRef = document.querySelector("[data-menu-button]");
  // mobile menu window
  const mobileMenuRef = document.querySelector("[data-menu]");
  // close menu btn
  const mobileBtnClose = document.querySelector("[data-menu-close]");
  // all anchors-link
  const mobileMenuAnchor = document.querySelectorAll(".mobile__menu-nav-link");
  // consultation by phone button
  const openModalBtns = document.querySelectorAll('[data-modal-open]');
  // modal window with form
  const modal = document.querySelector('[data-modal]');
  // form close btn
  const closeModalBtn = document.querySelector('[data-modal-close]');

  let menuIsOpen = false;

  // open form
  openModalBtns.forEach(item => {
    item.addEventListener("click", () => {
      modal.classList.toggle("is-hidden");
      document.body.classList.add("modal-open");
    });
  });

  // close form
  closeModalBtn.addEventListener("click", () => {
    modal.classList.toggle("is-hidden");
    if (menuIsOpen !== true) {
      document.body.classList.remove("modal-open");
    };
  });
  
  // close menu-window after click on any mobile-anchor
  mobileMenuAnchor.forEach(item => {
    item.addEventListener("click", () => {
      document.body.classList.remove("modal-open");
      mobileMenuRef.classList.toggle("is-open");
      menuIsOpen = false;
    });
  });

  // open mob menu
  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.add("modal-open");
    menuIsOpen = true;
  });

  // close mob menu
  mobileBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.remove("modal-open");
    menuIsOpen = false;
  });
})();