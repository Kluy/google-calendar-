const modalElem = document.querySelector('.modal');
const modalContentElem = document.querySelector('.modal__content');

// опишите ф-ции openModal и closeModal
// модальное окно работает похожим на попап образом
// отличие в том, что попап отображается в месте клика, а модальное окно - по центру экрана

export function openModal () {
    console.log(modalElem.classList);
    modalElem.classList.toggle('hidden');

}

export function closeModal () {
    modalElem.classList.toggle('hidden');
}