import countries from "./countries.js";
import data from "./weTech.js"

console.log(countries);
console.log(data.mySkills);



// First remove all the punctuations and change the string to array and count the number of words in the array
{

  let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
  let words = text.split(" ");
  console.log(words);
  console.log(words.length);
  
  


}




// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

{
  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
  if(!shoppingCart.includes("Meat")){
    shoppingCart.unshift("Meat")
  }
  
  console.log(shoppingCart);
  if(!shoppingCart.includes('Suger')){
    shoppingCart.push('Suger');
  }
  console.log(shoppingCart);
  
  shoppingCart.splice(shoppingCart.indexOf('Honey'),1);
  console.log(shoppingCart);
  
  let tea = shoppingCart.indexOf('Tea');
  console.log(tea);
  shoppingCart[tea] = 'Green Tea'
  console.log(shoppingCart);

}

  // Concatenate the following two variables and store it in a fullStack variable.

  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
  const backEnd = ['Node', 'Express', 'MongoDB']
  const fullStack =[...frontEnd,...backEnd];
  console.log(fullStack);





  {
    // The following is an array of 10 students ages:

  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of(min - average) and(max - average), use abs() method 1.Slice the first ten countries from the countries array

ages.sort();
console.log("min:" , ages[0]);
console.log("max: ", ages[ages.length-1]);
let sum =0

for(let age of ages){
   sum += age;
}
let avg  = sum/ages.length;
console.log(avg);
 


  }
  
  
  
  
  
  
  
