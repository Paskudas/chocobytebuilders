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





// (() => {
//     const refs = {
//       openSubscribeBtn: document.querySelector("[data-subscribe-open]"),
//       closeSubscribeBtn: document.querySelector("[data-subscribe-close]"),
//       subscribe: document.querySelector("[data-subscribe]"),
//     };
  
//     refs.openSubscribeBtn.addEventListener("click", toggleSubscribe);
//     refs.closeSubscribeBtn.addEventListener("click", toggleSubscribe);
  
//     function toggleModal() {
//       refs.subscribe.classList.toggle("is-hidden");
//     }
//   })();