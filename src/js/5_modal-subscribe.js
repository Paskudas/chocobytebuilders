
(() => {
    const refs = {
      openSubscribeBtn: document.querySelector("[data-subscribe-open]"),
      closeSubscribeBtn: document.querySelector("[data-subscribe-close]"),
      subscribe: document.querySelector("[data-subscribe]"),
    };
  
    refs.openSubscribeBtn.addEventListener("click", toggleSubscribe);
    refs.closeSubscribeBtn.addEventListener("click", toggleSubscribe);
  
    function toggleModal() {
      refs.subscribe.classList.toggle("is-hidden");
    }
  })();