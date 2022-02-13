const { read } = require("./utils");
const prompt = require("prompt-sync")({ sigint: true });
const words = read("./words.txt");
const Trie = require("./Trie");
// create new trie
const trie = new Trie();

// set up trie
for (const word of words) trie.insert(word);
console.log("--- TRIE READY ---");
console.log(`There are a total of ${trie.getCount()} words in the Trie!`);

let query = "";
let validSet = "";
let validSetList = [];
let invalidSet = "";
let userOption = "";

// display greetings and starter words
displayStarters();
do {
	switch (userOption) {
		case "q":
			query = prompt("Query: ");
			break;
		case "y":
			validSet = prompt("Valid Characters (Yellow): ");
			if (validSet && validSet !== ".") validSetList.push(validSet);
			break;
		case "g":
			invalidSet = prompt("Invalid Characters (Grays): ");
			break;
		default:
			query = prompt("Query: ");
			validSet = prompt("Valid Characters (Yellow): ");
			if (validSet === ".") validSet = ".....";
			validSetList.push(validSet);
			invalidSet = prompt("Invalid Characters (Gray): ");
	}
	// display fitlers
	displayFilters();
	const results = trie.search(query, validSetList, invalidSet);
	// display results
	console.log("\n--- RESULTS ---");
	console.log(results);
	// display menu and options
	displayMenu();
	userOption = prompt("Option: ");
} while (userOption !== ":q");

// destroy trie
for (const word of words) trie.remove(word);
console.log("\n---TRIE DESTROYED---");

function displayStarters() {
	console.log("\n--- STARTERS ---");
	console.log("Many people found success starting with the following words:");
	console.log("RATES\nTEARS\nTARES\nSTARE\nSTEAR\nSTRAY\n");
}

function displayMenu() {
	console.log("\n--- MENU ---");
	console.log(" q - Update Query");
	console.log(" y - Update Valid Set");
	console.log(" g - Update Invalid Set");
	console.log(":q - Exit Loop\n");
}

function displayFilters() {
	console.log("\n--- FILTERS ---");
	console.log(query !== "." ? query : ".....");
	for (const set of validSetList) console.log(set);
	console.log(invalidSet || ".....");
}
