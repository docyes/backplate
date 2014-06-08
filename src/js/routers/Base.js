define(['backbone'], function(Backbone) {
    return Backbone.Router.extend({
        routes: {
            '*splat': 'splat'
        },
        splat: function() {
            console.log('*splat route called:', arguments);
        }
    });
})
