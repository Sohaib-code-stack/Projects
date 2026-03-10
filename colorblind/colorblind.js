const cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });
  document.querySelectorAll('.b, .manifesto-card, .hero').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('big'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
  });
