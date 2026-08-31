/* ==========================================================
   个人作品集网站交互脚本
   ========================================================== */

// 0. 渲染页面内容（内容在 js/data/，渲染逻辑在 js/render.js）
renderAll();

// 1. 页脚年份自动更新
document.getElementById('year').textContent = new Date().getFullYear();

// 2. 移动端导航菜单开合
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// 点击菜单里的链接后，在手机上自动收起菜单
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// 3. 滚动时高亮当前所在区块的导航链接
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

function highlightNav() {
  const scrollPos = window.scrollY + 100; // 偏移量，让高亮更符合视觉
  let currentId = '';

  sections.forEach((section) => {
    if (scrollPos >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navAnchors.forEach((a) => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + currentId);
  });
}

window.addEventListener('scroll', highlightNav, { passive: true });
highlightNav();

// 4. 区块进入视口时淡入显示（渐显效果）
const fadeEls = document.querySelectorAll('.section');
fadeEls.forEach((el) => el.classList.add('fade-in'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  fadeEls.forEach((el) => observer.observe(el));
} else {
  // 老浏览器兜底：直接全部显示
  fadeEls.forEach((el) => el.classList.add('visible'));
}
