define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    '/assets/lib/text.js!/assets/views/add.html'
], function($, _, Backbone, utils, addTpl){

    var AddView = Backbone.View.extend({
        el: "#content",
        // template: "add.html",
        template: addTpl,
        initialize: function(attrs) {

            $(this.el).off('click', '.add .event-submit');
            $(this.el).off('blur', '.add .event-validate');
            this.collection = attrs.collection;
            this.router = attrs.router

        },
        events: {
            "click .add .event-submit": "addMammal",
            "blur .add .event-validate": "validateField"
        },
        addMammal:  function(e) {

            e.preventDefault();

            var addForm = utils.validateAddForm();

            if(addForm){

                var data = {name: addForm.name, description : addForm.description};
                this.collection.add(data);
                this.router.navigate('success/add', { trigger: true });

            }

        },
        validateField:  function(e) {

           var fieldId = "#" + $(e.currentTarget).attr('id');
           utils.validateTextField(fieldId);

        },
        render: function() {
            $('.nav li').removeClass('active');
            $('.nav li a[href="#add"]').parent().addClass('active');
            $(this.el).html(_.template(this.template));
        }
    });


    return AddView;

});