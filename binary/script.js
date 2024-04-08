
function textToMorse(){
    let num = parseInt(document.getElementById('inputText').value);
    let sbin = num.toString(2);
    document.getElementById('outputText').value = sbin;
}
 
function morseToText(){
    let bin = document.getElementById('outputText').value
    let dec = parseInt(bin, 2);
    document.getElementById('inputText').value = dec;
}