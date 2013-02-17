requirejs.config({
    urlArgs: 'bust=' + (new Date()).getTime(),
    baseUrl: 'js',
    shim: {
        'contrib/underscore': {
            exports: '_'
        },
        'contrib/backbone': {
            deps: ['contrib/underscore', 'contrib/jquery'],
            exports: 'Backbone'
        }
    }
});
