/* -------------- STRING ANAGRAM PROBLEM ---------------- */

// 'hello' ---> 'llleo'  ===> false ( bcz in both str same length and  but not having same characters )
// 'saqib' ---> 'qasib'  ===> true ( bcz in both str same length and same characters )

/* 
 ---> Steps
 1] Check Length Of Both String.
 2] Find In [String 1] ---> No. Of Characters 
    ex: 'hello' ===> { h:1, e: 1, l:2, o:1 }
    In [String 2] ---> Compare Characters with Str 1 --> If Found Decrement No.of Character value
    ex: Str 1 ['hello'] ===> { h:1, e: 1, l:2, o:1 } --->  Str 2 ['llheo']
    Str2 Contain 'l' --> So decrement Count in the Map ===> { h:1, e:1, l:1, o:1 } --> These Follows...
    Till Each Map Characters value turns too 0 

*/

// Solution :-

function isAnagram(str1, str2) {
  // Check Length Of Both Strings
  if (str1.length !== str2.length) return false;

  let counter = {};
  for (const letter of str1) {
    // console.log(letter);
    counter[letter] = (counter[letter] || 0) + 1;
    // console.log(counter);
  }
  // console.log(counter);

  for (const item of str2) {
    if (!counter[item]) {
      // console.log("Third l");
      return false;
    }

    counter[item]--;
  }

  return true;
}

// const check = isAnagram("hello", "llheo"); // ---> true
const check = isAnagram("saqib", "bqasi"); // ---> false
console.log(check); // ----> Linear Time Complexity ==> o(n)
