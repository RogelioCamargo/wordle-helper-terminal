const { read } = require("./utils");
const prompt = require("prompt-sync")({ sigint: true });
const words = read("./words.txt");
const Trie = require("./Trie");
const trie = new Trie();

// Set Up Trie
for (const word of words) trie.insert(word);
console.log("--- TRIE READY ---");
console.log(`There are a total of ${trie.getCount()} words in the Trie!`);

let wordleGreenCharacters = "";
let validSet = "";
let wordleYellowCharacters = [];
let wordleGrayCharacters = "";
let userOption = "";

// display greetings and starter words
displayStarters();
do {
	switch (userOption) {
		case "q":
			wordleGreenCharacters = prompt("Query: ");
			break;
		case "y":
			validSet = prompt("Valid Characters (Yellow): ");
			if (validSet === ".") validSet = ".....";
			else wordleYellowCharacters.push(validSet);
			break;
		case "g":
			wordleGrayCharacters = prompt("Invalid Characters (Grays): ");
			break;
		default:
			wordleGreenCharacters = prompt("Query: ");
			validSet = prompt("Valid Characters (Yellow): ");
			if (validSet === ".") validSet = ".....";
			wordleYellowCharacters.push(validSet);
			wordleGrayCharacters = prompt("Invalid Characters (Grays): ");
	}
	// display fitlers
	displayFilters();
	const results = trie.search(
		wordleGreenCharacters,
		wordleYellowCharacters,
		wordleGrayCharacters
	);
	// display results
	console.log("\n--- RESULTS ---");
	console.log(results);
	// display menu and options
	displayMenu();
	userOption = prompt("Option: ");
} while (userOption !== ":q");

// Destory Trie
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
	console.log(wordleGreenCharacters !== "." ? wordleGreenCharacters : ".....");
	for(const set of wordleYellowCharacters)
		console.log(set);
	console.log(wordleGrayCharacters || ".....");
}
