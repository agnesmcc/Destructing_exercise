// Object Destructuring 1
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ? returns 8
console.log(yearNeptuneDiscovered); // ? returns 1846

// Object Destructuring 2
let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // ?
  /*
  {
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  }
  */

// Object Destructuring 3
function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
  getUserData({firstName: "Melissa"}) // ?
  getUserData({}) // ?
/*
Your name is Alejandro and you like purple
Your name is Melissa and you like green
Your name is undefined and you like green
*/

