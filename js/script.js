let isChecked = false;

const btn = document.querySelector('.js-btn');
const num = document.querySelector('.js-num');
const view = document.querySelector('.js-views');
const slider = document.querySelector('.js-slider');
const checkbox = document.querySelector('.js-checkbox');

const numsArr = ['8', '12', '16', '24', '36'];
const viewsArr = ['10K', '50K', '100K', '500k', '1M'];

// Helpers
const countDiscount = (num) => num - num * 0.25;

const validateChecked = (num) =>
  isChecked ? `$${countDiscount(num)}.00` : `$${num}.00`;

// Callback functions
const applyDiscount = function (e) {
  const { checked } = e.target;
  const number = +num.textContent.slice(1);

  if (checked) {
    isChecked = true;
    num.textContent = `$${countDiscount(number)}.00`;
  } else {
    isChecked = false;
    num.textContent = `$${numsArr[slider.value - 1]}.00`;
  }
};

const setSliderBg = function (e) {
  const { value, min, max } = e.target;
  const bgPercentage = ((value - min) / (max - min)) * 100;
  const color = `linear-gradient(90deg, 
  hsl(174, 76%, 80%) ${bgPercentage}%, 
  hsl(226, 68%, 95%) ${bgPercentage}%)`;

  slider.style.background = color;
};

const setNumbers = function (e) {
  const { value } = e.target;
  const currNumValue = numsArr[value - 1];
  const currViewValue = viewsArr[value - 1];

  num.textContent = validateChecked(currNumValue);
  view.textContent = `${currViewValue} pageviews`;
};

const reset = function () {
  const color = `linear-gradient(90deg, 
        hsl(174, 76%, 80%) 50%, 
        hsl(226, 68%, 95%) 50%)`;

  slider.value = 3;
  checkbox.checked = false;
  slider.style.background = color;
};

// Events
slider.addEventListener('input', (e) => {
  setNumbers(e);
  setSliderBg(e);
});
checkbox.addEventListener('click', applyDiscount);
btn.addEventListener('click', reset);
window.addEventListener('load', reset);
