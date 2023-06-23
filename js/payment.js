const tl = gsap.timeline();
tl.from("#payment_head", { y: -50, autoAlpha: 0, duration: 0.5 })
  .from("#payment_1", { opacity: 0, duration: 0.5 })
  .from("#payment_2", {
    opacity: 0,
    duration: 0.5,
  })
  .from("#payment_save", { opacity: 0, duration: 0.5 });
