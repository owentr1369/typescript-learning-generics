// Code
// const names: Array<string> = ["Max", "Manu"];

// // names[0].split(" ");

// // console.log(names[0].split(" "));

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });

// console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value!";
  if (element.length === 1) {
    descriptionText = "Got 1 element!";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements!";
  }
  return [element, descriptionText];
}

// console.log(countAndDescribe("Hi there!"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value " + obj[key];
}

// console.log(extractAndConvert({ name: "Max" }, "name"));

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Manu");

// console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

const objStorage = new DataStorage<object>();

objStorage.addItem({ name: "Max" });
objStorage.addItem({ age: 30 });

console.log(objStorage.getItems());
