const Trie = require("./Trie");

describe("Trie", () => {
	let trie = new Trie();
	trie.insert("major");
	trie.insert("macro");
	trie.insert("miner");
	trie.insert("maker");

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
		expect(trie.search("m....")).toEqual(["major", "macro", "maker", "miner"]);
		expect(trie.search("m....", "i")).toEqual(["major", "macro", "maker"]);
		expect(trie.search("ma...")).toEqual(["major", "macro", "maker"]);
		expect(trie.search("about")).toEqual([]);
		expect(trie.search("maker")).toEqual(["maker"]);
		expect(trie.search("m...r", "ij")).toEqual(["maker"]);
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
