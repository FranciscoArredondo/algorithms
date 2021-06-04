import SortingAlgorithm from "./SortingAlgorithm";

export default class BubbleSort<T> extends SortingAlgorithm<T> {
  sort(arr: any[]): void {
    let hasSwapped: boolean;
    do {
      hasSwapped = false;
      for (let i = 0; i + 1 < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
          this.swap(arr, i, i + 1);
          hasSwapped = true;
        }
      }
    } while (hasSwapped);
  }
}
