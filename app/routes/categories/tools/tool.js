import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').getToolById(params.tool_id);
  },
  store: Ember.inject.service()
});
