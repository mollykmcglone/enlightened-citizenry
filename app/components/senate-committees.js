import Ember from 'ember';

export default Ember.Component.extend({
  senateCommittees: Ember.computed.filterBy('committees', 'chamber', 'senate')
});
