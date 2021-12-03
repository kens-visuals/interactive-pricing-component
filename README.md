# Frontend Mentor - Interactive Pricing Component Solution

This is a solution to the [Interactive Pricing Component Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![screenshot](./images/screenshot.png)

### Links

- Live Site URL: [https://kens-visuals.github.io/interactive-pricing-component/](https://kens-visuals.github.io/interactive-pricing-component/)
- Solution URL: [TO_BE_UPDATED](TO_BE_UPDATED)

## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- CSS Flexbox
- CSS Grid
- Vanilla JS
- Mobile-first workflow

### What I learned

Although it looks a small project, it had a couple of challenges. Perhaps the biggest challenge was designing the slider. Not because it had a some complex design, but the browser support for these types of things is not perfect. Besides Firefox, there's no other browser that has a support for this `::-moz-range-progress` pseudo-element. Otherwise, it would've been possible to design a slider without any JS whatsoever. However, I've learned a lot in this project, especially about sliders and toggle buttons. I feel like by now all browsers should've supported these types of things even without prefixes. I'm glad that at least the range thumb I was able to design with only CSS, although prefixes were present here as well. The code below is from this project, but any by tweaking a couple of things you can easily customize it to your needs. Just don't forget to add the same design for `::-webkit-slider-thumb` and `::-ms-thumb`.

```css
&::-moz-range-thumb {
  width: 4rem;
  height: 4rem;
  background: {
    color: $color-cyan--dark;
    image: url("../images/icon-slider.svg");
    repeat: no-repeat;
    position: center;
  }
  border: 0;
  border-radius: 50%;
  box-shadow: 0 15px 15px 5px $color-cyan;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: all 0.3s ease-in-out;

  &:active {
    background-color: $color-cyan;
    box-shadow: 0 5px 10px 5px $color-cyan;
    cursor: grabbing;
  }
}
```

### Continued development

I hope other browsers will also join Firefox and start to implement such things, so that developers can code those small things faster and easier without coming up with workarounds.

### Useful resources

While searching for other options of range slider, that would work on every web browser, I found this cool website [freefrontend.com](https://freefrontend.com/) which has a pretty big collection of code snippets for small things like the ones below.

- [Range Sliders](https://freefrontend.com/css-range-sliders/)
- [Toggle Buttons](https://freefrontend.com/css-toggle-switches/)

## Author

- Frontend Mentor - [@kens-visuals](https://www.frontendmentor.io/profile/kens-visuals)
- Codewars - [@kens_visuals](https://www.codewars.com/users/kens_visuals)
- CodePen - [@kens-visuals](https://codepen.io/kens-visuals)
