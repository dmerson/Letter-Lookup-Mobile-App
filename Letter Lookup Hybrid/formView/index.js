"use strict";

app.formView = kendo.observable({
	onShow: function() {}
});
var convertModel = {
	GetValue: function(valueToCheck) {
		debugger;
		var lengthOfValue = valueToCheck.length;
		for (lengthOfValue; lengthOfValue > 0; lengthOfValue--) {
			console.log(lengthOfValue);
		}

	},
	GetLetterValue:function(letterToCheck) {
		switch (letterToCheck) {
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
					
					return 1;
					break;
				}
			case "d":
			case "g":
				{
					
					return 2;
					break;
				}
			case "d":
			case "g":
			case "b":
			case "c":
				{
					
					return 3;
					break;
				}
			case "f":
			case "h":
			case "v":
			case "w":
			case "y":
				{
					
					return 4;
					break;
				}
			case "k":
				{
					
					return 5;
					break;
				}
			case "j":
			case "x":
				{
					
					return 8;
					break;
				}
			case "q":
			case "z":
				{
					
					return 10;
					break;
				}
			default:
				{
					
					return NaN;
					break;
				}
		}
	}
};
(function(parent) {
	var formViewModel = kendo.observable({
		fields: {
			letterEntered: "",
			result: ""
		},
		submit: function() {

			formViewModel.fields.set("result", convertModel.GetLetterValue(formViewModel.fields.letterEntered.toLowerCase()));


		},
		cancel: function() {}
	});

	parent.set("formViewModel", formViewModel);
})(app.formView);