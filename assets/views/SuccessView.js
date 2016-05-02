define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    '/assets/lib/text.js!/assets/views/success.html'
], function($, _, Backbone, utils, successTpl){

    var SuccessView = Backbone.View.extend({
        el: "#content",
        // template: "success.html",
        template: successTpl,
        initialize: function(attrs) {
            this.event = attrs.event;
        },
        render: function() {

            var successMsg = utils.successMsg(this.event);

            $('.nav li').removeClass('active');
            $(this.el).html(_.template(this.template)({
                successMsg: successMsg
            }));
        }
    });

    return SuccessView;

});