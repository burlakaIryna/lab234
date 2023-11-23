

const navBtn = document.querySelectorAll('.shop-nav-btn');
const list = document.querySelectorAll('.list-contents');

navBtn.forEach(function (element) {
  element.addEventListener("click", open);
})

function open(evt) {
  const navTarget = evt.currentTarget;
  const button = navTarget.dataset.button;

  navBtn.forEach(function (item) {
    item.classList.remove('shop-nav-btn--active')
  })

  navTarget.classList.add('shop-nav-btn--active');

  list.forEach(function (item) {
    item.classList.remove('list-contents--active');
  })

  document.querySelector(`#${button}`).classList.add('list-contents--active');
};


// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});