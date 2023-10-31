

const emailDatabase = ["israr@yahoo.com", "luca@hotmail.com", "andrea@gmail.com", "dario123@gmail.com", "user_01@outlook.com"];
emailDatabase.push("antonio@outlook.com");

const userInput = document.getElementById("user_mail");
const enterBtn = document.getElementById("btn");

let userAddress;

enterBtn.addEventListener("click", function(){
    userAddress = userInput.value;
    let found; 
    
    for (let i = 0; i < emailDatabase.length; i++) {

        if (userAddress == emailDatabase[i]) {

            console.log("Athorized User");
            
            found = true;

            break;
        }
        
    }

    if(userAddress == ""){
        console.log("pleaes enter your email");

    }
    
    else if (!found) {
        console.log("Unauthorized User");
    }

    
});

/* ********************************************************************** */

//SAME RESULTS WITHOUT USING LOOP
//*******************************

/* const emailDatabase = ["israr@yahoo.com", "luca@hotmail.com", "andrea@gmail.com", "dario123@gmail.com", "user_01@outlook.com"];
emailDatabase.push("antonio@outlook.com");

const userInput = document.getElementById("user_mail");
const enterBtn = document.getElementById("btn");

let userAddress;

enterBtn.addEventListener("click", function () {
    userAddress = userInput.value;

    if (emailDatabase.includes(userAddress)) {
        console.log("Authorized User");
    }

    else if (userAddress == "") {
        console.log("Pleae Enter Your Email Address")
    }

    else {
        console.log("Unathorized User");
    }


});
 */














