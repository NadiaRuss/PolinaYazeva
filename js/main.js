// //переход между прайсами
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.price__info__btn__el');
    const priceContents = document.querySelectorAll('.price__info__btn__arr');
            
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Удаляем active у всех кнопок
            buttons.forEach(btn => btn.classList.remove('active'));
            // Добавляем active текущей кнопке
            this.classList.add('active');
                    
            // Получаем target из data-атрибута
            const targetId = this.dataset.target;
                    
            // Скрываем все прайсы
            priceContents.forEach(content => {
                content.style.display = 'none';
            });
                    
            // Показываем выбранный прайс
            document.getElementById(targetId).style.display = 'block';
        });
    });
    });

            document.addEventListener('DOMContentLoaded', function() {
            const buttons = document.querySelectorAll('.care__btns__btn');
            const priceContents = document.querySelectorAll('.care__list');
            
            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    // Удаляем active у всех кнопок
                    buttons.forEach(btn => btn.classList.remove('light__btn_active'));
                    // Добавляем active текущей кнопке
                    this.classList.add('light__btn_active');
                    
                    // Получаем target из data-атрибута
                    const targetId = this.dataset.target;
                    
                    // Скрываем все прайсы
                    priceContents.forEach(content => {
                        content.style.display = 'none';
                    });
                    
                    // Показываем выбранный прайс
                    document.getElementById(targetId).style.display = 'grid';
                });
            });
        });

// Фолбэк для старых браузеров по плавному скроллу
if (!('scrollBehavior' in document.documentElement.style)) {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        window.scrollTo({
          top: target.offsetTop - headerHeight,
          behavior: 'auto' // Полифил добавит плавность
        });
      }
    });
  });
}

//всплыте ФИ в футере
    document.addEventListener('DOMContentLoaded', () => {
      const textElement = document.querySelector('.footer__eng');

      if(!textElement) return;
      
      const observer = new IntersectionObserver((entries) => { //Создаёт новый наблюдатель за пересечениями элементов с областью видимости (viewport)
        
        if (entries[0].isIntersecting) { // если элемент вошёл в область видимости
          entries[0].target.classList.add('visible');
          observer.unobserve(entries[0].target); //останавливает наблюдение после срабатывания, 
        }
      }, { threshold: 0.1 });

  // Начинаем наблюдение
      observer.observe(textElement); 
    });

    //попап


//слайдер для секции result
const swiper = new Swiper('.result__swiper', {
  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: '.result__slider__btn',
  },
});
//слайдер для секции result

//слайдер для секции review
const swiper2 = new Swiper('.review__swiper', {
  slidesPerView: 3,
  loop: false,
  initialSlide: 1,
  centeredSlides: true,

  pagination: {
    el: '.review__slider__dots__swiper',
    clickable: true,
  },
});
//слайдер для секции review

//слайдер для секции qual
const swiper3 = new Swiper('.qual__slider__swiper', {
  slidesPerView: 1,
  loop: true,

  navigation: {
    prevEl: '.qual__slider__btn.left',
    nextEl: '.qual__slider__btn.right',
  },
});
//слайдер для секции qual