import BubbleSort from "./BubbleSort";

test("should not modify the source array", () => {
  const unsorted = [2, 9, 7, 0, 3, 6, 1, 8, 7, 1, 2];
  BubbleSort.sort(unsorted);
  expect(unsorted).toStrictEqual([2, 9, 7, 0, 3, 6, 1, 8, 7, 1, 2]);
});

test("should return a sorted copy of the source array", () => {
  const unsorted = [2, 9, 7, 0, 3, 6, 1, 8, 7, 1, 2];
  const sorted = BubbleSort.sort(unsorted);
  expect(sorted).toStrictEqual([0, 1, 1, 2, 2, 3, 6, 7, 7, 8, 9]);
});
