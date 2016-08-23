import Ember from 'ember';

export default Ember.Component.extend({
  houseCommittees: Ember.computed.filter('committees', function (committee, index, array) {
    return committee.chamber=="house";
  })
});
