import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('categories', {path: '/:category_id'}, function(){
    this.route('tools', function() {
      this.route('tool', {path: '/:tool_id'});
    });
    this.route('electronics', function() {
      this.route('electronic', {path: '/:electronic_id'});
    });
    this.route('housewares', function() {
      this.route('houseware', {path: '/:houseware_id'});
    });
    this.route('sportinggoods', function() {
      this.route('sportinggood', {path: '/:sportinggood_id'});
    });
  });
});

export default Router;
