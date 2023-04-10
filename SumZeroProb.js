/* ----------- CHECKING SUM OF ZERO ---------------- */
// [-5, -4, -3, -2, 0, 2, 3, 4, 6, 8] ---> Input (Sorted Array)

// Normal Solution :-

// function getSumZeroPair(arr) {
//   for (const num of arr) {
//     for (let j = 1; j < arr.length; j++) {
//       if (num + arr[j] === 0) {
//         return [num, arr[j]];
//       }
//     }
//   }
// }

// const result = getSumZeroPair([-5, -4, -3, -2, 0, 2, 3, 4, 6, 8]);
// console.log(result);  // ----> Quadratic Time Complexity ---> o(n^2)

// Optimized Solution

// [-5, -4, -3, -2, 0, 2, 3, 4, 6, 8] ---> Input (Sorted Array)

function findSumZeroPair(arr) {
  let sortedArr = arr.sort((a, b) => a - b); // ---> Sort If Array Is UnSorted

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    sum = sortedArr[left] + sortedArr[right];

    if (sum === 0) {
      return [sortedArr[left], sortedArr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const result = findSumZeroPair([-5, -4, 0, 2, 3, -3, -2, 4, -6, 8]);
console.log(result); // ----> Time Complexity ---> o(n)
