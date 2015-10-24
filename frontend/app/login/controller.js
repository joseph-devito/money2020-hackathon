import Ember from 'ember'

export default Ember.Controller.extend({

    actions: {

        loginFb: function(){
            FB.login(function(resp){
                if (resp.status === 'connected') {
                    Ember.$.ajax({
                        url: "api/login",  //not using facebook's omniauth. couldn't overcome issues
                        type: "POST",
                        data: resp.authResponse

                    }).then(function(success) {

                    }, function(fail){

                    });
                }
            }
                //, {scope: 'public_profile'}
            );
        }
    }


});