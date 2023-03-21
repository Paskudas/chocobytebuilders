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