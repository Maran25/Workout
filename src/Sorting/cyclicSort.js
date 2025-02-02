function cyclicSortV1(arr) {
    let i = 0;
    while(i < arr.length) {
        if(arr[i] !== i) {
            let temp = arr[arr[i]]
            arr[arr[i]] = arr[i]
            arr[i] = temp
            // [arr[i], arr[arr[i]-1]] = [arr[arr[i]-1], arr[i]]
        } else {
            i++;
        }
    }

    for(let i=0; i<arr.length; i++) {
        if(arr[i] === undefined) return i;
    }
    return arr.length;
}

// find missing number [3, 0, 1];

function cyclicSort(nums) {
    let i = 0;
    while(i < nums.length) {
        if(nums[i] < nums.length && nums[i] !== i) {
            let temp = nums[nums[i]]
            nums[nums[i]] = nums[i]
            nums[i] = temp
        } else {
            i++;
        }
    }
}

var findDisappearedNumbers = function(nums) {
    let i = 0;
    let result = [];

    while(i < nums.length) {
        let correct = nums[i] - 1;
        if(nums[correct] !== nums[i] && nums[i] <= nums.length && nums[i] !== nums[correct]) {
            swap(nums, i, correct)
        } else {
            i++;
        }
    }
    console.log(nums)

    for(let i=0; i<nums.length; i++) {
        if(nums[i] !== i+1) {
            result.push(i+1)
        }
    }
    return result
};

function swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

var firstMissingPositive = function(nums) {
    let i = 0;
    
    while(i < nums.length) {
        if(nums[i] > 0 && nums[i] !== nums[nums[i]-1]) {
            swap(nums, i, nums[i]-1)
        } else {
            i++
        }
    }
    for(let i=0; i<nums.length; i++) {
        if(nums[i] !== i+1) return i+1;
    }
    return nums.length+1;
};

function containsDuplicate(nums) {
    let slow = nums[0];
    let fast = nums[0];

    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow === fast) {
            return true;
        }

        if (fast === undefined || nums[fast] === undefined) {
            return false;
        }
    }
}

console.log(containsDuplicate([1,2,3,1]))