const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button__next',
    prevEl: '.swiper-button__prev',
  },
  effect: 'coverflow',
  longSwipesMs: "50",
  longSwipesRatio: "0",
});