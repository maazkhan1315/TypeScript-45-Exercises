var guestList = ["NABIHA", "MAAZ", "NAFEES"];
var dontCome = guestList[2];
console.log(dontCome, "mein nahi aasakta");
guestList.splice(2, 3, "MUBARRIM");
guestList.forEach(function (guest) { return console.log("ASSALAMUALAIKUM ".concat(guest, ", would you like to come dinner with me?")); });
