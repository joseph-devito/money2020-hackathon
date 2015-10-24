import Ember from 'ember'

export default Ember.Controller.extend({

    actions: {

        loginFb: function(){
            var self = this;

            //have server give me the user profile
            Ember.$.ajax({
                url: "/api/login",
                type: "GET"

            }).then(function(success) {

                self.store.pushPayload({self: success.user});

                self.transitionTo('decide');

            }, function(fail){

            });

        }
    }


});