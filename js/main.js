// //переход между прайсами
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".price__info__btn__el");
  const priceContents = document.querySelectorAll(".price__info__btn__arr");

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
      document.getElementById(targetId).style.display = "block";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollPosition = window.scrollY;
  let isScrollingDown = false;
  let isRendered = false;

  // Функция для анимации элементов прайса
  function animatePriceItems() {
    const activeTab = document.querySelector(
      '.price__info__btn__arr:not([style*="none"])'
    );
    if (!activeTab) return;

    const items = activeTab.querySelectorAll(".price__info__btn__arr__el");

    items.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      item.style.transition = "none";
    });

    setTimeout(() => {
      items.forEach((item, index) => {
        item.style.transition = "opacity 0.5s ease, transform 0.5s ease";

        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, index * 100);
      });
    }, 50);
  }

  // Обработчик скролла
  function handleScroll() {
    const currentScrollPosition = window.scrollY;
    isScrollingDown = currentScrollPosition > lastScrollPosition;
    lastScrollPosition = currentScrollPosition;

    const priceSection = document.querySelector(".price");
    if (!priceSection) return;

    const sectionTop = priceSection.offsetTop;
    const sectionHeight = priceSection.offsetHeight;
    const windowHeight = window.innerHeight;

    // Проверяем, видна ли секция и скроллим вниз
    if (
      isScrollingDown &&
      currentScrollPosition + windowHeight > sectionTop + 100 &&
      currentScrollPosition < sectionTop + sectionHeight - 100 &&
      !isRendered
    ) {
      animatePriceItems();
      isRendered = true;
    } else if (!isScrollingDown) {
      const listElements = document.querySelectorAll(
        ".price__info__btn__arr__el"
      );
      listElements.forEach((el) => {
        el.style.opacity = "1";
      });
      isRendered = true;
    }
  }

  // Наблюдатель за появлением секции при скролле вниз
  if (!isRendered) {
    window.addEventListener("scroll", handleScroll);
  } else if (isRendered) {
    return;
  }

  // Инициализация анимации при загрузке, если секция уже видна
  const priceSection = document.querySelector(".price");
  if (priceSection) {
    const rect = priceSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      animatePriceItems();
    }
  }

  // Обработчик для кнопок переключения вкладок
  const buttons = document.querySelectorAll(".price__info__btn__el");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const targetId = this.dataset.target;
      document.querySelectorAll(".price__info__btn__arr").forEach((content) => {
        content.style.display = "none";
      });
      document.getElementById(targetId).style.display = "block";

      setTimeout(animatePriceItems, 50);
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
    ".hero__eng, .footer__eng"
  );

  if (animatedElements.length === 0) {
    //console.log("Элементы для анимации не найдены");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
          //console.log('Observer triggered', entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: "0px 0px 40% 0px",
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

//слайдер для секции result
const swiper = new Swiper(".result__swiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,

  navigation: {
    nextEl: ".result__slider__btn",
  },

  pagination: {
      el: '.result__dots',
      clickable: true,
  }
});
//слайдер для секции result

//слайдер для секции review
const swiper2 = new Swiper(".review__swiper", {
  slidesPerView: 3,
  loop: true, // Включаем зацикливание
  initialSlide: 1,
  centeredSlides: true,

  pagination: {
    el: ".review__slider__dots__swiper",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: "auto",
      loop: true,
      initialSlide: 0,
      centeredSlides: false,
    },
    500: {
      slidesPerView: "auto",
      loop: true,
      initialSlide: 0,
      centeredSlides: false,
    },
    970: {
      slidesPerView: 3,
      loop: true, // Оставляем зацикливание и для десктопа
      initialSlide: 1,
      centeredSlides: true,
    },
  }
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
    pagination: {
    el: ".qual__slider__dots__swiper",
    clickable: true,
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

    //console.log(allValid);
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
    //console.log("валидация пройдена");

    //код для отправки формы
  }
});

