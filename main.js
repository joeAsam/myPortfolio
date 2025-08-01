
  const mouseBg = document.querySelector('.mouse-bg');

  document.addEventListener('mousemove', (e) => {
    mouseBg.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });