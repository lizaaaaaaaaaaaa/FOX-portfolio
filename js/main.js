const burger = document.querySelector('.nav__btn');
const menuMobile = document.querySelector('.nav__list');

burger.addEventListener('click', ()=> {
	menuMobile.classList.toggle('menu--open');
});


const tabItem = document.querySelectorAll('.portfolio__nav-tab');
const tabContent = document.querySelectorAll('.portfolio__slider');


tabItem.forEach(function (element) {
  element.addEventListener('click', open);
})

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  //забирати клас щоб змінити колір тексту на звичайний
  tabItem.forEach(function(item){
    item.classList.remove('portfolio__nav-tab--active');
  });

  // щоб змінити колір тексту на синій тлбто активний елемент
  tabTarget.classList.add('portfolio__nav-tab--active');

  tabContent.forEach(function(item) {
    item.classList.remove('portfolio__slider--active')
  });

  document.querySelector(`#${button}`).classList.add('portfolio__slider--active');
}

const swiperOne = new Swiper('.portfolio__slider', {
	// loop: true,
	slidesPerView: "auto",
  	spaceBetween: 25,

	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
    	nextEl: '.swiper-button-next',
    	prevEl: '.swiper-button-prev',
  },
});

const swiperTwo = new Swiper('.testimonial__slider', {
	init: false,
	spaceBetween: 10,

	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
    	nextEl: '.swiper-button-next',
    	prevEl: '.swiper-button-prev',
  	},
  	breakpoints: {
		1060: {
			spaceBetween: 0,
		},
	}
});

swiperTwo.on("slideChange afterInit init", function () {
    let currentSlide = swiperTwo.activeIndex + 1;
    document.querySelector('.testimonial__slider-counter').innerHTML = `
    <span class="counter__current">${'0' + currentSlide}</span>/<span class="counter__total">0${+ swiperTwo.slides.length}</span>`;
});

swiperTwo.init();