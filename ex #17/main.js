var guestList = ["NABIHA", "MAAZ", "NAFEES"];
var dontCome = guestList[2];
console.log(dontCome, "mein nahi aasakta");
guestList.splice(2, 3, "MUBARRIM");
console.log("Good News ! We have found a bigger table for dinner.");
guestList.unshift("Fizra");
guestList.push("Faris");
var middleindex = Math.floor(guestList.length / 2);
guestList.splice(middleindex, 0, "Laiba");
console.log("updated list for guests");
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me?")); });
console.log("unfortunately, the new dinner table wont arrive on time, so i can invite only two guests to dinner with me");
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("sorry, ".concat(removeGuest, " i cannot invite you to a dinner"));
}
console.log("Invitation to the last 2 guests");
guestList.forEach(function (lasttwo) { return console.log("finally ".concat(lasttwo, ", you are still invited to dinner with me")); });
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
