const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//Grab password locations
let password1 = document.querySelector(".box1");
let password2 = document.querySelector(".box2");



//Function to get a random char
function genRandomChar() {
let getRandomChar = Math.floor(Math.random() * characters.length);
let randomChar = characters[getRandomChar];
return randomChar
}

//Function to put charachters together into a string
function generatePassword(){
    let password = []

    for(let i = 0; i < 13; i++){
        password.push(genRandomChar())
    }

    return password.join("");
    
}

//Function to append the password to the div
function appendPassword(){
password1.textContent = generatePassword()
password2.textContent = generatePassword()
}


