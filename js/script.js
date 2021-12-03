let isChecked = false;

const num = document.querySelector('.js-num');
const view = document.querySelector('.js-views');
const slider = document.querySelector('.js-slider');
const checkbox = document.querySelector('.js-checkbox');

const numsArr = ['8', '12', '16', '24', '36'];
const viewsArr = ['10K', '50K', '100K', '500k', '1M'];

checkbox.addEventListener('change', (e) => {
  e.target.checked ? (isChecked = true) : (isChecked = false);
});

console.log(isChecked);

slider.addEventListener('input', (e) => {
  const { value, min, max } = e.target;
  const percentage = ((value - min) / (max - min)) * 100;
  const color = `linear-gradient(90deg, 
    hsl(174, 76%, 80%) ${percentage}%, 
    hsl(226, 68%, 95%) ${percentage}%)`;

  slider.style.background = color;
  num.textContent = isChecked
    ? `$${numsArr[value - 1] - numsArr[value - 1] * 0.25}.00`
    : `$${numsArr[value - 1]}.00`;
  view.textContent = `${viewsArr[value - 1]} pageviews`;
});

window.onload = function () {
  slider.value = 3;
  checkbox.checked = false;
};
