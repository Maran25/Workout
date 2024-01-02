
var singleNonDuplicate = function (nums) {
    // Call the search function with the given array and the start and end indices
    const ans = search(nums, 0, nums.length - 1);
    return ans;
};

function search(arr, start, end) {
    // Base case: If the start index is greater than the end index, return -1 as there is no non-duplicate element
    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);

    // If the element at the mid index is not equal to its adjacent elements, return the element at the mid index
    if (arr[mid - 1] !== arr[mid] && arr[mid + 1] !== arr[mid]) {
        return arr[mid];
    }

    // If the element at the mid index is equal to its previous element, check if the number of elements between the start and the mid index is odd
    else if (arr[mid - 1] === arr[mid]) {
        // If the number of elements is odd, search for the non-duplicate element in the second half of the array
        if ((mid - start) % 2 !== 0) {
            return search(arr, mid + 1, end);
        }
        // If the number of elements is even, search for the non-duplicate element in the first half of the array
        else {
            return search(arr, start, mid - 2);
        }
    }

    // If the element at the mid index is equal to its next element, check if the number of elements between the mid index and the end index is odd
    else if (arr[mid + 1] === arr[mid]) {
        // If the number of elements is odd, search for the non-duplicate element in the first half of the array
        if ((end - mid) % 2 !== 0) {
            return search(arr, start, mid - 1);
        }
        // If the number of elements is even, search for the non-duplicate element in the second half of the array
        else {
            return search(arr, mid + 2, end);
        }
    }
}

console.log(singleNonDuplicate([1, 1, 2, 2, 3])); // Output