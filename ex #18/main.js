var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var visitforCountries = ["Dominica", "Argentina", "Belize", "Colombia", "Egypt"];
console.log("original Order", visitforCountries);
console.log("Alphabetical Order:", __spreadArray([], visitforCountries, true).sort());
console.log("still in original order:", visitforCountries);
console.log("Reverse Order:", [visitforCountries].reverse());
console.log("still in original order:", visitforCountries);
console.log("Original Array Reversed:", visitforCountries.reverse());
console.log("Back to Original Order", visitforCountries.reverse);
console.log("Sorted in Alphabetical Order:", visitforCountries.sort());
console.log("Again Original Order Reversed:", visitforCountries.reverse());
