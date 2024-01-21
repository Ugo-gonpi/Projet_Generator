
let longuerPass = document.querySelectorAll("input")[0] 

let lettreMaj = document.querySelectorAll("input")[1] 
let lettreMin = document.querySelectorAll("input")[2] 
let nombre = document.querySelectorAll("input")[3] 
let symboles = document.querySelectorAll("input")[4] 

let clipboardCopy = document.querySelectorAll("button")[0] // <--- bouton pour copier le password
let generatePassword = document.querySelectorAll("button")[1] // <--- bouton qui génere le password

let passwordDisplay = document.querySelector(".falseInput")

// ----------------------------------------------------------------
   
let lesLettres = "abcdefghijklmnopqrstuvwxyz";
let lettre

let lesChiffres = "0123456789" 
let chiffre

let lesSymboles = "&@#$£?!%-"
let symbol

let motPass = []

let currentval = 0

// -----------------------------------------------------------------

let addLetter = () => {
    
    lettre = lesLettres[Math.floor(Math.random() * lesLettres.length)];

    if (lettreMaj.checked == true && lettreMin.checked == true) {
        upperLower =  Math.floor(Math.random() * 2)
        switch (upperLower) {
            case 0:
                motPass.push(lettre.toUpperCase())
                break;
            case 1:
                motPass.push(lettre)
                break;
        }
    } else if (lettreMin.checked == true && lettreMaj.checked == false) {
        motPass.push(lettre)
    } else if (lettreMin.checked == false && lettreMaj.checked == true) {
        motPass.push(lettre.toUpperCase())
    }
}

let addNumber = () => {
    if (nombre.checked == true) {
        chiffre = lesChiffres[Math.floor(Math.random() * lesChiffres.length)];
        motPass.push(chiffre)
    }
}

let addSymbol = () => {
    if (symboles.checked == true) {
        symbol = lesSymboles[Math.floor(Math.random() * lesSymboles.length)];
        motPass.push(symbol)
    }
}

let generate = () => {

    currentval = longuerPass.value

    while (motPass.length < currentval) {
        let randomCharacter =  Math.floor(Math.random() * 3)

        switch (randomCharacter) {
            case 0:
                addLetter()
                break;
            case 1:
                addNumber()
                break;
            case 2:
                addSymbol()
                break;
        }
    }
}

//------------------------------------------------------------------------

generatePassword.addEventListener("click", () => {
    password = []
    generate()
    passwordDisplay.innerHTML = password.join("")
})