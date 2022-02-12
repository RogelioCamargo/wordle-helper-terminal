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

	search(word, grayChars = "", yelllowChars = "") {
		const grayRegex = new RegExp(`[${grayChars}]`);
		const yellowList = yelllowChars.split("");
		const lowerCaseWord = word.toLowerCase();
		const results = [];
		const searchNode = (current, chars, index) => {
			if (index === lowerCaseWord.length) {
				for (const yellowCh of yellowList)
					if (!chars.includes(yellowCh)) return null;
				
				results.push(chars);
				return null;
			}

			const char = lowerCaseWord.charAt(index);
			if (char === ".") {
				const keys = current.children.keys();
				for (const key of keys) {
					if (grayChars && grayRegex.test(key)) continue;
					const charNode = current.children.get(key);
					searchNode(charNode, chars + key, index + 1);
				}
			} else {
				if (grayChars && grayRegex.test(char)) return null;
				const charNode = current.children.get(char);
				if (!charNode) return null;
				else searchNode(charNode, chars + char, index + 1);
			}
		};

		if (!word.length) return null;
		searchNode(this.root, "", 0);
		return results;
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
