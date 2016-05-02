define([
    'jquery',
    'underscore',
    'backbone',
    '/assets/lib/text.js!/assets/views/shared/jumbotron.html'
], function($, _, Backbone,  jumboTpl){

    var JumboView = Backbone.View.extend({
        el: "#jumbo",
        //	templateFileName: "header.html",
        template: jumboTpl,

        initialize: function() {
            // $.get(this.templateFileName, function(data){console.log(data);this.template=data});
        },
        render: function() {
            $(this.el).html(_.template(this.template));
        }
    });

    return JumboView;

});