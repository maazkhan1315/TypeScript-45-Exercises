let visitforCountries:string [] = ["Dominica", "Argentina", "Belize", "Colombia", "Egypt" ];
console.log("original Order", visitforCountries);


console.log("Alphabetical Order:", [...visitforCountries].sort());


console.log("still in original order:", visitforCountries );


console.log("Reverse Order:", [visitforCountries].reverse());


console.log("still in original order:", visitforCountries );


console.log("Original Array Reversed:", visitforCountries.reverse());

console.log("Back to Original Order",visitforCountries.reverse);

console.log("Sorted in Alphabetical Order:", visitforCountries.sort());

console.log("Again Original Order Reversed:", visitforCountries.reverse());