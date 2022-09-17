"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Code
const names = ["Max", "Manu"];
// names[0].split(" ");
console.log(names[0].split(" "));
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 2000);
});
promise.then((data) => {
    data.split(" ");
});
