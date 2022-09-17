import { resolveModuleName } from "typescript";

// Code
const names: Array<string> = ["Max", "Manu"];

// names[0].split(" ");

console.log(names[0].split(" "));

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});
