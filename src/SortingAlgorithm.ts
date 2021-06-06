export default abstract class SortingAlgorithm<T> {
  public swap(arr: Array<T>, i: number, j: number): void {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
}
