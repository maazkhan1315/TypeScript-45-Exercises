let banana = "BANANA";
let uppercaseBanana = "BANANA";
let five = 5;
let ten = 10;
let fruits = ["mango", "banana", "grapes"];


console.log("is banana is equal to banana?")
console.log(banana == "banana");
     
console.log("\nis banana is not equal to banana?");
console.log(banana != "banana");

console.log ("\nis BANANA is equal to banana after converting to lowercase?");
console.log(uppercaseBanana.toLowerCase() == "banana");

console.log("\nis BANANA is not equal to banana after converting to lowercase?");
console.log(uppercaseBanana.toLowerCase() != "banana");

console.log("\nis five is equal to ten?");
console.log(five == ten);

console.log("\nis five is not equal to ten?");
console.log(five != ten);

console.log("\nis five is greater than zero?");
console.log(five > 0);

console.log("\nis ten is smaller than 5?");
console.log(ten < 5);

console.log("/nis five is greater than or equal to 3?");
console.log(five >= 3);

console.log("\nten is less than or equal to 5?");
console.log(ten <= 5);

console.log("\nten is not equal to 5 and ten is greater than 5?");
console.log(ten != 5 && ten > 5);

console.log("\nten is not equal to 5 and ten is greater than 5?");
console.log(ten != 5 && ten > 40);

console.log("\n20 is greater than 60 OR 10 is equal to 10");
console.log(10 > 60 || 10 == 10);

console.log("\n20 is greater than 60 OR 10 is not equal to 10");
console.log(10 > 60 || 10 != 10);

console.log("\nis grapes include in my fruits array?");
console.log(fruits.includes("grapes"));

console.log("\nis grapes not include in my fruits array?");
console.log(!fruits.includes("orange"));
