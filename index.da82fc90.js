!function(){var e=refs={openModalBtn:document.querySelector("#open-modal"),closeModalBtn:document.querySelector("#close-modal"),modal:document.querySelector(".js-header__modal"),scrollUpBtn:document.querySelector(".scroll-up")};document.documentElement.clientWidth<1200&&(e.openModalBtn.addEventListener("click",(function(o){document.documentElement.clientWidth<1200&&(e.modal.classList.add("open-modal"),e.closeModalBtn.classList.remove("closed-btn"))})),e.closeModalBtn.addEventListener("click",(function(){e.modal.classList.remove("open-modal"),e.closeModalBtn.classList.add("closed-btn")}))),e.scrollUpBtn.addEventListener("click",(function(){window.scrollTo(0,0)}))}();
//# sourceMappingURL=index.da82fc90.js.map
