import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/committees?&subcommittee=true&parent_committee_id=' + params.committee_id + '&per_page=50&apikey=786722a8c7804093ac901de28bee5899';
      return Ember.$.getJSON(url).then(function(responseJSON){
        console.log(responseJSON.results);
        return responseJSON.results;
      });
    }
});
