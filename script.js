const openModalBtn = document.querySelector('[data-modal-target]');

openModalBtn.addEventListener('click', ()=>{
    const modal = document.querySelector(openModalBtn.dataset.modalTarget);
    //openModalBtn.dataset.modalTarget - #modal
    openModal(modal);
    console.log(openModalBtn.dataset.modalTarget)
})

function openModal(modal) {
    modal.classList.add('active');
}