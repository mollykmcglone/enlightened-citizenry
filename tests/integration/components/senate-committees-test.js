import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('senate-committees', 'Integration | Component | senate committees', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{senate-committees}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#senate-committees}}
      template block text
    {{/senate-committees}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
