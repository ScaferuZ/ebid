const tl = gsap.timeline();

tl.from("#user_head", { y: -50, autoAlpha: 0, duration: 0.5 })
  .from("#user_menu", { y: 50, autoAlpha: 0, duration: 0.5 })
  .from("#user_pic", { y: 100, autoAlpha: 0, duration: 0.5 })
  .from("#user_card", { autoAlpha: 0, duration: 0.5 });
