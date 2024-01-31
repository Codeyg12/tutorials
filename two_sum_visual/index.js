const bruteForceBtn = document.getElementById('brute-force-btn')
const bruteForceNumber = document.querySelector('#brute-force-output > .numbers-array')
const bruteForceText = document.querySelector('#brute-force-output > .results-text')
const testArray = [11, 15, 2, 7]
const testTarget = 9
let currentNum
let currentComplement

let twoSum = function(nums, target) {
    if (nums.length === 2) return [0, 1]

    for (let i = 0; i < nums.length; i++) {
        const currentEl = nums[i]
        for (let j = i + 1; j < nums.length; j ++) {
            if (currentEl + j === target) return [i, j]     
        }
    }
};

const getClassName = num => {
    switch (num) {
        case currentNum:
            return "class='current-num"
            
            break;
        case currentComplement:
            return "class='complement-num'"
            break;
        default:
            return ""
            break;
    }
}

twoSum([2,7,11,15], 9)
twoSum([3, 2, 4], 6)
twoSum([3, 3], 6)
twoSum([3, 5, 6, 5, 3], 10)