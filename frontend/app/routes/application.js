import Ember from 'ember';

//INDEX route
export default Ember.Route.extend({

    beforeModel: function(){
        FB.init({
            appId: '1009508355780156',
            //xfbml      : true,
            version    : 'v2.4'
        });
    }

});
