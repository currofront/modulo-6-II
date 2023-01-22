// Enigma //

var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

//Coger valor de los inputs

var decryptedText = () => document.getElementById("decryptedText").value;
var encryptedText = () => document.getElementById("encryptedText").value;


var translateText = (text, Alphabet, secretCode) => {
    var texto = "";
    for (var index = 0; index < text.length; index++) {

        for (var i = 0; i < Alphabet.length; i++) {
            Alphabet[i] === text[index] ? texto += secretCode[i] : " ";
        };
    };
    return texto;
};


var encryptText = () => translateText(decryptedText(), plainAlphabet, encryptedAlphabet);

var decryptText = () => translateText(encryptedText(), encryptedAlphabet, plainAlphabet);


var printEncryptText = () => document.getElementById("encryptedText").innerText = encryptText();

var printDecryptText = () => document.getElementById("decryptedText").innerText = decryptText();

// Eventos
document.getElementById("encrypted").addEventListener("click", () => printEncryptText());

document.getElementById("decrypted").addEventListener("click", () => printDecryptText());





// Generador aleatorio //

var searchNum = (array, target) => {
    for (var index = 0; index < array.length; index++) {
        if (array[index] === target) return true;
    };
};

var randomPick = (n, min, max) => {
    const range = max - min + 1;
    var numbers = [];
    while (numbers.length < n) {
        var newNumber = Math.floor(Math.random() * range) + min;
        searchNum(numbers, newNumber) !== true ? numbers.push(newNumber) : "";
    }
    return numbers;
};



console.log(randomPick(5, 1, 10))



