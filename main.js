
  const mouseBg = document.querySelector('.mouse-bg');

  document.addEventListener('mousemove', (e) => {
    mouseBg.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });


  const navItems = document.getElementById("nav-items");
  const sideNav = document.getElementById("side-nav");
  const hamburger = document.getElementById("hamburger");

  hamburger.addEventListener("click", () => {
    navItems.classList.toggle("active");
    sideNav.classList.toggle("active");
  })