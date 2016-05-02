
require.config({

    shim : {
        "bootstrap" : {
            deps :['jquery'] ,
            exports: '$'
        }
    },
    paths: {
        jquery: '../lib/jquery-min',
        underscore: '../lib/underscore-min',
        backbone: '../lib/backbone-min',
        bootstrap: '../lib/bootstrap.min',
        text: '../lib/text',
        json: '../lib/json',
        utils: 'utils'
    }

});

require([

    'app'

], function(App){
    App.initialize();
});
