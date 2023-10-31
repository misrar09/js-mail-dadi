

const userInput = document.getElementById("user_input");
const yourNumber = document.querySelector(".your_number")
const computerNumber = document.querySelector(".computer_number")
const btnEnter = document.getElementById("btn");
const winner = document.getElementById("winner")
winner.style.fontSize = "2rem"
winner.style.color = "Green"

btnEnter.addEventListener("click", function () {
    const userNumber = parseInt(userInput.value);

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 6) {
        alert("please insert values from 1 to 6")
    }
    else {

        yourNumber.innerHTML = `Your Number: ${userNumber}`;

        const randomNumber = Math.floor(Math.random() * (7 - 1) + 1)
        computerNumber.innerHTML = `Computer's Number: ${randomNumber}`
        
        if (userNumber > randomNumber) {
            winner.innerHTML = `You Won`
        }
        
        else if (userNumber < randomNumber) {
            winner.innerHTML = `Computer Won`
        }
        
        else if (isNaN(userNumber)) {
            winner.innerHTML = `computer won`
        }
        
        else {
            winner.innerHTML = `Draw`
        }
        
    }

});












