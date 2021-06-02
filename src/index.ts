import InsertionSort from "./InsertionSort";
import SelectionSort from "./SelectionSort";

console.log(`\n/******* Selection Sort *******/`);
const arr = [3, 5, 7, 9, 2, 1, 7, 2, 4, 8, 10];
const selectionSort = new SelectionSort();
console.log(`Original: ${arr.toString()}`);
selectionSort.sort(arr);
console.log(`Sorted:   ${arr.toString()}`);

console.log(`\n/******* Insertion Sort *******/`);

const arr2 = [2, 9, 7, 0, 3, 6, 1, 8, 7, 1, 2];
const insertionSort = new InsertionSort();
console.log(`Original: ${arr2.toString()}`);
selectionSort.sort(arr2);
console.log(`Sorted:   ${arr2.toString()}`);
