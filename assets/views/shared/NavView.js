define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    '/assets/lib/text.js!/assets/views/shared/nav.html'
], function($, _, Backbone, bootstrap, navTpl){

    var NavView = Backbone.View.extend({
        el: "#nav",
        //	templateFileName: "header.html",
        template: navTpl,

        initialize: function() {
            // $.get(this.templateFileName, function(data){console.log(data);this.template=data});
        },
        render: function() {
            $(this.el).html(_.template(this.template));
        }
    });

    return NavView;

});
