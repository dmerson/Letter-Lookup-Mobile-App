'use strict';

app.formView = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var formViewModel = kendo.observable({
        fields: {
            letterEntered: '',
            result:''
        },
        submit: function() 
        {
           switch (formViewModel.fields.letterEntered.toLowerCase())
                {
                    case "a":
                        alert("1. Yay.");
                        break;
                    default:
                        alert("not implemented yet or not a letter");
                }
           alert(formViewModel.fields.letterEntered);
            
       	},
        cancel: function() {}
    });

    parent.set('formViewModel', formViewModel);
})(app.formView);