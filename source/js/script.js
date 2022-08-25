const body = document.querySelector('.page__body');
const header = document.querySelector('.page-header');
const navToggle = document.querySelector('.page-header__nav-toggle');
const headerOffset = header.offsetTop;
const rates = document.querySelector('.rates');

if (body) {
  body.classList.remove(`page__body--no-js`);
}

if (header) {

  navToggle.addEventListener(`click`, () => {
    header.classList.toggle(`page-header--opened-menu`);
  });

  window.addEventListener(`scroll`, () => {
    if (window.pageYOffset > 0) {
      header.classList.add(`page-header--scroll`);
    }
    else {
      header.classList.remove(`page-header--scroll`);
    }
  });
}

if (rates) {
  const ratesOpen = document.querySelector(".business-rates__open");
  const ratesClose = document.querySelector(".business-rates__close");

  ratesOpen.addEventListener("click", (evt) => {
    evt.preventDefault();
    rates.classList.toggle("rates--modal-open");
  });

  ratesClose.addEventListener("click", () => {
    rates.classList.toggle("rates--modal-open");
  });
}
