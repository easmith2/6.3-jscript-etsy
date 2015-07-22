// create an array of all item prices
var arrOfPrices = items.map(function(el) {
  return el.price;
});
// sum the array of all item prices
var finalSum = arrOfPrices.reduce(function(accm,curr) {
  return accm += curr;
});
// create and populate an array of all items between $14 and $18
var filteredItems = [];
items.map(function(el) {
  if(el.price > 14 && el.price < 18) {
    filteredItems.push('\nTitle: ' + el.title);
  }
});
// create and populate an array of all items with a GBP currency code
var gbpItems = []
items.filter(function(el) {
  if(el.currency_code === "GBP") {
    gbpItems.push('Title: ' + el.title + ', Price:' + el.price);
  };
});
// create and populate an array of all items for which materials include 'wood'
var woodItems = []
items.filter(function(el) {
  if(el.materials.indexOf('wood') !== -1) {
    woodItems.push('\nTitle: ' + el.title);
  };
});
// create and populate an array of all items with 8 or more materials
var octoMaterialItems = []
items.filter(function(el) {
  if(el.materials.length >= 8) {
    octoMaterialItems.push('\nTitle: ' + el.title + '\nMade of ' + el.materials.length + ' materials: ' + el.materials);
  };
});
// create and populate an array of all items made by the seller
var madeBySeller = []
items.filter(function(el) {
  if(el.who_made === "i_did") {
    madeBySeller.push(el.title);
  };
});
// store all answers in single array
answers = [
  finalSum / arrOfPrices.length,
  filteredItems,
  gbpItems,
  woodItems,
  octoMaterialItems,
  madeBySeller.length
]
// display the answers on the page
for(var i = 1; i <= 6; i ++) {
  document.getElementById('answer' + i).innerHTML = answers[i-1]
}
