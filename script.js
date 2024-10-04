const fullArrayElement = document.getElementById("full-array");
const evenElement = {
  array: document.getElementById("even-array"),
  min: document.querySelectorAll(".even-min"),
  max: document.querySelectorAll(".even-max"),
  sum: document.querySelectorAll(".even-sum"),
  avg: document.querySelectorAll(".even-avg"),
};
const oddElement = {
  array: document.getElementById("odd-array"),
  min: document.querySelectorAll(".odd-min"),
  max: document.querySelectorAll(".odd-max"),
  sum: document.querySelectorAll(".odd-sum"),
  avg: document.querySelectorAll(".odd-avg"),
};
const compareElement = {
  min: document.getElementById("compare-min"),
  max: document.getElementById("compare-max"),
  sum: document.getElementById("compare-sum"),
  avg: document.getElementById("compare-avg"),
};

const fullArray = Array.from({ length: 100 })
  .fill(0)
  .map(() => Math.floor(Math.random() * 50) + 1);

const { evenArray, oddArray } = separateArray(fullArray);

const even = generateMinMaxSumAvg(evenArray);
const odd = generateMinMaxSumAvg(oddArray);

fullArrayElement.textContent = fullArray.join(", ");
evenElement.array.textContent = evenArray.join(", ");
evenElement.min.forEach((element) => (element.textContent = even.min));
evenElement.max.forEach((element) => (element.textContent = even.max));
evenElement.sum.forEach((element) => (element.textContent = even.sum));
evenElement.avg.forEach((element) => (element.textContent = even.avg));
oddElement.array.textContent = oddArray.join(", ");
oddElement.min.forEach((element) => (element.textContent = odd.min));
oddElement.max.forEach((element) => (element.textContent = odd.max));
oddElement.sum.forEach((element) => (element.textContent = odd.sum));
oddElement.avg.forEach((element) => (element.textContent = odd.avg));

showCompareResult(even.min, odd.min, compareElement.min);
showCompareResult(even.max, odd.max, compareElement.max);
showCompareResult(even.sum, odd.sum, compareElement.sum);
showCompareResult(even.avg, odd.avg, compareElement.avg);

function showCompareResult(even, odd, element) {
  let sign;
  if (even < odd) sign = "<";
  else if (even > odd) sign = ">";
  else sign = "=";

  element.textContent = `${even} ${sign} ${odd}`;
}

function separateArray(array) {
  const evenArray = [];
  const oddArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      evenArray.push(array[i]);
    } else {
      oddArray.push(array[i]);
    }
  }
  return { evenArray, oddArray };
}

function generateMinMaxSumAvg(array) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) min = array[i];
    if (array[i] > max) max = array[i];
    sum += array[i];
  }
  let avg = sum / array.length;
  return { min, max, sum, avg };
}
