import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tools/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tools/index');
    assert.ok(route);
  });
});
