define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    '/assets/lib/text.js!/assets/views/home.html'
], function($, _, Backbone, utils , homeTpl ){

    var HomeView = Backbone.View.extend({

        el: "#content",
        // template: "home.html",
        template: homeTpl,
        events: {
            "click .home .event-remove": "removeMammal",
            "click .home .event-edit": "editMammal"
        },
        initialize: function(attrs) {

                $(this.el).off('click', '.home .event-remove');
                $(this.el).off('click', '.home .event-edit');

                this.options = attrs;
                this.router = attrs.router

        },
        render: function() {

            $('.nav li').removeClass('active');
            $('.nav li a[href="#home"]').parent().addClass('active');
            $(this.el).html(_.template(this.template)({
                mammal: this.options.collection.toJSON(),
                id : this.options.collection.models
            }));
        },
        removeMammal: function(e) {

            e.preventDefault( );

            var cid = $(e.currentTarget).data('id');

            var mammal = utils.cidIndex(this.options.collection,cid);

            mammal.trigger('destroy', mammal);

            this.render()
        },
        editMammal: function(e) {

            e.preventDefault();

            var cid = $(e.currentTarget).data('id');

            this.router.navigate('edit/' + cid, { trigger: true });
        }

    });

    return HomeView;

});