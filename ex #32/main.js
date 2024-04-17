var current_users = ["Ahmed", "Yasir", "Moiz", "Farhan", "Rohan"];
var new_users = ["Hassan", "Moiz", "Fatima", "Rohan", "Shabana"];
new_users.forEach(function (new_one_user) {
    var all_condtion = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_user.toLowerCase(); });
    if (all_condtion) {
        console.log("Sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
