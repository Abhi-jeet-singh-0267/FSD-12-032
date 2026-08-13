// import { appendFile } from "fs";
// import{writeFile}from"fs/promises";
// await writeFile("hello.txt","JS is easy");
// await appendFile("hello.txt","\nFS is much easy than others");

import { writeFile, appendFile, readFile } from "fs/promises";

await writeFile("hello.txt", "JS is easy");
// await appendFile("hello.txt", "\nFS is much easier than others");
await appendFile("hello.txt", "\nAbhijeet singh");
const content=await readFile("hello.txt","utf-8");
console.log(content);

// console.log("File updated successfully.");
// console.log("😁");

