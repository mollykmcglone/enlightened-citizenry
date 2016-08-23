import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://congress.api.sunlightfoundation.com/committees?subcommittee=false&per_page=50&apikey=786722a8c7804093ac901de28bee5899';
      return Ember.$.getJSON(url).then(function(responseJSON){
        return responseJSON.results;
      });


  }
});
