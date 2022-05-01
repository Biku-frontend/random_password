// select all id
// add event Listner all
//form select 
// Prevent default
//generate btn



// select all

const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");

const form = document.getElementById("passwordGeneratorForm")

//password display select
const passwordDisplay = document.getElementById("passwordDisplay")



// UPPERCASE ASCII Code
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65 , 90)

// LOWERCASE ASCII Code
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97 , 122)


// NUMBER ASCII Code
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)

// SYMBOL ASCII Code
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47)
.concat(arrayFromLowToHigh(58,64))
.concat(arrayFromLowToHigh(91, 96))
.concat(arrayFromLowToHigh(123, 126))


// select uppercase, number, symbols
const includeUppercaseElement = document.getElementById("includeUppercase")
const includeNumbersElement = document.getElementById("includeNumbers")
const includeSymbolsElement = document.getElementById("includeSymbols")



characterAmountRange.addEventListener("input", syncCharacterAmount)
characterAmountNumber.addEventListener("input", syncCharacterAmount)

// prevent default
form.addEventListener("submit", (e)=>{
    e.preventDefault();

// generate password
const characterAmount = characterAmountNumber.value;
const includeUppercase = includeUppercaseElement.checked
const includeNumbers = includeNumbersElement.checked
const includeSymbols = includeSymbolsElement.checked

const password  = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)

passwordDisplay.innerText = password
})

// func -> generatePassword

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols){
    // using ASCII Code
    // console.log(UPPERCASE_CHAR_CODES);

    let charcodes = LOWERCASE_CHAR_CODES;

    if(includeUppercase) charcodes = charcodes.concat(UPPERCASE_CHAR_CODES)
    if(includeNumbers) charcodes = charcodes.concat(NUMBER_CHAR_CODES)
    if(includeSymbols) charcodes = charcodes.concat(SYMBOL_CHAR_CODES)



    const passwordCharacters = [];

for(let i=0; i<characterAmount; i++){

    const characterCode = charcodes[Math.floor(Math.random() * charcodes.length)];

    passwordCharacters.push(String.fromCharCode(characterCode))
}
return passwordCharacters.join("")
}

function arrayFromLowToHigh(low, high){
    const array = [];

    for(let i=low; i <=high; i++){
        array.push(i)
    }
    return array
}

function syncCharacterAmount(e){
    const value =e.target.value;


    characterAmountRange.value = value;
    characterAmountNumber.value = value;
}

