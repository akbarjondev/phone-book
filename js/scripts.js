// functions
var getObject = function(selector, node = document) {
	return document.querySelector(selector);
}

var getObjects = function(selector, node = document) {
	return document.querySelectorAll(selector);
}

// general variables
var form = getObject('.form');
var submitButton = getObject('.btn', form);
var alertList = getObject('.alert-list');

// database
var phoneBook = [];

form.addEventListener('submit', function(evt) {
	evt.preventDefault();
	
	// objects
	var inputName =  getObject('#input-name', form).value;
	var inputSurname =  getObject('#input-surname', form).value;
	var inputNumber =  getObject('#input-number', form).value;
	var inputRelation =  getObject('#input-relation', form).value;

	phoneBook.push({
		name: inputName.trim(),
		surname: inputSurname.trim(),
		number: inputNumber.trim(),
		relation: inputRelation.trim()
	});

	alertList.innerHTML = '';

	for(var i = 0; i < phoneBook.length; i++) {
		var elLi = document.createElement('li');
		var text = `${phoneBook[i].name} ${phoneBook[i].surname} ${phoneBook[i].number} ${phoneBook[i].relation}`;
		elLi.textContent = text;
		alertList.appendChild(elLi);
	}
});

