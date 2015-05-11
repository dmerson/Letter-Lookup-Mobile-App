"use strict";

app.formView = kendo.observable({
	onShow: function() {}
});
var convert = {
	GetWordValue: function(valueToCheck) {
		var finalTally = 0;
		var lengthOfValue = valueToCheck.length;
		
		for (lengthOfValue; lengthOfValue > 0; lengthOfValue--) {
			var addToFinal = convert.GetLetterValue(valueToCheck[lengthOfValue -1]);
			
				finalTally = finalTally + addToFinal;
			
		}
		return finalTally;

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
			case "m":
			case "p":
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

		
			formViewModel.fields.set("result", convert.GetWordValue(formViewModel.fields.letterEntered.toLowerCase()));


		},
		cancel: function() {}
	});

	parent.set("formViewModel", formViewModel);
})(app.formView);