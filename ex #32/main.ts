let current_users = ["Ahmed", "Yasir", "Moiz", "Farhan", "Rohan"];

let new_users = ["Hassan", "Moiz", "Fatima", "Rohan", "Shabana"];

new_users.forEach(new_one_user => {
    let all_condtion = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user.toLowerCase());
    if(all_condtion){
        console.log(`Sorry ${new_one_user} is already taken`)
    }else{
        console.log(`This username ${new_one_user} is available`)
    }
} )

    


