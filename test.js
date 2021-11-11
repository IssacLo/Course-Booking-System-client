let arr = [5, 12, 5, 7, 58, 79, 870, 436, 35];
let arr2 = [5, 125, 5, 436, 34, 67];
let arr3 = [1, 6, 43, 34, 5, 2];

// arr.map((ele) => {
//   ans += ele;
// });

// console.log(ans);

function hi(arr) {
  let ans = 0;
  arr.map((e) => {
    ans += e;
  });
  return ans;
}
console.log(hi(arr3));
