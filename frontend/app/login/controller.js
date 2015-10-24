import Ember from 'ember'

export default Ember.Controller.extend({

    actions: {

        loginFb: function(){
            var self = this;
            FB.login(function(resp){
                if (resp.status === 'connected') {
                    Ember.$.ajax({
                        url: "/api/login",
                        type: "POST",
                        data: resp.authResponse

                    }).then(function(success) {

                        self.store.pushPayload({self: success.user});
                        self.transitionTo('decide');

                    }, function(fail){

                    });
                }
            }
                //, {scope: 'public_profile'}
            );
        }
    }


});