const tl = gsap.timeline();

tl.from("#main_head", { y: -50, autoAlpha: 0, duration: 0.5 })
  .from("#main_menu", { y: 50, autoAlpha: 0, duration: 0.5 })
  .from("#main_category", { x: 100, autoAlpha: 0, duration: 0.5 })
  .from("#main_trending", { autoAlpha: 0, duration: 0.5 })
  .from("#main_frow", { y: 100, autoAlpha: 0, duration: 0.5 })
  .from("#main_srow", { y: 100, autoAlpha: 0, duration: 0.5 });
