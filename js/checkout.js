const tl = gsap.timeline();

tl.from("#check_head", { autoAlpha: 0, y: -50, duration: 0.5 })
  .from("#payment", { autoAlpha: 0, duration: 0.5 })
  .from("#payments", { autoAlpha: 0, duration: 0.5 })
  .from("#shipping", { autoAlpha: 0, duration: 0.5 })
  .from("#shipping_detail", { autoAlpha: 0, duration: 0.5 })
  .from("#ttl_check", { y: 50, autoAlpha: 0, duration: 0.5 })
  .from("#pay_btn", { y: 50, autoAlpha: 0, duration: 0.5 });

const btn = document.getElementById("pay_btn");
const menu = document.getElementById("drawer-bottom-example");
const content2 = document.getElementById("content2");
const content1 = document.getElementById("content1");

function openMenu() {
  menu.classList.toggle("hidden");
  // gsap.from("#popup-menu", { y: -50, autoAlpha: 0, duration: 0.5 });
}

function closeMenu() {
  window.location.href = "cart.html";
}

const backdrop = document.getElementById("popup-backdrop");
const backdrop2 = document.getElementById("popup-backdrop2");

function removeContent() {
  content2.remove();
  content1.classList.remove("hidden");
  console.log("awok");
}
