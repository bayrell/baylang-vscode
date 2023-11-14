const fs = require("fs");
const path = require("path");

function readKeywords()
{
	let content = fs.readFileSync("keywords.txt", 'utf-8');
	let arr = content
		.split("\n")
		.map( (s) => { return s.trim() } )
		.filter( (s) => { return s != "" } )
	;
	return arr;
}
let keywords = readKeywords();

console.log( keywords.join("|") );
