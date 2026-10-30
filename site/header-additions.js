(function () {
  'use strict';
  const header = document.getElementById('header-hex');
  const original = document.getElementById('category-nav');
  const buttons = header.querySelectorAll('[data-header-category]');

  function syncSelection() {
    const selected = original.querySelector('[aria-pressed="true"]')?.dataset.category;
    buttons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.headerCategory === selected));
    });
  }

  header.addEventListener('click', function (event) {
    const button = event.target.closest('[data-header-category]');
    if (!button) return;
    original.querySelector('[data-category="' + button.dataset.headerCategory + '"]').click();
  });
  document.addEventListener('click', syncSelection);
  syncSelection();
})();
