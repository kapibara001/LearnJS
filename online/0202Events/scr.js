/*
const modalWindow = document.getElementById('modal-buy-overlay');
 
function openModal() {    
    modalWindow.classList.remove('hidden');
}
 
function closeModal() {
    modalWindow.classList.add('hidden'); 
}
*/
 
function createModal(id) {
    const modalWindow = document.getElementById(id);
    if(modalWindow) {
        return {
            modalWindow, // modalWindow: modalWindow,
            openModal() {                                       // openModal: function() {...}
                modalWindow.classList.remove('hidden');
            },
            closeModal() {
                modalWindow.classList.add('hidden'); 
            }
        }
    }
}
 
const f = {
    x: 1,
    y: '3'
}
 
const modalWindow = createModal('modal-buy-overlay');
 
const buttonOpenWindow = document.getElementById("open-model-buy");
/**
 * События - это набор браузерных тригеров, которые мы можем использовать
 */
 
/**
 * Указание единственого обработчика событий нажатия на кнопку
 */
// buttonOpenWindow.onclick = openModal;
 
/**
 * addEventListener - Добавить событие
 * addEventListener(
 *      ТИП_СОБЫТИЯ,
 *      ОБРАБОТЧИК
 * )
 */
buttonOpenWindow.addEventListener('click', modalWindow.openModal);
document.getElementById('close-modal-buy').addEventListener('click', modalWindow.closeModal);