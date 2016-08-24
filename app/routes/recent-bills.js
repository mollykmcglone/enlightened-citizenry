import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://congress.api.sunlightfoundation.com/bills?order=introduced_on&per_page=25&apikey=786722a8c7804093ac901de28bee5899';
      return Ember.$.getJSON(url).then(function(responseJSON){
        return responseJSON.results;
      });
  }
});
