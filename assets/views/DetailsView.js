define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    '/assets/lib/text.js!/assets/views/details.html'
], function($, _, Backbone, utils, detailsTpl){

    var DetailsView = Backbone.View.extend({
        el: "#content",
        // template: "details.html",
        template: detailsTpl,
        initialize: function(attrs) {

            $(this.el).off('click', '.details .event-remove');
            $(this.el).off('click', '.details .event-edit');

            this.collection = attrs.collection;
            this.id = attrs.id;
            this.mammal = utils.cidIndex(this.collection, this.id);
            this.router = attrs.router

        },
        events: {
            "click .details .event-remove": "removeMammal",
            "click .details .event-edit": "editMammal"
        },
        removeMammal: function(e) {

            e.preventDefault();

            this.mammal.trigger('destroy', this.mammal);

            this.router.navigate('success/delete', { trigger: true });

        },
        editMammal: function(e) {

            e.preventDefault();

            this.router.navigate('edit/' + this.id, { trigger: true });

        },
        render: function() {

            $('.nav li').removeClass('active');
            $(this.el).html(_.template(this.template)({
                mammal: this.mammal.toJSON()
            }));
        }
    });

    return DetailsView;

});