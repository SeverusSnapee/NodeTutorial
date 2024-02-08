//file module
//sync
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./subfolder/first.txt", "utf-8");
const second = readFileSync("./subfolder/sec.txt", "utf-8");
writeFileSync(
  "./subfolder/result-sync.txt",
  `Here is the result :${first},${second}`
);
console.log(first, second);
