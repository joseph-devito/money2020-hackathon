export default Ember.Controller.extend({

    gameCode: "",

    //this function is fired everytime gameCode changes
    observeCode: Ember.observer('gameCode', function(){

        if ( this.gameCode.trim().length != 4 )
            return;

        //make ajax call

        //Ember.$.ajax({
        //
        //})

    })

});