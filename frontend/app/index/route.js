import Ember from 'ember';

//INDEX route
export default Ember.Route.extend({

    beforeModel: function(){
        var self = this;
        Ember.run.later(function(){
            self.transitionTo('login')

        }, 2000);
    },


});
