import Ember from 'ember';

//INDEX route
export default Ember.Route.extend({

    beforeModel: function(){

    },


    actions: {

        didTransition: function () {
            $('body').hide();
            $('body').fadeIn();
        }
    }

});
