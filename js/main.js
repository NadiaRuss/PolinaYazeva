// //переход между прайсами
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".price__info__btn__el");
  const priceContents = document.querySelectorAll(".price__info__btn__arr");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Удаляем active у всех кнопок
      buttons.forEach((btn) => btn.classList.remove("active"));
      // Добавляем active текущей кнопке
      this.classList.add("active");

      // Получаем target из data-атрибута
      const targetId = this.dataset.target;

      // Скрываем все прайсы
      priceContents.forEach((content) => {
        content.style.display = "none";
      });

      // Показываем выбранный прайс
      document.getElementById(targetId).style.display = "block";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".care__btns__btn");
  const priceContents = document.querySelectorAll(".care__list");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Удаляем active у всех кнопок
      buttons.forEach((btn) => btn.classList.remove("light__btn_active"));
      // Добавляем active текущей кнопке
      this.classList.add("light__btn_active");

      // Получаем target из data-атрибута
      const targetId = this.dataset.target;

      // Скрываем все прайсы
      priceContents.forEach((content) => {
        content.style.display = "none";
      });

      // Показываем выбранный прайс
      document.getElementById(targetId).style.display = "grid";
    });
  });
});

// Фолбэк для старых браузеров по плавному скроллу
if (!("scrollBehavior" in document.documentElement.style)) {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        window.scrollTo({
          top: target.offsetTop - headerHeight,
          behavior: "auto", // Полифил добавит плавность
        });
      }
    });
  });
}

//всплыте ФИ в футере
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".hero__info__eng, .footer__eng"
  );

  if (animatedElements.length === 0) {
    console.log("Элементы для анимации не найдены");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  // Фолбэк для старых браузеров
  if (!("IntersectionObserver" in window)) {
    animatedElements.forEach((element) => {
      element.classList.add("animate");
    });
  }
});

//     document.addEventListener('DOMContentLoaded', () => {
//       const textElement = document.querySelector('.footer__eng');

//       if(!textElement) return;

//       const observer = new IntersectionObserver((entries) => { //Создаёт новый наблюдатель за пересечениями элементов с областью видимости (viewport)

//         if (entries[0].isIntersecting) { // если элемент вошёл в область видимости
//           entries[0].target.classList.add('visible');
//           observer.unobserve(entries[0].target); //останавливает наблюдение после срабатывания,
//         }
//       }, { threshold: 0.1,
//         rootMargin: '0px 0px -100px 0px',

//  });

//   // Начинаем наблюдение
//       observer.observe(textElement);
//     });

//   document.addEventListener('DOMContentLoaded', function() {
//   const engElement = document.querySelector('.hero__info__eng');

//   if (!engElement) {
//     console.warn('Элемент для анимации не найден');
//     return;
//   }

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('animate');
//         observer.unobserve(entry.target);
//       }
//     });
//   }, {
//     threshold: 0.1,
//     rootMargin: '0px 0px -100px 0px'
//   });

//   observer.observe(engElement);

//   // Запасной вариант для старых браузеров
//   if (!('IntersectionObserver' in window)) {
//     engElement.classList.add('animate');
//   }
// });
//попап

//слайдер для секции result
const swiper = new Swiper(".result__swiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,

  navigation: {
    nextEl: ".result__slider__btn",
  },
});
//слайдер для секции result

//слайдер для секции review
const swiper2 = new Swiper(".review__swiper", {
  slidesPerView: 3,
  loop: false,
  initialSlide: 1,
  centeredSlides: true,

  pagination: {
    el: ".review__slider__dots__swiper",
    clickable: true,
  },
});
//слайдер для секции review

//слайдер для секции qual
const swiper3 = new Swiper(".qual__slider__swiper", {
  slidesPerView: 1,
  loop: true,

  navigation: {
    prevEl: ".qual__slider__btn.left",
    nextEl: ".qual__slider__btn.right",
  },
});
//слайдер для секции qual


//popup
$(".open__popup").on("click", function (e) {
  e.preventDefault();

  $(".overlay, .popup__consult").fadeIn();
  $("body").css("overflow", "hidden");
});

$(".popup__close").on("click", function (e) {
  e.preventDefault();

  $(".overlay, .popup__consult").fadeOut();
  $("body").css("overflow", "auto");
});

$(".popup__form--consult").on("submit", function (e) {
  e.preventDefault();

  let inputsValid = false;
  let checkboxValid = false;
  let allValid = false;

  function checkInputs() {
    const inputs = $(".popup-input").not("#comment");

    inputs.each(function () {
      if ($(this).val().trim() === "") {
        inputsValid = false;
      } else {
        inputsValid = true;
      }
    });

    return inputsValid;
  }

  function checkPrivacy() {
    if ($(".accept-ppd-popup").prop("checked")) {
      checkboxValid = true;
      $(".popup__form__check__fake").css("outline", "none");
    } else {
      checkboxValid = false;
      $(".popup__form__check__fake").css("outline", "1px dashed red");
    }
  }

  function checkValidity() {
    if (inputsValid && checkboxValid) {
      allValid = true;
    } else {
      allValid = false;
    }

    console.log(allValid);
  }

  checkInputs();
  checkPrivacy();
  checkValidity();

  if (!allValid) {
    e.preventDefault();

    $(".popup").fadeOut();
    $(".popup__message__title").text(
      "Валидация не пройдена. Необходимо заполнить все поля формы и дать согласие на обработку персональных данных"
    );
    $(".overlay, .popup__message").fadeIn();
    $("body").css("overflow", "hidden");

    $(".popup__close--msg").on("click", function (e) {
      e.preventDefault();

      $(".popup__message").fadeOut();
      $(".popup__consult").fadeIn();
    });
  } else {
    $(".popup__message__text").text(
      "Валидация не пройдена. Необходимо заполнить все поля формы и дать согласие на обработку персональных данных"
    );
    console.log("валидация пройдена");

    //код для отправки формы
  }
});