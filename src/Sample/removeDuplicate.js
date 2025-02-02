var removeDuplicates = function(nums) {
    const expectedNums = [];
    let frequency = {};
    for(let i=0; i<nums.length; i++) {
         if(!frequency[nums[i]]) {
             expectedNums.push(nums[i]);
             frequency[nums[i]] = 1;
         } else {
             frequency[nums[i]]++;
         }
    }
    let expectLength = expectedNums.length;
    let length = nums.length - expectLength;
    while(length > 0) {
        expectedNums.push('_');
        length--;
    }
    return expectedNums;
};

var removeDuplicate = function(nums) {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) { //  If the elements are not equal then copy the unique element by then to "i+1" position
            nums[++i] = nums[j];
        }
    }
    return i + 1;
};

var removeElement = function(nums, val) {
    let j = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] !== val) {
            nums[++j] = nums[i];
        }
    }
    return j+1;
};

console.log(removeDuplicate([0,0,1,1,1,2,2,3,3,4]));