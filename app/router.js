import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('legislators');
  this.route('legislators-results', {path:'/legislators-results/:zip'});
  this.route('committees');
  this.route('committee', {path:'/committee/:committee_id'});
  this.route('recent-bills');
  this.route('upcoming-bills');
});

export default Router;
