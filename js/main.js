//переход между прайсами
const faceButton = document.getElementById('face');
const shapeButton = document.getElementById('shape');
const faceList = document.querySelector('.price__info__btn__arr')
const shapeList = document.querySelector('.price__info__btn__arr__shap')

// const faceList = document.getElementById('face')
// const shapeList = document.getElementById('shape')

// const faceData = [
//     {num: '01', info: 'Чистка лица', price: '2 500 ₽'},
// ]

// const shapeData = [
//     // {num: '01', info: 'Чистка лица', price: '2 500 ₽'},
//     { num: '02', info: 'Пиллинг', price: '2 000 ₽' },
// ]

// function updateList(list, data) {
//     list.innerHtml = '';
//     data.forEach(element => {
//         const el = document.createElement('div');
//         el.classList.add('price__info__btn__arr__el')
//         el.innerHTML = `
//                 <span class="price__info__btn__arr__el__num">${element.num}</span>
//                 <p class="price__info__btn__arr__el__info">${element.info}</p>
//                 <div class="price__info__btn__arr__el__item">
//                   <span class="price__info__btn__arr__el__item__price">Цена:</span>
//                   <p class="price__info__btn__arr__el__item__p">${element.price}</p>
//                 </div>
//                 <button class="broun__btn">Записаться</button>
//         `
//         list.appendChild(el)
//     });
// }
function toggleActive(activeButton, inactiveButton) {
    activeButton.classList.toggle('active')
    inactiveButton.classList.toggle('active')
}

function showList(showLists, hideList){
    showLists.style.display = showLists.style.display === 'flex' ? 'none' : 'flex';
    // console.log("меняем 1 список")
    hideList.style.display = hideList.style.display === 'flex' ? 'none' : 'flex';
    // console.log("меняем 2 список")

}

faceButton.addEventListener('click', () => {
    toggleActive(faceButton, shapeButton)
    showList(faceList, shapeList)
        // console.log("сработала функ 1 кнопки")

    // updateList(faceList, faceData);
})

shapeButton.addEventListener('click', () => {
    toggleActive(faceButton, shapeButton)
    showList(faceList, shapeList)
    // console.log("сработала функ 2 кнопки")

    // updateList(shapeList, shapeData);
})

// updateList(faceList, faceData);