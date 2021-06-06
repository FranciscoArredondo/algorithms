import BinarySearch from "./BinarySearch";
import BubbleSort from "./BubbleSort";
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

console.log(`\n/******* Binary Search *******/`);
const arr4 = [
  1, 4, 5, 6, 8, 8, 10, 13, 13, 18, 18, 18, 20, 20, 21, 22, 23, 23, 26, 26, 26,
  26, 27, 28, 29, 29, 29, 32, 33, 35, 38, 38, 39, 39, 40, 41, 42, 42, 44, 47,
  49, 50, 50, 50, 50, 50, 50, 51, 51, 52, 52, 52, 53, 53, 54, 54, 56, 58, 59,
  59, 60, 61, 61, 62, 65, 65, 66, 68, 70, 70, 70, 71, 73, 73, 73, 74, 75, 76,
  77, 78, 79, 79, 81, 82, 83, 84, 85, 85, 88, 89, 89, 90, 90, 91, 95, 95, 97,
  98, 98, 100,
];

const binarySearch = new BinarySearch();
const result = binarySearch.search(arr4, 98);
