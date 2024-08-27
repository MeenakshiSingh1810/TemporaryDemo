document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
  
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const revealOnScroll = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const circleObserver = new IntersectionObserver(revealOnScroll, observerOptions);
    circles.forEach(circle => {
      circleObserver.observe(circle);
    });
  });
  