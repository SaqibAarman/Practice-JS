/* BUBBLE SORT */

function swap(arr, firstIndex, secondIndex) {
  const temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

function bubbleSort(arr) {
  let len = arr.length;

  let i, j;
  for (i = 0; i < len - 1; i++) {
    for (j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

// console.log(bubbleSort([2, 4, 5, 1, 3, 9, 7, 8, 6]));
console.log(bubbleSort([40, 50, 20, 0, -10, 30, 10])); // Time Complexity ---> O(n)
