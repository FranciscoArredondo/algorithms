import SortingAlgorithm from "./SortingAlgorithm";

export default class InsertionSort<T> extends SortingAlgorithm<T> {
  sort(arr: Array<T>): void {
    for (let i = 1; i < arr.length; i++) {
      let next = i;
      while (next - 1 > 0) {
        if (arr[next] < arr[next - 1]) {
          this.swap(arr, next, next - 1);
        }
        break;
      }
    }
  }
}
