// Відкриваємо перше модальне вікно Order
var modalMobile = document.getElementById('modal-mobile');
var btnMobile = document.getElementById('open-modal-mobile');
var btnMobileClose = document.getElementById('close-modal-mobile');

btnMobile.onclick = function () {
  modalMobile.style.display = 'block';
};

// Закриваємо перше модальне вікно при натисканні на "x"
btnMobileClose.onclick = function () {
    modalMobile.style.display = 'none';
  };

