const bruteForceBtn = document.getElementById("brute-force-btn");
const bruteForceNumber = document.querySelector(
  "#brute-force-output > .numbers-array"
);
const bruteForceText = document.querySelector(
  "#brute-force-output > .results-text"
);
const optimalSolutionBtn = document.getElementById("optimal-visual-btn");
const currentValueOutput = document.getElementById("current-value-output");
const finalOptimalResult = document.getElementById("final-optimal-result");
const table = document.getElementById("table-output");
const tableBodyOutput = document.getElementById("map-table-body");
const testArray = [11, 15, 2, 7];
const target = 9;
let currentNum;
let currentComplement;

const getClassName = (num) => {
  switch (num) {
    case currentNum:
      return "class='current-num'";
    case currentComplement:
      return "class='complement-num'";
    default:
      return "";
  }
};

const bruteForceApproach = async () => {
  bruteForceBtn.setAttribute("disabled", "");
  for (let i = 0; i < testArray.length; ++i) {
    currentNum = testArray[i];
    for (let j = i + 1; j < testArray.length; ++j) {
      currentComplement = testArray[j];
      await new Promise((resolve) => setTimeout(resolve, 1000));

      bruteForceNumber.innerHTML = testArray
        .map(
          (num, i) => `
            <span ${getClassName(num)}>
            ${testArray[i]}
            </span>
            `
        )
        .join("");
      bruteForceText.textContent = `Does the sum of ${currentNum} + ${currentComplement} = ${target}? NO!`;
      if (currentNum + currentComplement === target) {
        bruteForceText.textContent = `Final indices: [${i}, ${j}]`;
        bruteForceBtn.removeAttribute("disabled");
        return;
      }
    }
  }
};

bruteForceBtn.addEventListener("click", bruteForceApproach);

const optimalApproach = async () => {
  optimalSolutionBtn.setAttribute("disabled", "");
  table.style.display = "block";
  currentValueOutput.innerHTML = "";
  const map = new Map();

  for (let i = 0; i < testArray.length; ++i) {
    const difference = target - testArray[i];

    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (map.has(difference)) {
      finalOptimalResult.textContent = `Final indices: [${map.get(
        difference
      )}, ${i}]`;
      currentValueOutput.innerHTML = `
            <p>Difference(${difference}) = target(${target}) - current number(${testArray[i]})</p>
            <p>Is the difference(${difference}) in our map? YES, we found that pair of numbers that add up to the target.</p>`;
      optimalSolutionBtn.removeAttribute("disabled");
      return;
    } else {
      currentValueOutput.innerHTML = `
            <p>Difference(${difference}) = target(${target}) - current number(${testArray[i]})</p>
            <p>Is the difference(${difference}) in our map? NO.</p>
            <p>Add the current number ${testArray[i]} to our map.</p>`;
      tableBodyOutput.innerHTML += `
            <tr>
            <td>${testArray[i]}</td>
            <td>${i}</td>
            </tr>`;
      map.set(testArray[i], i);
    }
  }
};

optimalSolutionBtn.addEventListener("click", optimalApproach);
