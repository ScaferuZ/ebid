const tl = gsap.timeline();

tl.from("#orders_head", { y: -50, autoAlpha: 0, duration: 0.5 })
  .from("#orders_menu", { y: 50, autoAlpha: 0, duration: 0.5 })
  .from("#card1", { y: -50, autoAlpha: 0, duration: 0.5 })
  .from("#card2", { y: -50, autoAlpha: 0, duration: 0.5 })
  .from("#card3", { y: -50, autoAlpha: 0, duration: 0.5 });
