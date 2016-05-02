define([
    'underscore',
    'backbone',
    '/assets/data/model.js',
    'json!/assets/data/mammals.json'
], function(_, Backbone, MammalModel , data){

    var MammalsCollection = Backbone.Collection.extend({

        model: MammalModel,

        initialize: function(){

                this.add(data.mammals);

        }

    });

    return MammalsCollection;

})