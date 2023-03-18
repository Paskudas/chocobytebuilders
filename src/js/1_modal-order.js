// Відкриваємо перше модальне вікно Order
var modalOrder = document.getElementById('modal-order');
var btnOrder = document.getElementById('open-modal-order');
var spanOrder = document.getElementsByClassName('close')[0];

btnOrder.onclick = function () {
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


// Відкриваємо перше модальне вікно Review
var modalReview = document.getElementById('modal-review');
var btnReview = document.getElementById('open-modal-review');
var spanReview = document.getElementsByClassName('close')[2];

btnReview.onclick = function () {
  modalReview.style.display = 'block';
};

// Закриваємо перше модальне вікно при натисканні на "x"
spanReview.onclick = function () {
  modalReview.style.display = 'none';
};

// Відкриваємо друге модальне вікно feedback при натисканні на кнопку в першому модальному вікні
var modalFeedback = document.getElementById('modal-feedback');
var btnFeedback = document.getElementById('open-modal-feedback');
var spanFeedback = document.getElementsByClassName('close')[3];

btnFeedback.onclick = function () {
  modalReview.style.display = 'none';
  modalFeedback.style.display = 'block';
};

// Закриваємо друге модальне вікно при натисканні на "x"
spanFeedback.onclick = function () {
  modalFeedback.style.display = 'none';
};