//куки
document.addEventListener("DOMContentLoaded", function () {
  const cookiePopup = document.querySelector(".popup--cookie");
  const overlay = document.querySelector(".overlay");
  const cookieCloseBtn = cookiePopup.querySelector(".popup__close__cook");
  const cookieAcceptBtn = cookiePopup.querySelector(".cookie-btn");
  // debugger
  // Проверяем, есть ли запись в localStorage
  const cookieConsent = localStorage.getItem("cookieConsent");

  // Если записи нет или значение false - показываем попап через 5 сек
  // Пользователь ранее закрывал крестиком (значение 'closed')
  if (cookieConsent === null || cookieConsent === "closed") {
    setTimeout(showCookiePopup, 5000);
    //console.log("false");
  }

  // Функция показа попапа
  function showCookiePopup() {
    cookiePopup.style.display = "block";
    overlay.style.display = "block";
  }

  // Функция скрытия попапа
  function hideCookiePopup() {
    cookiePopup.style.display = "none";
    overlay.style.display = "none";
  }

  // При клике на крестик
  cookieCloseBtn.addEventListener("click", function () {
    hideCookiePopup();
    localStorage.setItem("cookieConsent", "closed");
  });

  // При клике на кнопку "принимаю"
  cookieAcceptBtn.addEventListener("click", function () {
    hideCookiePopup();
    localStorage.setItem("cookieConsent", "true");
    // Устанавливаем на год
    const oneYear = new Date(
      new Date().setFullYear(new Date().getFullYear() + 1)
    );
    localStorage.setItem("cookieExpire", oneYear);
    //console.log("trye");
    //console.log(oneYear);
  });
  if (cookieConsent === "true") {
    const expireDate = localStorage.getItem("cookieExpire");
    if (expireDate && new Date(expireDate) < new Date()) {
      // Срок истек - удаляем записи
      localStorage.removeItem("cookieConsent");
      localStorage.removeItem("cookieExpire");
    }
  }
});

// меню для хэдера
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  let isMenuOpen = false;

  if (menuToggle && mobileMenu) {
    // Переключение меню
    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      isMenuOpen = !isMenuOpen;

      // Переключаем классы
      menuToggle.classList.toggle("active", isMenuOpen);
      mobileMenu.classList.toggle("active", isMenuOpen);
    });

    // Закрытие при клике вне меню
    document.addEventListener("click", function (e) {
      if (
        isMenuOpen &&
        !mobileMenu.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        closeMenu();
      }
    });

    // Закрытие при скролле
    window.addEventListener("scroll", function () {
      if (isMenuOpen) {
        closeMenu();
      }
    });

    function closeMenu() {
      isMenuOpen = false;
      menuToggle.classList.remove("active");
      mobileMenu.classList.remove("active");
    }
  }
});
// меню для хэдера

//ymaps
var placemarkCoords = [56.106836, 92.905662];

ymaps.ready(function () {
  var map = new ymaps.Map("yandex-map", {
    center: placemarkCoords, // По умолчанию — метка по центру
    zoom: 16,
    controls: [] // Опционально: убрать лишние элементы управления
  });

  var placemark = new ymaps.Placemark(
    placemarkCoords,
    { hintContent: "проспект 60 лет Образования СССР, 60" },
    { preset: "islands#redDotIcon" }
  );
  map.geoObjects.add(placemark);

  function adjustMapCenter() {
    var newLongitude;
    var newLatitude = placemarkCoords[0]; // Исходная широта

    if (window.innerWidth > 900) {
      // Смещение по долготе на 10% ширины карты
      newLongitude = placemarkCoords[1] - (map.getBounds()[1][1] - map.getBounds()[0][1]) * 0.1;
      map.setCenter([newLatitude, newLongitude]);
    } else if (window.innerWidth > 500) {
      // Смещение по долготе на 30% ширины карты
      newLongitude = placemarkCoords[1] - (map.getBounds()[1][1] - map.getBounds()[0][1]) * 0.3;
      map.setCenter([newLatitude, newLongitude]);
    } else {
      // Для экранов <500px: смещение по долготе на 30% и по широте вверх на 10%
      newLongitude = placemarkCoords[1] - (map.getBounds()[1][1] - map.getBounds()[0][1]) * 0.1;
      var bounds = map.getBounds();
      var mapHeight = bounds[1][0] - bounds[0][0]; // Высота карты в градусах
      newLatitude = placemarkCoords[0] + mapHeight * (-0.3); // Смещаем вверх на 10% высоты
      map.setCenter([newLatitude, newLongitude]);
    }
  }

  adjustMapCenter();
  window.addEventListener('resize', adjustMapCenter);
  map.behaviors.disable('scrollZoom');
});
//ymaps