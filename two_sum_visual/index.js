const bruteForceBtn = document.getElementById('brute-force-btn')
const bruteForceNumber = document.querySelector('#brute-force-output > .numbers-array')
const bruteForceText = document.querySelector('#brute-force-output > .results-text')
const testArray = [11, 15, 2, 7]
const target = 9
let currentNum
let currentComplement

const getClassName = num => {
    switch (num) {
        case currentNum:
            return "class='current-num'"
        case currentComplement:
            return "class='complement-num'"
        default:
            return ""
    }
}

const bruteForceApproach = async () => {
    for (let i = 0; i < testArray.length; ++i) {
        currentNum = testArray[i]
        for (let j = i + 1; j < testArray.length; ++j) {
            currentComplement = testArray[j]
            await new Promise(resolve => setTimeout(resolve, 1000))

            bruteForceNumber.innerHTML = testArray
            .map((num, i) => `
            <span ${getClassName(num)}>
            ${testArray[i]}
            </span>
            `).join("")
            bruteForceText.textContent = `Does the sum of ${currentNum} + ${currentComplement} = ${target}? NO!`
            if (currentNum + currentComplement === target) {
                bruteForceText.textContent = `Final indices: [${i}, ${j}]`
                return
            }
        }
    }
}

bruteForceBtn.addEventListener('click', bruteForceApproach)

let twoSum = function(nums, target) {
    if (nums.length === 2) return [0, 1]

    for (let i = 0; i < nums.length; i++) {
        const currentEl = nums[i]
        for (let j = i + 1; j < nums.length; j ++) {
            if (currentEl + j === target) return [i, j]     
        }
    }
};



twoSum([2,7,11,15], 9)
twoSum([3, 2, 4], 6)
twoSum([3, 3], 6)
twoSum([3, 5, 6, 5, 3], 10)