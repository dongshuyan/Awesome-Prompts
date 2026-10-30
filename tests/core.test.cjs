const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function load(file, extra = {}) {
  const context = { ...extra }; context.window = context;
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../site/shared', file), 'utf8'), context);
  return context;
}
const { RCore: core } = load('core.js');
const entry = (id, category, patch = {}) => ({
  id, category, kind: 'template', status: 'local', archived: false, adult: false,
  featured: false, author: 'Example', title: { zh: id, en: id },
  description: { zh: '说明', en: 'Description' }, preview: null, ...patch
});
const catalog = { resources: [
  entry('alpha', 'practical', { title: { zh: '论文阅读', en: 'Alpha paper reading' }, preview: 'Original\ntext', sourcePath: 'example.txt' }),
  entry('document', 'writing', { kind: 'skill', status: 'selected', featured: true }),
  entry('interface', 'practical', { kind: 'skill', status: 'selected' }),
  entry('character', 'roleplay', { status: 'legacy', adult: true }),
  entry('boundary', 'jailbreak', { status: 'reference' }),
  entry('archive', 'practical', { status: 'archived', archived: true }),
  entry('collection', 'practical', { kind: 'collection', status: 'collection' })
] };
const model = core.normalize(catalog);
const state = patch => ({ ...core.defaultState(), ...patch });
const ids = rows => Array.from(rows, row => row.id);

test('current and archive scopes are separate and featured items sort first', () => {
  const current = core.view(model, state());
  assert.equal(current.items.length, 6);
  assert.equal(current.items[0].id, 'document');
  assert.deepEqual(ids(core.view(model, state({ scope: 'archived' })).items), ['archive']);
  assert.equal(Object.values(current.counts.category).reduce((a,b) => a+b, 0), 6);
});
test('both languages, full-width normalization and empty results work', () => {
  assert.deepEqual(ids(core.view(model, state({ query: '论文阅读' })).items), ['alpha']);
  assert.deepEqual(ids(core.view(model, state({ query: 'ＡＬＰＨＡ paper' })).items), ['alpha']);
  assert.equal(core.view(model, state({ query: 'no-such-resource' })).items.length, 0);
});
test('category, kind, status and query filters combine without mutating state', () => {
  const input = state({ category: 'writing', kind: 'skill', statuses: ['selected'], query: 'document' });
  assert.deepEqual(ids(core.view(model, input).items), ['document']);
  assert.equal(input.category, 'writing');
  const result = core.view(model, state({ category: 'writing', kind: 'skill' }));
  assert.equal(result.counts.category.practical, 1);
  assert.equal(result.counts.category.writing, 1);
});
test('preview text remains exact while adult and archived records are not previewable', () => {
  assert.equal(core.pick(model.resources[0].title, 'en'), 'Alpha paper reading');
  assert.equal(model.resources[0].preview, 'Original\ntext');
  assert.equal(core.canPreview(model.resources[0]), true);
  assert.equal(core.canPreview(entry('adult', 'roleplay', { adult: true, preview: 'blocked' })), false);
  assert.equal(core.canPreview(entry('old', 'practical', { archived: true, preview: 'blocked' })), false);
});
test('malformed catalog is reported rather than accepted silently', () => {
  assert.equal(core.normalize(catalog).issues.length, 0);
  assert.ok(core.normalize({ resources: [catalog.resources[0], catalog.resources[0]] }).issues.length > 0);
  assert.ok(core.normalize({}).issues.length > 0);
});
test('copy succeeds only after the clipboard operation fulfills', async () => {
  let actual;
  const { RCopy } = load('copy.js', { navigator: { clipboard: { writeText: async text => { actual = text; } } } });
  assert.equal((await RCopy.copyText('Exact\ntext')).ok, true);
  assert.equal(actual, 'Exact\ntext');
});
test('clipboard rejection and missing API report failure', async () => {
  const denied = load('copy.js', { navigator: { clipboard: { writeText: async () => { throw Error('denied'); } } } });
  assert.equal((await denied.RCopy.copyText('text')).ok, false);
  assert.equal((await load('copy.js', { navigator: {} }).RCopy.copyText('text')).ok, false);
});
