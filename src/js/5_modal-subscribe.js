// Відкриваємо перше модальне вікно Subscribe
var modalSubscribe = document.getElementById('modal-subscribe');
var btnSubscribe = document.getElementById('open-modal-subscribe');
var spanSubscribe = document.getElementsByClassName('close')[4];

btnSubscribe.onclick = function () {
  modalSubscribe.style.display = 'block';
};

// Закриваємо перше модальне вікно при натисканні на "x"
spanSubscribe.onclick = function () {
  modalSubscribe.style.display = 'none';
};



