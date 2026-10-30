(function () {
  'use strict';
  var RCore = window.RCore;
  var RCopy = window.RCopy;
  var D = {};
  var model = null, catalog = null, byId = null, catMap = null, mq = null;
  var state = null, selectedId = null, copyState = null, lastTrigger = null, errorType = null;

  var T = {
    zh: {
      all: '全部',
      allCurrent: '全部当前条目',
      archivedTitle: '归档条目',
      count: function (n, total) { return '显示 ' + n + ' 条（范围共 ' + total + ' 条）'; },
      empty: '没有匹配的条目。',
      clear: '清除条件',
      viewArchived: '查看归档',
      backCurrent: '返回当前条目',
      copy: '复制预览正文',
      copied: '已复制到剪贴板。',
      failed: '自动复制失败。请选中下方文本，按 Ctrl/⌘C 手动复制。',
      source: '打开原文',
      pinned: '固定版本',
      adultNote: '成人向资料：此处提供中性简介与来源。',
      allCriteria: '用途明确，说明输入、依赖和来源；收录不等于效果验证。',
      archivedNote: '已归档：仅作记录，不提供预览。',
      noPreview: '本站不提供此条目的预览，请通过原文查看。',
      sensitive: '成人向',
      previewLabel: '预览正文（只读）',
      manualLabel: '手动复制区（只读）',
      detailEmpty: '没有可显示的详情。',
      openDetail: '查看详情：',
      detailOpened: '已打开详情：',
      loadError: '数据加载失败。',
      issues: function (n) { return '数据有 ' + n + ' 处格式问题。'; },
      searchPh: '搜索标题、简介或作者'
    },
    en: {
      all: 'All',
      allCurrent: 'All current entries',
      archivedTitle: 'Archived entries',
      count: function (n, total) { return 'Showing ' + n + ' of ' + total + ' in scope'; },
      empty: 'No matching entries.',
      clear: 'Clear filters',
      viewArchived: 'View archived',
      backCurrent: 'Back to current',
      copy: 'Copy preview text',
      copied: 'Copied to clipboard.',
      failed: 'Automatic copy failed. Select the text below and press Ctrl/⌘C.',
      source: 'Open source',
      pinned: 'Pinned version',
      adultNote: 'Adult-oriented reference: neutral description and source link.',
      allCriteria: 'Clear purposes, inputs, dependencies and sources. Inclusion does not establish effectiveness.',
      archivedNote: 'Archived: kept for record only; no preview.',
      noPreview: 'No preview on this site; please use the source link.',
      sensitive: 'Adult-oriented',
      previewLabel: 'Preview text (read-only)',
      manualLabel: 'Manual copy area (read-only)',
      detailEmpty: 'No details to show.',
      openDetail: 'View details: ',
      detailOpened: 'Details opened: ',
      loadError: 'Data failed to load.',
      issues: function (n) { return 'Data has ' + n + ' format issue(s).'; },
      searchPh: 'Search title, summary or author'
    }
  };

  var KIND = {
    prompt: { zh: '提示词', en: 'Prompt' },
    template: { zh: '模板', en: 'Template' },
    skill: { zh: '技能', en: 'Skill' },
    collection: { zh: '合集', en: 'Collection' }
  };

  var STATUS = {
    selected: { zh: '外部精选', en: 'External pick' },
    local: { zh: '本地收录', en: 'Local' },
    legacy: { zh: '历史保留', en: 'Retained' },
    maintainer: { zh: '维护者', en: 'Maintainer' },
    reference: { zh: '参考', en: 'Reference' },
    collection: { zh: '合集', en: 'Collection' },
    archived: { zh: '已归档', en: 'Archived' }
  };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined && text !== null) n.textContent = text;
    return n;
  }
  function tr(o) { return RCore.pick(o, state.lang); }
  function lbl(map, key) { var m = map[key]; return m ? m[state.lang] : String(key); }
  function catName(id) { var c = catMap.get(id); return c ? tr(c.name) : String(id); }
  function sidebar() { return document.body.dataset.layout === 'deck' && !!mq && mq.matches; }
  function selectedItem() { return selectedId ? (byId.get(selectedId) || null) : null; }
  function setSelected(id) {
    if (id !== selectedId) { selectedId = id; copyState = null; }
  }
  function showError(type) {
    errorType = type || 'loadError';
    var lang = state ? state.lang : 'zh';
    D.error.textContent = errorType === 'issues' ? T[lang].issues(model.issues.length) : T[lang].loadError;
    D.error.hidden = false;
  }
  function link(href, text, cls) {
    if (typeof href !== 'string' || !/^https?:\/\//.test(href)) return null;
    var a = el('a', cls, text);
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    return a;
  }

  function fillTotals() {
    var all = model.resources;
    var cur = all.filter(function (r) { return !r.archived; });
    var v = {
      current: cur.length,
      archived: all.length - cur.length,
      local: cur.filter(function (r) { return !!r.sourcePath; }).length,
      external: cur.filter(function (r) { return !r.sourcePath; }).length,
      previewable: all.filter(function (r) { return RCore.canPreview(r); }).length,
      categories: (catalog.categories || []).length
    };
    document.querySelectorAll('[data-total]').forEach(function (n) {
      n.textContent = String(v[n.dataset.total] || 0);
    });
  }

  function applyLang() {
    var lang = state.lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-zh]').forEach(function (n) {
      n.textContent = n.dataset[lang] || n.dataset.zh;
    });
    D.search.placeholder = T[lang].searchPh;
    if (errorType) showError(errorType);
  }

  function buildCategoryNav() {
    var ids = ['all'];
    catMap.forEach(function (c, id) { ids.push(id); });
    D.catNav.replaceChildren();
    ids.forEach(function (id) {
      var b = el('button', 'cat-button');
      b.type = 'button';
      b.dataset.category = id;
      b.dataset.testid = 'category';
      b.append(el('span', 'cat-name'), el('span', 'cat-count'));
      D.catNav.append(b);
    });
  }

  function renderNav(view) {
    var t = T[state.lang];
    D.catNav.querySelectorAll('[data-category]').forEach(function (b) {
      var id = b.dataset.category;
      b.querySelector('.cat-name').textContent = id === 'all' ? t.all : catName(id);
      b.querySelector('.cat-count').textContent = String(id === 'all' ? Object.values(view.counts.category).reduce(function (a, b) { return a + b; }, 0) : view.counts.category[id]);
      b.setAttribute('aria-pressed', String(state.category === id));
    });
  }

  function renderItem(r, testid) {
    var t = T[state.lang];
    var title = tr(r.title);
    var art = el('article', r.id === selectedId ? 'resource is-selected' : 'resource');
    art.dataset.resourceId = r.id;
    art.dataset.testid = testid;
    var main = el('button', 'resource-main');
    main.type = 'button';
    main.dataset.open = r.id;
    main.setAttribute('aria-label', t.openDetail + title);
    var meta = el('span', 'resource-meta');
    meta.append(el('span', 'badge', lbl(STATUS, r.status)));
    if (r.adult) meta.append(el('span', 'badge badge-warn', t.sensitive));
    meta.append(el('span', 'resource-author', r.author || ''));
    main.append(
      el('span', 'resource-type', lbl(KIND, r.kind)),
      el('span', 'resource-title', title),
      el('span', 'resource-description', tr(r.description)),
      meta
    );
    art.append(main);
    var src = link(r.url, t.source, 'source-link');
    if (src) {
      src.setAttribute('aria-label', t.source + ': ' + title);
      art.append(src);
    }
    return art;
  }

  function paintCopyNode(root, key, focus) {
    var status = root.querySelector('.copy-status');
    var manual = root.querySelector('.manual-copy');
    if (!status || !manual) return;
    status.textContent = key ? T[state.lang][key] : '';
    manual.hidden = key !== 'failed';
    if (key === 'failed' && focus) {
      manual.focus();
      manual.select();
    }
  }

  function paintCopy(id, focus) {
    var key = copyState && copyState.id === id ? copyState.key : '';
    document.querySelectorAll('.detail').forEach(function (d) {
      if (d.dataset.resourceId === id) paintCopyNode(d, key, focus);
    });
  }

  function buildDetail(r) {
    var t = T[state.lang];
    var can = RCore.canPreview(r);
    var root = el('div', 'detail');
    root.dataset.testid = 'detail';
    root.dataset.resourceId = r.id;

    var head = el('div', 'detail-head');
    head.append(el('span', 'resource-type', lbl(KIND, r.kind)), el('h2', '', tr(r.title)));

    var meta = el('div', 'detail-meta');
    meta.append(el('span', 'badge', catName(r.category)), el('span', 'badge', lbl(STATUS, r.status)));
    if (r.adult) meta.append(el('span', 'badge badge-warn', t.sensitive));
    if (r.author) meta.append(el('span', 'resource-author', r.author));

    var notes = [];
    var sn = tr(r.sourceNote);
    if (sn) notes.push(sn);
    if (r.adult) notes.push(t.adultNote);
    if (r.archived) notes.push(t.archivedNote);
    if (!can && !r.adult && !r.archived) notes.push(t.noPreview);
    var note = el('p', 'detail-note', notes.join(' '));
    note.hidden = notes.length === 0;

    var actions = el('div', 'detail-actions');
    var src = link(r.url, t.source, 'source-link');
    var pin = link(r.versionUrl, t.pinned, 'version-link');
    if (src) actions.append(src);
    if (pin) actions.append(pin);

    root.append(head, meta, el('p', 'detail-description', tr(r.description)), note, actions);

    if (can) {
      var ta = document.createElement('textarea');
      ta.className = 'prompt-text';
      ta.readOnly = true;
      ta.rows = 12;
      ta.value = r.preview;
      ta.setAttribute('aria-label', t.previewLabel);

      var btn = el('button', 'copy-button', t.copy);
      btn.type = 'button';
      btn.dataset.testid = 'copy';

      var status = el('p', 'copy-status');
      status.dataset.testid = 'copy-status';
      status.setAttribute('role', 'status');

      var manual = document.createElement('textarea');
      manual.className = 'manual-copy';
      manual.readOnly = true;
      manual.hidden = true;
      manual.rows = 4;
      manual.value = r.preview;
      manual.dataset.testid = 'manual-copy';
      manual.setAttribute('aria-label', t.manualLabel);

      var id = r.id;
      btn.addEventListener('click', function () {
        // 点击时读取原文字段，不使用界面文本
        RCopy.copyText(r.preview).then(function (res) {
          copyState = { id: id, key: res.ok ? 'copied' : 'failed' };
          paintCopy(id, !res.ok);
        });
      });

      root.append(ta, btn, status, manual);
      paintCopyNode(root, copyState && copyState.id === id ? copyState.key : '', false);
    }
    return root;
  }

  function fillDetail(target, r) {
    if (!target) return;
    target.replaceChildren(r ? buildDetail(r) : el('p', 'detail-empty', T[state.lang].detailEmpty));
  }

  function markSelected() {
    document.querySelectorAll('.resource').forEach(function (a) {
      a.classList.toggle('is-selected', a.dataset.resourceId === selectedId);
    });
  }

  function findOpen(id) {
    if (!id) return null;
    var nodes = document.querySelectorAll('[data-open]');
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].dataset.open === id) return nodes[i];
    }
    return null;
  }

  function openDialog(r, trigger) {
    lastTrigger = trigger;
    fillDetail(D.dialogContent, r);
    if (!D.dialog.open) D.dialog.showModal();
  }

  function openItem(id, trigger) {
    var r = byId.get(id);
    if (!r) return;
    setSelected(id);
    if (sidebar()) {
      fillDetail(D.pane, r);
      D.detailStatus.textContent = T[state.lang].detailOpened + tr(r.title);
      markSelected();
    } else {
      openDialog(r, trigger);
    }
  }

  function onDialogClose() {
    var t = lastTrigger && lastTrigger.isConnected ? lastTrigger : findOpen(selectedId);
    lastTrigger = null;
    fillDetail(D.dialogContent, null);
    if (t) t.focus();
  }

  function resetFilters() {
    var next = RCore.defaultState();
    next.lang = state.lang;
    next.scope = state.scope;
    state = next;
    D.search.value = '';
    D.kind.value = 'all';
    D.status.value = 'all';
    render();
  }

  function onDocClick(e) {
    var t = e.target;
    if (!(t instanceof Element)) return;
    if (t.closest('[data-action=reset]')) {
      var inResults = D.results.contains(t);
      resetFilters();
      if (inResults) D.search.focus();
      return;
    }
    var open = t.closest('[data-open]');
    if (open) openItem(open.dataset.open, open);
  }

  function onKey(e) {
    if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return;
    if (D.dialog.open) return;
    var t = e.target;
    if (t instanceof Element && t.closest('input, textarea, select, [contenteditable]')) return;
    e.preventDefault();
    D.search.focus();
  }

  function bind() {
    D.search.addEventListener('input', function () {
      state.query = D.search.value;
      render();
    });
    D.kind.addEventListener('change', function () {
      state.kind = D.kind.value;
      render();
    });
    D.status.addEventListener('change', function () {
      state.statuses = D.status.value === 'all' ? [] : [D.status.value];
      render();
    });
    D.scope.addEventListener('click', function () {
      state.scope = state.scope === 'current' ? 'archived' : 'current';
      render();
    });
    D.lang.addEventListener('click', function () {
      state.lang = state.lang === 'zh' ? 'en' : 'zh';
      applyLang();
      render();
    });
    D.reset.addEventListener('click', resetFilters);
    D.catNav.addEventListener('click', function (e) {
      var b = e.target.closest('[data-category]');
      if (b) {
        state.category = b.dataset.category;
        render();
      }
    });
    D.dialogClose.addEventListener('click', function () { D.dialog.close(); });
    D.dialog.addEventListener('close', onDialogClose);
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    if (mq) {
      if (mq.addEventListener) mq.addEventListener('change', render);
      else mq.addListener(render);
    }
  }

  function render() {
    var view = RCore.view(model, state);
    var t = T[state.lang];
    var filtering = state.query.trim() !== '' || state.category !== 'all' ||
      state.kind !== 'all' || state.statuses.length > 0 || state.scope !== 'current';
    document.body.dataset.filtering = String(filtering);

    if (sidebar() && !view.items.some(function (r) { return r.id === selectedId; })) {
      setSelected(view.items.length ? view.items[0].id : null);
    }

    renderNav(view);
    D.scope.setAttribute('aria-pressed', String(state.scope === 'archived'));
    D.scope.textContent = state.scope === 'archived' ? t.backCurrent : t.viewArchived + ' (' + view.scope.archived + ')';
    D.count.textContent = t.count(view.items.length, view.scope[state.scope]);
    D.title.textContent = state.scope === 'archived' ? t.archivedTitle :
      (state.category === 'all' ? t.allCurrent : catName(state.category));

    var cat = catMap.get(state.category);
    D.criteria.hidden = false;
    D.criteria.textContent = cat ? tr(cat.criteria) : t.allCriteria;

    var feats = filtering ? [] : model.resources.filter(function (r) { return r.featured && !r.archived; });
    D.featSec.hidden = document.body.dataset.layout === 'deck' || feats.length === 0;
    D.featured.replaceChildren(...feats.map(function (r) { return renderItem(r, 'featured-item'); }));

    if (!view.items.length) {
      var box = el('div', 'empty');
      box.setAttribute('role', 'status');
      var clear = el('button', 'clear-button', t.clear);
      clear.type = 'button';
      clear.dataset.action = 'reset';
      box.append(el('p', '', t.empty), clear);
      D.results.replaceChildren(box);
    } else {
      D.results.replaceChildren(...view.items.map(function (r) { return renderItem(r, 'item'); }));
    }

    if (sidebar()) fillDetail(D.pane, selectedItem());
    else if (D.pane) D.pane.replaceChildren();
  }

  function init() {
    D = {
      search: document.getElementById('search'),
      lang: document.getElementById('lang'),
      scope: document.getElementById('scope'),
      catNav: document.getElementById('category-nav'),
      kind: document.getElementById('kind'),
      status: document.getElementById('status'),
      reset: document.getElementById('reset'),
      count: document.getElementById('count'),
      title: document.getElementById('catalog-title'),
      criteria: document.getElementById('criteria'),
      results: document.getElementById('results'),
      featSec: document.getElementById('featured-section'),
      featured: document.getElementById('featured'),
      pane: document.getElementById('detail-pane'),
      detailStatus: document.getElementById('detail-status'),
      dialog: document.getElementById('detail-dialog'),
      dialogClose: document.getElementById('dialog-close'),
      dialogContent: document.getElementById('dialog-content'),
      error: document.getElementById('app-error')
    };
    if (!RCore || !RCopy) {
      showError();
      return;
    }
    state = RCore.defaultState();
    catalog = window.RESOURCE_CATALOG || null;
    model = RCore.normalize(catalog);
    if (!model.resources.length) {
      showError();
      return;
    }
    byId = new Map(model.resources.map(function (r) { return [r.id, r]; }));
    catMap = new Map(((catalog && catalog.categories) || []).map(function (c) { return [c.id, c]; }));
    mq = window.matchMedia ? window.matchMedia('(min-width: 1200px)') : null;

    var hooks = { search: D.search, lang: D.lang, scope: D.scope, kind: D.kind, status: D.status, count: D.count, reset: D.reset };
    Object.keys(hooks).forEach(function (k) { hooks[k].dataset.testid = k; });

    fillTotals();
    buildCategoryNav();
    bind();
    applyLang();
    render();
    if (model.issues.length) showError('issues');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
