const checkbox = document.querySelector(".js-checkbox");
const prices = document.querySelectorAll(".js-price");

const annually = [199.99, 249.99, 399.99];
const monthly = [19.99, 24.99, 39.99];

let checked = false;

const changePrice = function () {
  if (checked) {
    prices.forEach(
      (el, i) =>
        (el.innerHTML = `<span class="pricing__card-price--span">&dollar;</span>${annually[i]}`)
    );
    checked = false;
  } else {
    prices.forEach(
      (el, i) =>
        (el.innerHTML = `<span class="pricing__card-price--span">&dollar;</span>${monthly[i]}`)
    );
    checked = true;
  }
};

checkbox.addEventListener("click", changePrice);
window.addEventListener("load", () => {
  checkbox.checked = false;
});
