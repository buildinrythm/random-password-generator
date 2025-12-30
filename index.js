const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//Grab password locations
let password1 = document.querySelector(".box1");
let password2 = document.querySelector(".box2");
let isGenerated = false;


//Function to get a random char
function genRandomChar() {
return characters[Math.floor(Math.random() * characters.length)]
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
function renderPassword(){
password1.textContent = generatePassword()
password2.textContent = generatePassword()
password1.style.cursor = "pointer";
password2.style.cursor = "pointer";
isGenerated = true;
}

password1.addEventListener("click", () => {
    if (isGenerated === true){
    const text = password1.innerText;

    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Password copied to clipboard");
        })
        .catch(err => {
            console.error("Failed to copy:", err);
        });
    }
});

password2.addEventListener("click", () => {
    if (isGenerated === true){
    const text = password2.innerText;

    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Password copied to clipboard");
        })
        .catch(err => {
            alert("Failed to copy:", err);
        });
    }
});