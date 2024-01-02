// var singleNonDuplicate = function (nums) {
//   let start = 0;
//   let end = nums.length - 1;

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     let lessnumcheck = nums[mid] === nums[mid - 1];
//     let gtenumcheck = nums[mid] === nums[mid + 1];
//     let isEven = (mid - start) % 2 === 0;
//     let isOdd = (mid - start) % 2 === 1;

//     if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
//       return nums[mid];
//     } else if ((gtenumcheck && isOdd) || (lessnumcheck && isEven)) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return -1;
// };

var singleNonDuplicate = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
          return nums[mid];
      } else if (nums[mid] === nums[mid - 1]) {
          if ((mid - start) % 2 === 0) {
              end = mid - 1;
          } else {
              start = mid + 1;
          }
      } else if (nums[mid] === nums[mid + 1]) {
          if ((end - mid) % 2 === 1) {
            end = mid - 1;
          } else {
            start = mid + 1;
          }
      }
  }
  return -1;
};

console.log(singleNonDuplicate([3,3,7,7,10,11,11]));
