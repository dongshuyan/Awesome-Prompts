(function (window) {
  'use strict';
  async function copyText(text) {
    try {
      var clip = window.navigator && window.navigator.clipboard;
      if (!clip || typeof clip.writeText !== 'function') return { ok: false, reason: 'unavailable' };
      await clip.writeText(text === null || text === undefined ? '' : String(text));
      return { ok: true, reason: 'copied' };
    } catch (err) {
      return { ok: false, reason: 'rejected' };
    }
  }
  window.RCopy = { copyText: copyText };
})(window);
