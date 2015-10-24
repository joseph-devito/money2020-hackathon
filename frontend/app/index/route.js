import Ember from 'ember';

//INDEX route
export default Ember.Route.extend({

    beforeModel: function(){
    },

    model: function(){
        return {};
    },

    afterModel: function(){
        return {};
    },

    setupController: function(controller, model){
        this._super(controller, model);
        var self = this;

        Ember.run.later(function(){

            Ember.$.ajax({
                url: '/api/login',
                type: 'GET'
            }).then(function(rawUser){
                //200 user has session

                self.store.pushPayload({
                    self: {
                        id: 123,
                        name: 'aaron hardcoded'
                    }
                });

                self.transitionTo('decide')

            }, function(fail){
                //401 response
                self.transitionTo('login');
            });

            self.transitionTo('login');

        }, 2000);
    }

});
