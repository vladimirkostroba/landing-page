const refs = {
    openModalBtn:document.querySelector('#open-modal'),
    closeModalBtn:document.querySelector('#close-modal'),
    modal:document.querySelector('.js-header__modal'),
    scrollUpBtn:document.querySelector('.scroll-up'),
    }


if (document.documentElement.clientWidth < 1200) {
   refs.openModalBtn.addEventListener('click', openModal);
   refs.closeModalBtn.addEventListener('click', closeModal);
}

refs.scrollUpBtn.addEventListener('click', scrollUp);

// ///

function openModal(e){
        refs.modal.classList.add("open-modal");
        refs.closeModalBtn.classList.remove('closed-btn');    
}

function closeModal(){
    refs.modal.classList.remove("open-modal");
    refs.closeModalBtn.classList.add('closed-btn');
}

// 

function scrollUp(){
    window.scrollTo(0, 0);
}
