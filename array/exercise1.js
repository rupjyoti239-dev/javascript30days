const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]


// Declare an empty array;
{
  const arr = Array();
  console.log(arr);
  
}
// Declare an array with more than 5 number of elements
{
  const arr = Array(5).fill("hello");
  console.log(arr);
  
}
// Find the length of your array
{
  const arr = Array(5).fill("hello");
  console.log(arr.length);
  
}
// Get the first item, the middle item and the last item of the array
{
  console.log(` first element is ${countries[0]} middle element is ${countries[Math.floor(countries.length/2)]} and last one is ${countries[countries.length-1]}`);

}
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array.The array size should be greater than 5

{
  const mixed = [1,"two",null,undefined,true,[1,2]];
  console.log(mixed);
  
}


// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
{
  const itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];

  // Print the array using console.log()
  console.log(itCompanies);
  
  // Print the number of companies in the array
  for(x of itCompanies){
    console.log(x);
    
  }
  // Print the first company, middle and last company
  console.log(`${itCompanies[0]}   ${itCompanies[Math.floor(itCompanies.length/2)]}  ${itCompanies[itCompanies.length/2]}`);
  
  // Print out each company
  for(x of itCompanies){
    console.log(x);
    
  }  
  // Change each company name to uppercase one by one and print them out
  for(x of itCompanies){
    console.log(x.toUpperCase());
    
  }
  // Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
  console.log(`${itCompanies.join(",")} are big it company`);
  
  // Check if a certain company exists in the itCompanies array.If it exist return the company else return a company is not found
  let company = "Google";
  if (itCompanies.includes(company)){
    console.log(company);
  }else{
    console.log("Company not found");
    
  }
  
  // Filter out companies which have more than one 'o' without the filter method
  for(x of itCompanies){
    if(x.match(/o/g)){
      if(x.match(/o/g).length>1){
        console.log(x);
        
      }
      
    }
  }
 
  
  // Sort the array using sort() method
  console.log(itCompanies.sort());
  
  
  // Reverse the array using reverse() method
  console.log(itCompanies.reverse());
  
  // Slice out the first 3 companies from the array
  console.log(itCompanies.slice(0,3));
  
  // Slice out the last 3 companies from the array
  console.log(itCompanies.slice(itCompanies.length-3));
  
  // Slice out the middle IT company or companies from the array
  let middle = Math.floor(itCompanies.length / 2);
  console.log(itCompanies.slice(middle,middle+1));
  
  // Remove the first IT company from the array
  console.log(itCompanies.shift());
  
  // Remove the middle IT company or companies from the array
  console.log(itCompanies.splice(middle,1));
  console.log(itCompanies);
  
  // Remove the last IT company from the array
  console.log(itCompanies.pop());

  // Remove all IT companies
  itCompanies.splice(0)

  console.log(itCompanies);
  
  
}
