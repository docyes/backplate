require(['backbone', 'routers/Base'], function(Backbone, BaseRouter) {
    var router = new BaseRouter();
    Backbone.history.start({pushState: true})
});
