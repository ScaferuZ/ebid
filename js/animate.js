const tl = gsap.timeline();
gsap.fromTo("#logo-splash", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.1 });

// delete first-screen div because the screen was blocking our signup screen
function removeFadeOut(el, speed) {
  let seconds = speed / 1000;
  el.style.transition = "opacity " + seconds + "s ease";

  el.style.opacity = 0;
  setTimeout(() => {
    el.parentNode.removeChild(el);
  }, speed);
}

setTimeout(() => {
  removeFadeOut(document.getElementById("first-screen"), 1000);
}, 1000);

// address

tl.from("#head", { y: -50, opacity: 0, duration: 0.5 })
  .from("#contacts", {
    opacity: 0,
    duration: 0.5,
  })
  .from("#address", {
    opacity: 0,
    duration: 0.5,
  })
  .from("#settings", {
    opacity: 0,
    duration: 0.5,
  })
  .from("#adrs_next", {
    opacity: 0,
    duration: 0.5,
  });

gsap.from("#signup_btn", {
  y: 200,
  opacity: 0,
  duration: 0.5,
});
