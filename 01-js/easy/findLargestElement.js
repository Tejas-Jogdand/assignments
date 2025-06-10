/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max = 0;
    numbers.forEach(i => {
        if(max<i)
            max=i
    });
    console.log(max);
}

const numbers = [3,7,2,9,1];

findLargestElement(numbers);

module.exports = findLargestElement;