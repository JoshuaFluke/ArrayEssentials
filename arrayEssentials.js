//Array Essentials

//indexOf - Checks the array to see if something exists or notApple
var pizzaIngredients = ['cheese','sauce','pepperoni','sausage','jalapenos','dough'] //checking for spice
if ( pizzaIngredients.indexOf('jalapenos' > -1) ){ //is there spice?
  console.log('Too spicy, no thanks'); //spice confirminati
  pizzaIngredients.splice(pizzaIngredients.indexOf('jalapenos'), 1) //remove that spice!
  console.log(pizzaIngredients) //check to make sure it's gone
  console.log('Now we\'re good'); //Yup
}

//forEach - Loops over each item in array, the data can be modified during the loop
var fruits = ['banana', 'apple', 'orange', 'strawberry'];
var notApple = 0;
fruits.forEach(function(fruit) {
    if ( fruit != 'apple'){
      console.log(notApple);
      notApple++;
    }
});


//Map function - Good for rearranging data into new variable
var numbers = [1,2,3,4,5];  //We are going to change this, but put it into a new variable

var afterMath = numbers.map(function(num){ //the new array
  return num + 1  //you HAVE to return
})
console.log(afterMath);

//Array of objects Example
var old = [
  {
    firstName:"Joshua",
    lastName:"Fluke"
  },
  {
    firstName:"Benny",
    lastName:"Benjamin"
  },
  {
    firstName:"Jerricho",
    lastName:"Jezzawittz"
  },
];

function newAndPretty(){

    return old.map(function(item){
        item.fullName = [item.firstName,item.lastName].join(" - "); //Making a new item with first name and last name called fullName
        return item;
    });

}
console.log(newAndPretty());

//Filter Function - Good for dropping certain values
//simple number check
//create callback
function check(num){
  return num > 90
}
//data to filter
var numFilter = [32, 2, 98, 119, 54].filter(check); //Pass function into filter parameter, this is known as a callback
console.log(numFilter);
// numFilter is [98, 119]

//callback
function vegetableFilter(foods) {
   return foods.type == 'meat';
}
//data to filter
foods = [
 {
   name: 'chicken',
   type: 'meat',
   price: '3.99 lb',
 },
 {
   name: 'pork',
   type: 'meat',
   price: '2.99 lb',
 },
 {
   name: 'carrot',
   type: 'vegetable',
   price: '.99 lb',
 },
].filter(vegetableFilter);
