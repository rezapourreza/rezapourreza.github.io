(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  function updateTheme(theme) {
    root.dataset.theme = theme;
    const next = theme === 'dark' ? 'light' : 'dark';
    themeButton?.setAttribute('aria-label', `Switch to ${next} theme`);
    themeButton?.setAttribute('title', `Switch to ${next} theme`);
  }
  let saved;
  try { saved = localStorage.getItem('reza-theme'); } catch {}
  updateTheme(saved === 'dark' ? 'dark' : 'light');
  if (themeButton) {
    themeButton.hidden = false;
    themeButton.addEventListener('click', () => {
      const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      updateTheme(theme);
      try { localStorage.setItem('reza-theme', theme); } catch {}
    });
  }
  const dialog = document.querySelector('.figure-dialog');
  if (!dialog || !dialog.showModal) return;
  document.querySelectorAll('.figure-link').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      dialog.querySelector('.dialog-image').src = link.href;
      dialog.querySelector('.dialog-image').alt = link.querySelector('img').alt;
      dialog.querySelector('#figure-title').textContent = link.dataset.title;
      dialog.querySelector('.figure-source').href = link.dataset.paper;
      dialog.querySelector('.figure-detail').textContent = link.dataset.caption;
      dialog.showModal();
    });
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
})();
