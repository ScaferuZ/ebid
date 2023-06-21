const tl = gsap.timeline();
tl.fromTo("#logo-splash", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.1 });

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
