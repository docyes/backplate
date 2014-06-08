requirejs.config({
    urlArgs: 'bust=' + (new Date()).getTime(),
    baseUrl: 'js',
    paths: {
        jquery: 'contrib/jquery',
        underscore: 'contrib/underscore',
        backbone: 'contrib/backbone'
    }
});
