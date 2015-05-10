'use strict';

app.formView = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var formViewModel = kendo.observable({
        fields: {
            letterEntered: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('formViewModel', formViewModel);
})(app.formView);