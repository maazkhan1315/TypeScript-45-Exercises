function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ["Maaz", "Akbar", "Ahmed"];
var copy_magician_names = magicians_names.slice();
var copy_great_magicians = make_great(copy_magician_names);
console.log("Orignal Array\n");
show_magicians(magicians_names);
console.log("\nCopied Array\n");
show_magicians(copy_magician_names);
