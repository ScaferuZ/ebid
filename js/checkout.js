const tl = gsap.timeline();

tl.from("#check_head", { autoAlpha: 0, y: -50, duration: 0.5 })
  .from("#payment", { autoAlpha: 0, duration: 0.5 })
  .from("#payments", { autoAlpha: 0, duration: 0.5 })
  .from("#shipping", { autoAlpha: 0, duration: 0.5 })
  .from("#shipping_detail", { autoAlpha: 0, duration: 0.5 })
  .from("#ttl_check", { y: 50, autoAlpha: 0, duration: 0.5 })
  .from("#pay_btn", { y: 50, autoAlpha: 0, duration: 0.5 });
