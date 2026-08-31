/* ==========================================================
   渲染层 —— 把 js/data/ 里的数据渲染成页面内容
   以后改内容只动 data 文件，本文件基本不用改
   ========================================================== */

// 防止特殊字符破坏页面结构（内容里有 < > & 等符号时安全）
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = String(str ?? '');
  return div.innerHTML;
}

/* ---------- 个人信息 ---------- */
function renderProfile() {
  const d = PROFILE;

  // 浏览器标签页标题
  document.title = d.name + ' · 个人作品集 | 嵌入式软件工程师';

  // 导航栏 / 页脚名字
  document.getElementById('brandName').textContent = d.name;
  document.getElementById('footerName').textContent = d.name;

  // Hero 区
  document.getElementById('heroName').textContent = d.name;
  document.getElementById('heroSub').textContent = d.subtitle;
  document.getElementById('heroIntro').textContent = d.intro;

  // Hero 下的快捷链接
  document.getElementById('heroLinks').innerHTML =
    '<a href="https://github.com/' + d.githubUser + '" target="_blank" rel="noopener">GitHub ↗</a>' +
    '<a href="mailto:' + d.email + '">' + escapeHtml(d.email) + '</a>';
}

/* ---------- 联系方式 ---------- */
function renderContact() {
  const d = PROFILE;
  const phoneHref = d.phone.replace(/[^0-9+]/g, ''); // 电话里的横线去掉，用于 tel: 链接
  document.getElementById('contactLinks').innerHTML =
    '<a class="btn btn-primary" href="mailto:' + d.email + '">📧 ' + escapeHtml(d.email) + '</a>' +
    '<a class="btn btn-outline" href="https://github.com/' + d.githubUser + '" target="_blank" rel="noopener">GitHub ↗</a>' +
    '<a class="btn btn-outline" href="tel:' + phoneHref + '">📱 ' + escapeHtml(d.phone) + '</a>';
}

/* ---------- 项目卡片 ---------- */
function renderProjects() {
  const grid = document.getElementById('projectGrid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(function (p) {
    const badge = p.badge
      ? '<span class="project-badge">' + escapeHtml(p.badge) + '</span>'
      : '';

    // 主媒体：优先视频（点击播放、不预加载），否则图片
    let media;
    if (p.video) {
      const poster = p.poster ? ' poster="' + escapeHtml(p.poster) + '"' : '';
      media =
        '<video controls preload="none"' + poster + '>' +
        '<source src="' + escapeHtml(p.video) + '" type="video/mp4">' +
        '您的浏览器不支持视频播放</video>';
    } else if (p.image) {
      media = '<img src="' + escapeHtml(p.image) + '" alt="' + escapeHtml(p.title) + '" onerror="this.style.display=\'none\'">';
    } else {
      media = '<span>演示视频/图片待添加</span>';
    }

    // 附加展示图（小图缩略）
    const thumbs = (p.images && p.images.length)
      ? '<div class="project-thumbs">' +
        p.images.map(function (img) {
          return '<img src="' + escapeHtml(img) + '" alt="' + escapeHtml(p.title) + ' 细节图" loading="lazy">';
        }).join('') +
        '</div>'
      : '';

    const details = p.details
      .map(function (d) {
        return '<li><strong>' + escapeHtml(d.label) + '：</strong>' + escapeHtml(d.text) + '</li>';
      })
      .join('');

    const tags = p.tags.map(function (t) { return '<span>' + escapeHtml(t) + '</span>'; }).join('');

    return (
      '<article class="project-card">' +
      '  <div class="project-media">' + media + badge + '</div>' +
      '  ' + thumbs +
      '  <div class="project-body">' +
      '    <h3>' + escapeHtml(p.title) + '</h3>' +
      '    <p class="project-intro">' + escapeHtml(p.intro) + '</p>' +
      '    <div class="project-tags">' + tags + '</div>' +
      '    <details class="project-details">' +
      '      <summary>背景 / 方案 / 成果</summary>' +
      '      <ul>' + details + '</ul>' +
      '    </details>' +
      '    <div class="project-links">' +
      '      <a href="' + escapeHtml(p.repoUrl) + '" target="_blank" rel="noopener">' + escapeHtml(p.repoText || '源码 ↗') + '</a>' +
      '    </div>' +
      '  </div>' +
      '</article>'
    );
  }).join('');
}

/* ---------- 技能 ---------- */
function renderSkills() {
  const grid = document.getElementById('skillGrid');
  if (!grid) return;

  grid.innerHTML = SKILLS.map(function (s) {
    return (
      '<div class="skill-card">' +
      '  <h3>' + escapeHtml(s.category) + '</h3>' +
      '  <ul>' + s.items.map(function (i) { return '<li>' + escapeHtml(i) + '</li>'; }).join('') + '</ul>' +
      '</div>'
    );
  }).join('');
}

/* ---------- 经历 ---------- */
function renderExperience() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;

  timeline.innerHTML = EXPERIENCE.map(function (e) {
    return (
      '<div class="timeline-item">' +
      '  <div class="timeline-time">' + escapeHtml(e.time) + '</div>' +
      '  <div class="timeline-content">' +
      '    <h3>' + escapeHtml(e.title) + '</h3>' +
      '    <p>' + escapeHtml(e.desc) + '</p>' +
      '  </div>' +
      '</div>'
    );
  }).join('');
}

/* ---------- 统一入口：页面加载时渲染全部 ---------- */
function renderAll() {
  renderProfile();
  renderContact();
  renderProjects();
  renderSkills();
  renderExperience();
}
