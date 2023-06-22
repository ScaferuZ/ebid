// const route = (element) => {
//   element = element || window.element;
//   element.preventDefault();
//   window.history.pushState({}, element.target.href);
//   handleLocation();
// };

// const routes = {
//   "/": "/pages/signup.html",
// };

// const handleLocation = async () => {
//   const path = window.location.pathname;
//   const route = routes[path];
//   const html = await fetch(route).then((data) => data.text());
//   document.getElementById("main-page").innerHTML = html;
// };

// window.onpopstate = handleLocation;
// window.route = route;

// handleLocation();
