(function (window) {
  'use strict';
  var CATS = ['practical', 'meta', 'writing', 'roleplay', 'jailbreak', 'nsfw'];
  var KINDS = ['prompt', 'template', 'skill', 'collection'];
  var STATUSES = ['selected', 'local', 'legacy', 'maintainer', 'reference', 'collection', 'archived'];

  function str(v) { return typeof v === 'string' ? v : ''; }
  function norm(v) { return str(v).normalize('NFKC').toLowerCase(); }

  function textOf(r) {
    var t = r.title || {};
    var d = r.description || {};
    return norm([t.zh, t.en, d.zh, d.en, r.author].map(str).join(' '));
  }

  function pick(obj, lang) {
    if (typeof obj === 'string') return obj;
    if (!obj || typeof obj !== 'object') return '';
    return typeof obj[lang] === 'string' ? obj[lang] : str(obj.zh);
  }

  function defaultState() {
    return { scope: 'current', category: 'all', kind: 'all', statuses: [], query: '', lang: 'zh' };
  }

  function normalize(catalog) {
    var issues = [];
    var resources = [];
    var seen = {};
    var list = catalog && Array.isArray(catalog.resources) ? catalog.resources : null;
    if (!list) {
      issues.push({ id: null, index: -1, message: 'resources missing' });
      return { resources: resources, issues: issues };
    }
    list.forEach(function (r, i) {
      function problem(msg) { issues.push({ id: (r && r.id) || null, index: i, message: msg }); }
      if (!r || typeof r !== 'object' || typeof r.id !== 'string' || !r.id) { problem('missing id'); return; }
      if (seen[r.id]) { problem('duplicate id'); return; }
      seen[r.id] = true;
      if (CATS.indexOf(r.category) < 0) problem('unknown category');
      if (KINDS.indexOf(r.kind) < 0) problem('unknown kind');
      if (STATUSES.indexOf(r.status) < 0) problem('unknown status');
      if (!r.title || typeof r.title.zh !== 'string' || typeof r.title.en !== 'string') problem('title incomplete');
      if (typeof r.archived !== 'boolean') problem('archived not boolean');
      if (typeof r.adult !== 'boolean') problem('adult not boolean');
      if ((r.status === 'archived') !== (r.archived === true)) problem('status/archived mismatch');
      var item = Object.assign({}, r, { _index: i });
      item._text = textOf(item);
      resources.push(item);
    });
    return { resources: resources, issues: issues };
  }

  function matches(r, query) {
    var tokens = norm(query).split(/\s+/).filter(Boolean);
    if (!tokens.length) return true;
    var text = typeof r._text === 'string' ? r._text : textOf(r);
    return tokens.every(function (t) { return text.indexOf(t) !== -1; });
  }

  function canPreview(r) {
    return !!r && typeof r.preview === 'string' && r.preview.trim() !== '' && !r.adult && !r.archived;
  }

  function view(model, state) {
    var s = state || defaultState();
    var all = model.resources;
    var sts = s.statuses || [];
    var base = all.filter(function (r) {
      var inScope = s.scope === 'archived' ? r.archived === true : !r.archived;
      return inScope &&
        (s.kind === 'all' || r.kind === s.kind) &&
        (sts.length === 0 || sts.indexOf(r.status) !== -1) &&
        matches(r, s.query);
    });
    var category = {};
    CATS.forEach(function (c) { category[c] = 0; });
    base.forEach(function (r) {
      if (Object.prototype.hasOwnProperty.call(category, r.category)) category[r.category] += 1;
    });
    var items = base.filter(function (r) {
      return s.category === 'all' || r.category === s.category;
    });
    items.sort(function (a, b) {
      return (a.featured ? 0 : 1) - (b.featured ? 0 : 1) || a._index - b._index;
    });
    var current = all.filter(function (r) { return !r.archived; }).length;
    return {
      items: items,
      counts: { category: category },
      scope: { current: current, archived: all.length - current },
      featuredCount: items.filter(function (r) { return !!r.featured; }).length
    };
  }

  window.RCore = {
    normalize: normalize,
    defaultState: defaultState,
    view: view,
    canPreview: canPreview,
    pick: pick,
    matches: matches
  };
})(window);
