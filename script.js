// Правовой анализ FANLINE — общий скрипт

document.addEventListener('DOMContentLoaded', () => {
  highlightCurrentPage();
});

function highlightCurrentPage() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
    const href = link.getAttribute('href');
    link.classList.remove('active');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
}
