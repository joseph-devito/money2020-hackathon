import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

    this.route('/'); //splash
    this.route('login');
    this.route('decide');

    this.route('join-game');
    this.route('new-game');
    this.route('settle');

});

export default Router;
