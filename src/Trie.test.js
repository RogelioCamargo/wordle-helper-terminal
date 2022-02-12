const Trie = require("./Trie");

describe("Trie", () => {
	let trie = new Trie();
	trie.insert("major");
	trie.insert("macro");
	trie.insert("miner");

	test("insert", () => {
		let charNode = trie.root.children.get("m");
		expect(charNode).toBeDefined();
		expect(charNode.children.size).toBe(1);

		charNode = charNode.children.get("a");
		expect(charNode).toBeDefined();
		expect(charNode.children.size).toBe(2);

		charNode = charNode.children.get("j");
		expect(charNode).toBeDefined();

		charNode = charNode.children.get("o");
		expect(charNode).toBeDefined();

		charNode = charNode.children.get("r");
		expect(charNode).toBeDefined();
		expect(charNode.isWord).toBe(true);
	});

	test.only("search", () => {
		expect(trie.search("m....")).toEqual(["major", "macro", "miner"]);
		expect(trie.search("ma...")).toEqual(["major", "macro"]);
		expect(trie.search("about")).toEqual([]);
		expect(trie.search("ma..r")).toEqual(["major"]);
	});

	test("remove", () => {
		trie.remove("major");

		let charNode = trie.root.children.get("m");
		expect(charNode).toBeDefined();
		expect(charNode.children.size).toBe(1);

		charNode = charNode.children.get("a");
		expect(charNode).toBeDefined();
		expect(charNode.children.size).toBe(1);

		charNode = charNode.children.get("j");
		expect(charNode).toBeUndefined();

		trie.remove("macro");

		expect(trie.root.children.get("m")).toBeUndefined();
		expect(trie.root.children.size).toBe(0);
	});
});
