const { read } = require("./utils");
const prompt = require("prompt-sync")({ sigint: true });
const words = read("./words.txt");
const Trie = require("./Trie");
const trie = new Trie();

// Set Up Trie
for (const word of words) trie.insert(word);
console.log("--- TRIE READY ---");

let wordleGreenCharacters = "";
let wordleGrayCharacters = "";
let wordleYellowCharacters = "";
let userOption = "";

displayStarters();

do {
	switch (userOption) {
		case "q":
			wordleGreenCharacters = prompt("Query: ");
			break;
		case "y":
			wordleYellowCharacters = prompt("Valid Characters (Yellow): ");
			break;
		case "g":
			wordleGrayCharacters = prompt("Invalid Characters (Grays): ");
			break;
		default:
			wordleGreenCharacters = prompt("Query: ");
			wordleYellowCharacters = prompt("Valid Characters (Yellow): ");
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
	console.log("RATES\nTEARS\nTARES\nSTARE\nSTEAR\nSTRAY\n")
};

function displayMenu() {
	console.log("\n--- MENU ---");
	console.log(" q - Update Query");
	console.log(" g - Update Invalid Set");
	console.log(" y - Update Valid Set");
	console.log(":q - Exit Loop\n");
};

function displayFilters() {
	console.log("\n--- FILTERS ---");
	console.log(wordleGreenCharacters !== "." ? wordleGreenCharacters : ".....");
	console.log(wordleYellowCharacters || ".....");
	console.log(wordleGrayCharacters || ".....");
};