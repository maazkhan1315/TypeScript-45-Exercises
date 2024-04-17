function makeSandwich(...items: string[]){
    console.log("Making a sandwich with the fllowing items: \n");
    items.forEach(Singleitem => console.log("-" + Singleitem));
    console.log("\nNow Enjoy Sandwich")
}

makeSandwich("Chicken", "Egg", "Mayo", "Cheese");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Mayo", "Egg", "Chicken", "Lettuce", "Butter", "Tomato");
