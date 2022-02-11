const fs = require("fs");

const write = (array, path) => {
	fs.writeFileSync(path, JSON.stringify(array));
};

const read = (path) => {
	const data = fs.readFileSync(path);
	const array = JSON.parse(data);
	return array;
};

module.exports = { write, read };
