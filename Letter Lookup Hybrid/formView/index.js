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
        submit: function() {
	        debugger;
           switch (formViewModel.fields.letterEntered.toLowerCase())
                {
           	case "a":
	           {
		           formViewModel.fields.set("result", "1");
		           break;
	           }
	           default:
                    {
	                    break;
                    }
                }
          
            
       	},
        cancel: function() {}
    });

    parent.set('formViewModel', formViewModel);
})(app.formView);