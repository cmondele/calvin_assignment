
var fruit = ["banana", "apple", "orange", "watermelon"];

var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.splice(3,3);

fruit.splice(0,1);
fruit.push(1);
vegetables.push(3);

function removeString(food) {
   food.splice(0,2);
   return food;
}

var food = vegetables.concat(fruit);


console.log(vegetables);
console.log(fruit);
console.log(fruit.indexOf("orange"));
console.log(vegetables.length);
console.log(removeString(food));











