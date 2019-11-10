import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | tools/spinner-main', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('options', [1,2,3])

    await render(hbs`<Tools::SpinnerMain @options={{this.options}} />`);

    assert.equal(this.element.textContent.trim(), this.options.join(''));
  });
});
