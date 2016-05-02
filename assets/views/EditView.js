define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    '/assets/lib/text.js!/assets/views/edit.html'
], function($, _, Backbone, utils, editTpl){

    var EditView = Backbone.View.extend({
        el: "#content",
        // template: "edit.html",
        template: editTpl,
        initialize: function(attrs) {

            $(this.el).off('click', '.edit .event-submit');

            this.collection = attrs.collection;
            this.id = attrs.id;
            this.mammal = utils.cidIndex(this.collection, this.id);
            this.router = attrs.router

        },
        events: {
            "click .edit .event-submit": "editMammal"
        },
        editMammal:  function(e) {

            e.preventDefault();

            var editForm = utils.validateEditForm();

            if(editForm){

                var data = {name: editForm.name, description : editForm.description};
                this.mammal.set(data)
                this.router.navigate('success/edit', { trigger: true });

            }

        },

        render: function() {

            $('.nav li').removeClass('active');
            $(this.el).html(_.template(this.template)({
                mammal: this.mammal.toJSON()
            }));
        }
    });

    return EditView;

});