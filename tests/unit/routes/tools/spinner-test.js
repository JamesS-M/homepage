import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tools/spinner', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tools/spinner');
    assert.ok(route);
  });
});
