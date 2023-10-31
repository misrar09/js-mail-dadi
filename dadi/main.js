
/* 

TAKE THE INPUT NUMPBER FROM THE USER AND A RANDOM NUMBER FROM COMPUTER AND DETERMINE THE WINNER OF THE BASIS OF THE HIGHER NUMBER
********************************************************************************************************************************

const userInput = document.getElementById("user_input");
const yourNumber = document.querySelector(".your_number")
const computerNumber = document.querySelector(".computer_number")
const btnEnter = document.getElementById("btn");
const winner = document.getElementById("winner")

btnEnter.addEventListener("click", function () {
    const userNumber = parseInt(userInput.value);

    if (userNumber < 1 || userNumber > 6) {
        alert("please insert values from 1 to 6")
    }
    else {

        yourNumber.innerHTML = `Your Number: ${userNumber}`;
    }

    const randomNumber = Math.floor(Math.random () * (7 - 1) + 1) 
    computerNumber.innerHTML = `Computer's Number: ${randomNumber}`

    if(userNumber > randomNumber) {
        winner.innerHTML = `You Won`
    }

    else{
        winner.innerHTML = `Computer Won`
    }
    

}) 

*************************************************************************************************************************************

*/








