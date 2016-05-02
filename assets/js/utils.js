define([
    'jquery',
    'underscore',
    'backbone'

], function($, _, Backbone){

    var utils = {

        cidIndex : cidIndex,
        validateTextField : validateTextField,
        validateCheckBox : validateCheckBox,
        validateAddForm : validateAddForm,
        validateEditForm : validateEditForm,
        successMsg : successMsg
    };

    return utils;

    function cidIndex(mammals, cid) {

        var mammal;

        _.each(mammals.models, function(value, index){
            if (value.cid == cid){
                mammalIndex =  index
            }
        });

        mammal = mammals.at(mammalIndex);
        return mammal

    }

    function validateTextField(fieldId) {

        var value = $(fieldId).val();
        var parentDiv = $(fieldId).parents(".form-group ");
        var errorMsg = $(fieldId).parents(".form-group ").find("p");

        if(value.length === 0) {

            parentDiv.addClass("has-error");
            errorMsg.removeClass("hide");
            return false

        }else {

            parentDiv.removeClass("has-error");
            errorMsg.addClass("hide");
            return value

        }
    }

    function validateCheckBox(checkboxId) {

        var parentDiv = $(checkboxId).parents(".form-group ");

        if($(checkboxId + ":checked").length === 0) {

            parentDiv.addClass("has-error");
            return false

        } else {

            parentDiv.removeClass("has-error");
            return true
        }
    }

    function validateAddForm() {

        var name = this.validateTextField("#inputMammal");
        var description = this.validateTextField("#inputDescription");
        var isMammal = this.validateCheckBox("#isMammal");
        var isCool = this.validateCheckBox("#isCool");

        if (name && description && isMammal && isCool) {

            return { name : name, description : description}

        }
    }

    function validateEditForm() {

        var name = this.validateTextField("#inputMammal");
        var description = this.validateTextField("#inputDescription");

        if (name && description) {

            return { name : name, description : description}

        }
    }

    function successMsg(event) {


        if (event === 'add') {

            return "Your new mammal has been added!"

        } else if (event === 'edit') {

            return "Your changes are now live!"

        } else if (event === 'delete') {

            return  "This mammal has now been deleted!"

        } else {

            return "Oops, you appear to have landed here by mistake ..."
        }
    }

});