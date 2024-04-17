let guestList = ["NABIHA", "MAAZ", "NAFEES"];

let dontCome = guestList[2];

console.log(dontCome, "mein nahi aasakta");

guestList.splice(2, 3, "MUBARRIM");

guestList.forEach(guest => console.log(`ASSALAMUALAIKUM ${guest}, would you like to come dinner with me?`));
