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
// "q": "Reset Query"
// "g": "Reset Gray Character Set"
// "y": "Reset Green Charcter Set"

do {
	switch (userOption) {
		case "q":
			wordleGreenCharacters = prompt("Query: ");
			break;
		case "g":
			wordleGrayCharacters = prompt("Characters Don't Exits (Grays): ");
			break;
		case "y":
			wordleYellowCharacters = prompt("Characters Exist (Yellow): ");
			break;
		default:
			wordleGreenCharacters = prompt("Query: ");
			wordleYellowCharacters = prompt("Characters Exist (Yellow): ");
			wordleGrayCharacters = prompt("Characters Don't Exits (Grays): ");
	}
	console.log("\n--- FILTERS ---");
	console.log(wordleGreenCharacters !== "." ? wordleGreenCharacters : ".....");
	console.log(wordleYellowCharacters || ".....");
	console.log(wordleGrayCharacters || ".....");
	const results = trie.search(
		wordleGreenCharacters,
		wordleYellowCharacters,
		wordleGrayCharacters
	);
	console.log("\n--- RESULTS ---");
	console.log(results);
	console.log("\n--- MENU ---");
	userOption = prompt("Option: ");
} while (userOption !== ":q");

// Destory Trie
for (const word of words) trie.remove(word);
console.log("\n---TRIE DESTROYED---");
