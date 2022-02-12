const { read } = require("./utils");
const Trie = require("./Trie");

const trie = new Trie();
const words = read("./words.txt");
for (const word of words) 
	trie.insert(word);

console.log("TRIE READY");

// console.log(trie.search("pa.."));

