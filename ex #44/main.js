function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the fllowing items: \n");
    items.forEach(function (Singleitem) { return console.log("-" + Singleitem); });
    console.log("\nNow Enjoy Sandwich");
}
makeSandwich("Chicken", "Egg", "Mayo", "Cheese");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Mayo", "Egg", "Chicken", "Lettuce", "Butter", "Tomato");
