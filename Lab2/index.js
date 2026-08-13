import fs from "fs/promises";
import { writeFile, readFile, appendFile } from "fs/promises";

// fs -> file system

await writeFile("stud.txt", "Astha Gupta\nRoll No: 2503201000340\nClass: CSE-14");
 console.log("File Written");

const data = await readFile("stud.txt", "utf-8");
console.log(`file content: ${data}`);

const addContent = async (fname, content) => {
  await writeFile(fname, content);
  console.log(`${content} written in ${fname}`);
};

const readContent = async (fname) => {
  const data = await readFile(fname, "utf-8");
  return data;
};

const appendData = async (fname, content) => {
  await appendFile(fname, "\n" + content);
  console.log("data appended");
};
await addContent("notes.txt", "FS is easy in JS");
console.log("Contents\n", await readContent("notes.txt"));
await appendData("notes.txt", "it can add,read and update content");
console.log("Updated Contents\n", await readContent("notes.txt"));
