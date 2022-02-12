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
		const insertNode = (current, word, index) => {
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

			insertNode(charNode, word, index + 1);
		};

		if (!word.length) return null;
		insertNode(this.root, word.toLowerCase(), 0);
	}

	search(word) {
		const searchNode = (current, word, index) => {
			if (index === word.length) return current.isWord;

			const char = word.charAt(index);
			const charNode = current.children.get(char);

			if (!charNode) return false;
			else return searchNode(charNode, word, index + 1);
		};

		if (!word.length) return null;
		return searchNode(this.root, word.toLowerCase(), null);
	}

	remove(word) {
		const removeNode = (current, word, index) => {
			if (index === word.length) {
				current.isWord = false;
				return null;
			}

			const char = word.charAt(index);
			let charNode = current.children.get(char);

			if (!charNode) return null;
			else removeNode(charNode, word, index + 1);

			if (!charNode.isWord && !charNode.children.size)
				current.children.delete(char);
		};

		if (!word.length) return null;
		removeNode(this.root, word.toLowerCase(), 0);
	}
}

module.exports = Trie;
