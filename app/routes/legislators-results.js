import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
  var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=786722a8c7804093ac901de28bee5899&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
}

});
