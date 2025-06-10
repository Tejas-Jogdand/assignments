/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  let finalArr = [];
  let totalByCategory = {};

  for (let tnx of transactions) {
    let category = tnx.category;
    let price = tnx.price;

    if (totalByCategory.)
      totalByCategory.category += price;
    else
      totalByCategory.category = price;
  }

  console.log(totalByCategory);

  for(const category in totalByCategory){
    finalArr.push({category: category, totalspend : totalByCategory.category});
  }
  return finalArr;
}

const transactions = [
  { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, timestamp: 1656163200000, price: 20, category: 'Clothing', itemName: 'Shirt' },
  { id: 3, timestamp: 1656249600000, price: 15, category: 'Food', itemName: 'Burger' }
];

console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
