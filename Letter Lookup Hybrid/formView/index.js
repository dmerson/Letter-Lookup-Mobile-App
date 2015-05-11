'use strict';

app.formView = kendo.observable({
    onShow: function () {}
});
(function (parent) {
    var formViewModel = kendo.observable({
        fields: {
            letterEntered: '',
            result: ''
        },
        submit: function () {

            switch (formViewModel.fields.letterEntered.toLowerCase()) {
                case "a":
                case "e":
                case "i":
                case "o":
                case "n":
                case "r":
                case "t":
                case "s":
                case "l":
                case "u":
                    {
                        formViewModel.fields.set("result", "1");
                        break;
                    }
                case "d":
                case "g":
                    {
                        formViewModel.fields.set("result", "2");
                        break;
                    }
                case "d":
                case "g":
                case "b":
                case "c":
                    {
                        formViewModel.fields.set("result", "3");
                        break;
                    }
                case "f":
                case "h":
                case "v":
                case "w":
                case "y":
					{
                        formViewModel.fields.set("result","4");
                        break;
                    }
                case "k":
                    {
                        formViewModel.fields.set("result","5");
                        break;
                    }
                case "j":
                case "x":
                    {
                        formViewModel.fields.set("result", "8");
                        break;
                    }
                case "q":
                case "z":
                    {
                        formViewModel.fields.set("result", "10");
                        break;
                    }
                default:
                    {
                        break;
                    }
            }


        },
        cancel: function () {}
    });

    parent.set('formViewModel', formViewModel);
})(app.formView);