let guestList = ["NABIHA", "MAAZ", "NAFEES"];

let dontCome = guestList[2];

console.log(dontCome, "mein nahi aasakta");

guestList.splice(2, 3, "MUBARRIM");

console.log("Good News ! We have found a bigger table for dinner.");

guestList.unshift("Fizra");

guestList.push("Faris")

let middleindex: number = Math.floor (guestList.length / 2);

guestList.splice(middleindex, 0, "Laiba");

console.log("updated list for guests");

guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me?`))