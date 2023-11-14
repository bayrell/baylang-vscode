/*
const fs = require("fs");

function readKeywords()
{
	let content = fs.readFileSync("keywords.txt", 'utf-8');
	let arr = content
		.split("\n")
		.filter( (s) => { return s != "" } )
	;
	return arr;
}

vscode.languages.registerCompletionItemProvider('bay', {
	provideCompletionItems() {
		let keywords = readKeywords();
		keywords = keywords.map(item => new vscode.CompletionItem(item));
		return keywords;
	}
});*/