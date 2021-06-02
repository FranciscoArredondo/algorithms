export default class InsertionSort<T> {
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

  swap(arr: Array<T>, i: number, j: number): void {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
}
