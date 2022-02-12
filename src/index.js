const { read } = require("./utils");
const Trie = require("./Trie");
const prompt = require("prompt-sync")({ sigint: true });

const trie = new Trie();
const words = read("./words.txt");
for (const word of words) trie.insert(word);

console.log("TRIE READY");

let QUERY = "";
let GRAY_CHARS = "";
let YELLOW_CHARS = "";
let CURRENT = 0;
let OPTION = "";
// "q": "Reset Query"
// "g": "Reset Gray Character Set"
// "y": "Reset Green Charcter Set"

do {
	switch (OPTION) {
		case "q":
			QUERY = prompt("Query: ");
			break;
		case "g":
			GRAY_CHARS = prompt("Characters Don't Exits (Grays): ");
			break;
		case "y":
			YELLOW_CHARS = prompt("Characters Exist (Yellow): ");
			break;
		default:
			QUERY = prompt("Query: ");
			GRAY_CHARS = prompt("Characters Don't Exits (Grays): ");
			YELLOW_CHARS = prompt("Characters Exist (Yellow): ");
	}
	console.log(QUERY);
	console.log(GRAY_CHARS);
	console.log(YELLOW_CHARS);
	const results = trie.search(QUERY, GRAY_CHARS, YELLOW_CHARS);
	console.log(results);
	OPTION = prompt("Option: ");
	CURRENT++;
} while (CURRENT < 10);
