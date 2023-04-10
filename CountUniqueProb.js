/* ----------- COUNT UNIQUE NUMBER IN AN ARRAY ---------------- */

// [1,1,1,2,3,4,4,5,5,6,8,8] ---> Input (Sorted Array)

// Output ---> 9

/* 
   CONDITIONAL STEPS :-

   1] i=0 , j=1 ---> if arr[i] === arr[j] ==> increment ( j++ );

   2] arr[i] !== arr[j]
      then increment ( i++ ) and also replace value 
      ---> arr[i] = arr[j]
*/

function countUniqueNum(arr) {
  if (arr.length) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  } else {
    console.log("Array Is Empty");
  }
}

const result = countUniqueNum([
  1, 1, 1, 2, 3, 4, 4, 5, 5, 6, 8, 8, 9, 10, 11, 11, 12,
]);
console.log(result); // O/P --> 11  && Time Complexity ---> o(n)
