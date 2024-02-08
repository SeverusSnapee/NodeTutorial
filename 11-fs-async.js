//async fs
//file module
//sync
const { readFile, writeFile } = require("fs");
console.log("Start");
readFile("./subfolder/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(`Path is wrong`);
    return;
  }
  const first = result;
  readFile("./subfolder/sec.txt", "utf8", (err, result) => {
    if (err) {
      return;
    }
    const sec = result;
    writeFile(
      "./subfolder/resultasync.txt",
      `the result is : ${first},${sec}`,
      (err) => {
        if (err) {
          return err;
        }
        console.log("Task done");
      }
    );
  });
});
console.log("Starting next task");
