class TrieNode {
	constructor() {
		this.children = new Map();
		this.isWord = false;
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode();
	}

	insert(word) {
		if (!word.length) return null;
		this.insertNode(this.root, word.toLowerCase(), 0);
	}

	insertNode(current, word, index) {
		if (index === word.length) {
			current.isWord = true;
			return null;
		}

		const char = word.charAt(index);
		let charNode = current.children.get(char);

		if (!charNode) {
			charNode = new TrieNode();
			current.children.set(char, charNode);
		}

		this.insertNode(charNode, word, index + 1);
	}

	search(word) {
		if (!word.length) return null;
		return this.searchNode(this.root, word.toLowerCase(), null);
	}

	searchNode(current, word, index) {
		if (index === word.length)
			return current.isWord;

		const char = word.charAt(index);
		const charNode = current.children.get(char);

		if (!charNode) return false;
		else return this.searchNode(charNode, word, index + 1);
	}

	remove(word) {
		if (!word.length) return null;
		this.removeNode(this.root, word.toLowerCase(), 0);
	}

	removeNode(current, word, index) {
		if (index === word.length) {
			current.isWord = false;
			return null;
		}

		const char = word.charAt(index);
		let charNode = current.children.get(char);

		if (!charNode) return null;
		else this.removeNode(charNode, word, index + 1);

		if (!charNode.isWord && !charNode.children.size)
			current.children.delete(char);
	}
}

module.exports = Trie;
