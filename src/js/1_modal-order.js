// Відкриваємо перше модальне вікно Order
var modalOrder = document.getElementById('modal-order');
var btnOrder = document.getElementById('open-modal-order');
var btnTopOrder = document.getElementById('open-modal-top-order');
var spanOrder = document.getElementsByClassName('close')[0];

btnOrder.onclick = function () {
  modalOrder.style.display = 'block';
};

btnTopOrder.onclick = function () {
  modalOrder.style.display = 'block';
};

// Закриваємо перше модальне вікно при натисканні на "x"
spanOrder.onclick = function () {
  modalOrder.style.display = 'none';
};

// Відкриваємо друге модальне вікно thanks при натисканні на кнопку в першому модальному вікні
var modalThanks = document.getElementById('modal-thanks');
var btnThanks = document.getElementById('open-modal-thanks');
var spanThanks = document.getElementsByClassName('close')[1];

btnThanks.onclick = function () {
  modalOrder.style.display = 'none';
  modalThanks.style.display = 'block';
};

// Закриваємо друге модальне вікно при натисканні на "x"
spanThanks.onclick = function () {
  modalThanks.style.display = 'none';
};





