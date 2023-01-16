import { module, test } from 'qunit';
import { setupRenderingTest } from 'website-www/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | input-box', function (hooks) {
  setupRenderingTest(hooks);

  test('input renders', async function (assert) {
    assert.expect(12);

    this.set('name', 'city');
    this.set('field', 'Your City');
    this.set('placeHolder', 'City');
    this.set('type', 'text');
    this.set('required', true);
    this.set('value', 'Hello, I am input');

    await render(hbs`
    <Reusables::InputBox 
      @name={{this.name}}
      @field={{this.field}}
      @placeHolder={{this.placeHolder}}
      @type={{this.type}}
      @required={{true}}
      @value={{this.value}} 
    />`);

    assert.dom('[data-test-input]').hasClass('input-box');

    assert.dom('[data-test-label]').hasClass('label');
    assert.dom('[data-test-label]').hasText('Your City');
    assert.dom('[data-test-label]').hasAttribute('for', 'city');

    assert.dom('[data-test-required]').hasClass('required');

    assert.dom('[data-test-input-field]').hasClass('input__field');
    assert.dom('[data-test-input-field]').hasAttribute('required');
    assert.dom('[data-test-input-field]').hasAttribute('name', 'city');
    assert.dom('[data-test-input-field]').hasProperty('type', 'text');
    assert.dom('[data-test-input-field]').hasAttribute('id', 'city');
    assert.dom('[data-test-input-field]').hasProperty('placeholder', 'City');
    assert
      .dom('[data-test-input-field]')
      .hasProperty('value', 'Hello, I am input');
  });
});
