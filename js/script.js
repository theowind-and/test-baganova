const swiper = new Swiper('.reviews__swiper', {
  slidesPerView: 2.7,
  loop: true,
  spaceBetween: 20,
  centeredSlides: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    2080: {
      slidesPerView: 3,
      navigation: {
        nextEl: false,
        prevEl: false,
      },
      allowTouchMove: false,
    },
    1180: {
      slidesPerView: 2.7,
    },
    768: {
      slidesPerView: 1.4,
    },
    300: {
      slidesPerView: 1.2,
    }
  }
});

const swiperBtns = {
  prevLabel: document.querySelector('.reviews__label-prev'),
  nextLabel: document.querySelector('.reviews__label-next'),
  prevBtn: document.querySelector('.swiper-button-prev'),
  nextBtn: document.querySelector('.swiper-button-next')
}

swiperBtns.prevLabel.addEventListener('click', () => {
  swiperBtns.prevBtn.click();
})
swiperBtns.nextLabel.addEventListener('click', () => {
  swiperBtns.nextBtn.click();
})

// Плавный скролл
function smoothScroll(event) {
  event.preventDefault(); // Предотвращаем стандартное действие браузера
  const targetId = event.target.getAttribute('href'); // Получаем идентификатор целевого элемента
  const targetElement = document.querySelector(targetId); // Находим целевой элемент по идентификатору
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth' // Указываем, что скролл должен быть плавным
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const anchors = document.querySelectorAll('a[href^="#"]'); // Выбираем все якорные ссылки
  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', smoothScroll); // Добавляем обработчик события
  });
});

// Успешный заказ

const message = document.querySelector('.message');
const closeMessage = document.querySelector('.message__close');

closeMessage.addEventListener('click', () => {
  message.classList.remove('message_active');
})

message.addEventListener('click', (e) => {
  if (e.target === message) {
    message.classList.remove('message_active');
  }
})

// Меню 

function bodyHiden() {
  document.querySelector('body').style.overflow = 'hidden';
}

function bodyVisible() {
  document.querySelector('body').style.overflow = 'visible';
}

const burger = document.querySelector('.burger');
const hedaer = document.querySelector('.header');
const menu = document.querySelector('.nav__modal');

burger.addEventListener('click', () => {
  if (menu.classList.contains('nav__modal_active')) {
    hedaer.classList.remove('header_menu');
    menu.classList.remove('nav__modal_active');
    burger.classList.remove('burger_active');
    bodyVisible();
  } else {
    hedaer.classList.add('header_menu');
    menu.classList.add('nav__modal_active');
    burger.classList.add('burger_active');
    bodyHiden();
  }
})

const menuItems = document.querySelectorAll('.nav__modal__lists .menu-item');
menuItems.forEach(item =>{
  item.addEventListener('click', () =>{
    hedaer.classList.remove('header_menu');
    menu.classList.remove('nav__modal_active');
    burger.classList.remove('burger_active');
    bodyVisible();
  })
})