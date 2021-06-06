import { swap } from "./Utils";

export default class BubbleSort<T> {
  static sort(arr: any[]): Array<any> {
    const copy = arr.slice();
    let hasSwapped: boolean;
    do {
      hasSwapped = false;
      for (let i = 0; i + 1 < copy.length; i++) {
        if (copy[i] > copy[i + 1]) {
          swap(copy, i, i + 1);
          hasSwapped = true;
        }
      }
    } while (hasSwapped);
    return copy;
  }
}
