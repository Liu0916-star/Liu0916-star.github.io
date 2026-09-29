// ===== Translations (edit text here) =====
var I18N = {
  en: {
    "nav.about": "About", "nav.news": "News", "nav.education": "Education",
    "nav.work": "Work", "nav.fun": "Fun Facts", "nav.contact": "Contact",
    "hero.eyebrow": "Data Science · University of Melbourne",
    "hero.title": "Hi! I'm Jintao Liu",
    "hero.lead": "I'm a Bachelor of Science student majoring in Data Science at the University of Melbourne (2025–present), based in Melbourne, Australia.",
    "tag.1": "Social Data Science", "tag.2": "Data for Good", "tag.3": "Blockchain",
    "cta.touch": "Get in touch",
    "news.title": "News",
    "news.empty": "Updates will be posted here soon.",
    "edu.title": "Education",
    "edu.1.name": "University of Melbourne", "edu.1.date": "2025 — Present",
    "edu.1.degree": "Bachelor of Science · Major in Data Science", "edu.1.loc": "Melbourne, Australia",
    "edu.1.badge": "First Class Honours (H1)",
    "edu.2.date": "Jun 2021 — Jun 2024",
    "edu.2.degree": "British Columbia Certificate of Graduation", "edu.2.loc": "High School / Secondary Diploma",
    "edu.2.badge1": "95.3% (Honours)", "edu.2.badge2": "Outstanding Graduate",
    "work.title": "Work & Experience",
    "work.empty": "Projects, internships and research experience will be published here soon.",
    "fun.title": "Fun Facts",
    "fun.1": "Two years into calisthenics — I can do muscle-ups and handstand push-ups, and weighted pull-ups with +45 kg.",
    "contact.title": "Contact",
    "contact.text": "Happy to chat about data, research, or anything in between.",
    "footer.loc": "Melbourne, Australia", "footer.top": "Back to top ↑"
  },
  zh: {
    "nav.about": "关于", "nav.news": "动态", "nav.education": "教育",
    "nav.work": "经历", "nav.fun": "趣事", "nav.contact": "联系",
    "hero.eyebrow": "数据科学 · 墨尔本大学",
    "hero.title": "你好！我是 Jintao Liu",
    "hero.lead": "我目前就读于墨尔本大学理学学士，主修数据科学（2025 年至今），现居澳大利亚墨尔本。",
    "tag.1": "社会数据科学", "tag.2": "数据公益", "tag.3": "区块链",
    "cta.touch": "联系我",
    "news.title": "最新动态",
    "news.empty": "最新动态即将在此更新。",
    "edu.title": "教育背景",
    "edu.1.name": "墨尔本大学", "edu.1.date": "2025 — 至今",
    "edu.1.degree": "理学学士 · 数据科学专业", "edu.1.loc": "澳大利亚 · 墨尔本",
    "edu.1.badge": "一等荣誉成绩（H1）",
    "edu.2.date": "2021.06 — 2024.06",
    "edu.2.degree": "加拿大 BC 省高中毕业证书", "edu.2.loc": "高中文凭",
    "edu.2.badge1": "95.3%（荣誉毕业）", "edu.2.badge2": "优秀毕业生",
    "work.title": "工作与经历",
    "work.empty": "项目、实习与科研经历即将在此更新。",
    "fun.title": "关于我的趣事",
    "fun.1": "练街健两年，能做双力臂和倒立俯卧撑，负重 45kg 引体向上。",
    "contact.title": "联系方式",
    "contact.text": "欢迎交流数据、研究或任何有趣的话题。",
    "footer.loc": "澳大利亚墨尔本", "footer.top": "返回顶部 ↑"
  }
};

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Language toggle
(function () {
  var root = document.documentElement;
  function setLang(l) {
    var d = I18N[l] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (d[k] != null) el.textContent = d[k];
    });
    root.dataset.lang = l;
    root.lang = l === 'zh' ? 'zh-CN' : 'en';
    try { localStorage.setItem('lang', l); } catch (e) {}
  }
  setLang(root.dataset.lang || 'en');
  document.getElementById('lang').addEventListener('click', function () {
    setLang(root.dataset.lang === 'zh' ? 'en' : 'zh');
  });
})();

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
