var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all") 
request.send();
request.onload = function(){
var res = JSON.parse(request.response);         

//1.Get all the countries from Asia continent region using Filter function
var res1 = res.filter((ele)=>ele.region === "Asia");
var countries = res1.map((ele)=>ele.name.common);
console.log("Countries which are in Asian Region");
console.log(countries);


//2.Get all the countries with a population of less than 2 lakhs using Filter function
let population = res.filter((ele)=>ele.population<200000);

var countries1 = population.map((ele)=>ele.name.common);
console.log("Countries which are in population");
console.log(countries1);

//3.Print the following details name, capital, flag, using forEach function
res.forEach((ele)=>console.log(`Capital of ${ele.name.common} is ${ele.capital} and the flag is ${ele.flags.png}`));

//4. Print the total population of countries using reduce function
let totalPopulation = res.reduce((sum,ele)=>sum+ele.population,0);
console.log(`Total population is ${totalPopulation}`);

//5.Print the country that uses US dollars as currency.
let currency = res.filter((ele)=>ele.currencies && ele.currencies.USD);
let currency1 = currency.map((ele)=>ele.name.common);
console.log(`The countries using USD currency are`);
console.log(currency1);
}
  




 





