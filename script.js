// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme');
  function isDark() {
    if (root.dataset.theme) return root.dataset.theme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  btn.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

// Gentle fade-in on scroll
(function () {
  var items = document.querySelectorAll('.section, .hero');
  if (!('IntersectionObserver' in window)) return;
  items.forEach(function (el) { el.classList.add('reveal'); });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  items.forEach(function (el) { io.observe(el); });
})();
