// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    '/assets/views/shared/NavView.js',
    '/assets/views/shared/JumboView.js',
    '/assets/views/shared/FooterView.js',
    '/assets/views/HomeView.js',
    '/assets/views/AddView.js',
    '/assets/views/DetailsView.js',
    '/assets/views/EditView.js',
    '/assets/views/SuccessView.js',
    '/assets/data/collection.js'
], function($, _, Backbone,  NavView, JumboView, FooterView, HomeView, AddView, DetailsView , EditView , SuccessView, MammalsCollection ) {

    var AppRouter = Backbone.Router.extend({

        routes: {

            "home": "home",
            "add": "add",
            "details/:id": "details",
            "edit/:id": "edit",
            "success/:event": "success",

            // Default
            '*actions': 'defaultAction'
        }

    });

    var initialize = function(){

        var app_router = new AppRouter;

        var navView = new NavView();
            navView.render();

        var jumboView = new JumboView();
            jumboView.render();

        var footerView = new FooterView();
            footerView.render();

        app_router.mammals = new MammalsCollection();

        app_router.on('route:defaultAction', function (actions) {

            var homeView = new HomeView({ collection: app_router.mammals, router : app_router});
                homeView.render();
        });

        app_router.on('route:home', function(){

            var homeView = new HomeView({ collection: app_router.mammals, router : app_router});
                homeView.render();

        });

        app_router.on('route:add', function(){

            var addView = new AddView({ collection: app_router.mammals, router : app_router});
                addView.render();

        });

        app_router.on('route:details', function(id){

            console.log();

            var detailsView = new DetailsView({ collection: app_router.mammals , id : id, router : app_router});
                detailsView.render();

        });

        app_router.on('route:edit', function(id){

            var editView = new EditView({ collection: app_router.mammals , id : id, router : app_router});
                editView.render();

        });

        app_router.on('route:success', function(event){

            var successView = new SuccessView({ event: event });
                successView.render();

        });



        /*
        app_router.on('route:add', function () {

            // Like above, call render but know that this view has nested sub views which
            // handle loading and displaying data from the GitHub API
            var contributorsView = new ContributorsView();
        });

        app_router.on('route:defaultAction', function (actions) {

            // We have no matching route, lets display the home page
            var homeView = new HomeView();
            homeView.render();
        });

        // Unlike the above, we don't call render on this view as it will handle
        // the render call internally after it loads data. Further more we load it
        // outside of an on-route function to have it loaded no matter which page is
        // loaded initially.
        var footerView = new FooterView();
*/


        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
