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