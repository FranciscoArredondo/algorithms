import SortingAlgorithm from "./SortingAlgorithm";

export default class SelectionSort<T> extends SortingAlgorithm<T> {
  sort(arr: Array<T>) {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i; j < arr.length; j++) {
        const currVal = arr[j];
        if (currVal < arr[min]) {
          min = j;
        }
      }
      if (min !== i) this.swap(arr, i, min);
    }
  }
}
