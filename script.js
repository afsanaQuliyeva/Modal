const openModalBtn = document.querySelector('[data-modal-target]');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.modal-close-btn');

openModalBtn.addEventListener('click', ()=>{
    const modal = document.querySelector(openModalBtn.dataset.modalTarget);
    //openModalBtn.dataset.modalTarget - #modal
    openModal(modal);
    console.log(openModalBtn.dataset.modalTarget)
})

closeModalBtn.addEventListener('click', () => {
    const modal = closeModalBtn.closest('.modal');
    closeModal(modal);
})


overlay.addEventListener('click', () => {
    const modal = document.querySelector('.modal.active');
    closeModal(modal);
})

/*Functions*/

function openModal(modal) {
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    modal.classList.remove('active')
    overlay.classList.remove('active');
}
