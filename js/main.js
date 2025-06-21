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