function incrementCounter(counterId) {
  let countElement = document.getElementById(counterId).querySelector("p");
  let count = parseInt(countElement.textContent);
  countElement.textContent = count + 1;
}

function decrementCounter(counterId) {
  let countElement = document.getElementById(counterId).querySelector("p");
  let count = parseInt(countElement.textContent);
  countElement.textContent = count - 1;
}

const tl = gsap.timeline();

tl.from("#cart_head", { y: -50, autoAlpha: 0, duration: 0.5 })
  .from("#ps5", {
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  })
  .from("#nb", {
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  })
  .from("#shirt", {
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  })
  .from("#ttl", {
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  })
  .from("#cart_btn", {
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  });
