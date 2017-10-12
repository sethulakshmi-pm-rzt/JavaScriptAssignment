//RUN THIS PGM BY USING TERMINAL, 
//cd git => cd Java JavaScriptAssignment => node DataFromCSVfile.html, 
//don't delete input.txt file.

//Vinoj, Licence for webstorm, 1000, 2
//Vinoj, Food and expences, 500, 1
//Vinoj, Notebook, 20, 5
//Nanha, Licence for UX PIN, 2000, 4
//Nanha, Travel expences, 250, 1
//Nanha, Food and expences, 400, 2

//Above data will be in a csv file.generate the following data using the above csv file.
//{
//  "Vinoj": [
//    { "desc": "Licence for webstorm", "price": "1000", "quantity": "2" },
//    { "desc": "Food and expences","price": "500","quantity": "1"},
//    { "desc": "Notebook", "price": "20", "quantity": "5"}
//  ],
//  "Nanha": [
//    { "desc": "Licence for UX PIN", "price": "2000", "quantity": "4"},
//    { "desc": "Travel expences", "price": "250", "quantity": "1"},
//    { "desc": "Food and expences", "price": "400", "quantity": "2"}
//  ]
//}

var fs = require("fs");

const getLines = (data = "") => data.split('\n')
const parseFile = (lines = []) => lines.reduce((acc, line) => {
	const [name, desc, price, quantity] = line.split(",").map(i => i.trim());
	acc[name] = acc[name] || [];
	acc[name].push({desc, price, quantity})
	return acc;
}, {})

fs.readFile("input.txt", function (err, data) {
	if(err) {
		return console.log("Errorrrr : \n", err)
	}
	const lines = getLines(data.toString());
	const formated = parseFile(lines);
	console.log('Result\n', formated);
})