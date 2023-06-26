function incrementCounter(counterId) {
  let countElement = document.getElementById(counterId).querySelector("p");
  let count = parseInt(countElement.textContent);
  countElement.textContent = count + 1;
}

function decrementCounter(counterId) {
  let countElement = document.getElementById(counterId).querySelector("p");
  let count = parseInt(countElement.textContent);
  if (count > 0) {
    countElement.textContent = count - 1;
  }
}

function showBadge() {
  let countElement = document.getElementById("data1");
  let count = parseInt(countElement.textContent);
  let e = document.getElementById("badge");
  if (count > 0) {
    e.classList.remove("hidden");
  }
}

const tl = gsap.timeline();

tl.from("#product_head", { y: -50, autoAlpha: 0, duration: 0.5 })
  .from("#product_shirt", { autoAlpha: 0, duration: 0.5 })
  .from("#product_title", { autoAlpha: 0, duration: 0.5 })
  .from("#product_detail", { autoAlpha: 0, duration: 0.5 })
  .from("#product_btn", { y: 50, autoAlpha: 0, duration: 0.5 });
