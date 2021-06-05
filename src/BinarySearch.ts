export default class BinarySearch<T> {
  search(arr: Array<T>, query: T) {
    const low = 0,
      high = arr.length - 1;

    console.log(`Starting a binary search for ${query}.`);

    const result = this.binarySearch(arr, low, high, query);

    if (result) {
      console.log(`Value ${query} was found in the array!`);
    } else {
      console.log(`Value ${query} was NOT found in the array!`);
    }

    return result;
  }

  binarySearch(
    arr: Array<T>,
    low: number,
    high: number,
    query: T
  ): T | undefined {
    const mid = Math.floor((high + low) / 2);
    if (arr[mid] === query) return query;
    if (low === mid || high === mid) return undefined;
    if (arr[mid] > query) {
      return this.binarySearch(arr, low, mid, query);
    } else {
      return this.binarySearch(arr, mid, high, query);
    }
  }
}
