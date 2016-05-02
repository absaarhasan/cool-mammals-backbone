define([
    'jquery',
    'underscore',
    'backbone',
    '/assets/lib/text.js!/assets/views/shared/footer.html'
], function($, _, Backbone,  footerTpl){

    var FooterView = Backbone.View.extend({
        el: "#footer",
        //	templateFileName: "header.html",
        template: footerTpl,

        initialize: function() {
            // $.get(this.templateFileName, function(data){console.log(data);this.template=data});
        },
        render: function() {
            $(this.el).html(_.template(this.template));
        }
    });

    return FooterView;

});