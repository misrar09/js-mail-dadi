
const emailDatabase = ["israr@yahoo.com", "luca@hotmail.com", "andrea@gmail.com", "dario123@gmail.com", "user_01@outlook.com"];
/* console.log(emailDatabase); */

emailDatabase.push("antonio@outlook.com");



const userInput = document.getElementById("user_mail");
const enterBtn = document.getElementById("btn");

let userAddress;



enterBtn.addEventListener("click", function(){
    userAddress = userInput.value;
    let found; // A flag to check if a match is found
    
    for (let i = 0; i < emailDatabase.length; i++) {

        if (userAddress == emailDatabase[i]) {

            console.log(userAddress, "OK");
            
            found = true;

            break;
        }
    }

    if (!found) {
        console.log("try again");
    }
    
});















