const path = require("path");
console.log(path.sep);
const filepath = path.join("./js course", "subfolder", "test.txt");
console.log(filepath);
const base = path.basename(filepath);
console.log(base);
const absoulte = path.resolve(__dirname, "subfolder", "test.txt");
console.log(absoulte);
