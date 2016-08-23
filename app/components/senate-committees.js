import Ember from 'ember';

export default Ember.Component.extend({
  senateCommittees: Ember.computed.filter('committees', function (committee, index, array) {
    return committee.chamber=="senate";
  })
});
