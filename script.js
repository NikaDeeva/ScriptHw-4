"use strict"
// 1
function checkFields(){
    const fieldValue1 = document.getElementById("one").value;
    const fieldValue2 = document.getElementById("two").value;
    if (fieldValue1 !== '' && fieldValue2 !== ''){
        alert('All fields are filled');
    }
    else{
        alert('Fields are not filled');
    }
}
// 2
function checkSum(){
    const numValue1 = parseFloat(document.getElementById("num-one").value);
    const numValue2 = parseFloat(document.getElementById("num-two").value);
    if (numValue1 + numValue2 > 10){
        alert("Summa is bigger than ten");
    }
    else{
        alert('Summa is lower than ten');
    }
}
// 3
function checkText(){
    const inputValue = document.getElementById("textField").value;
    if (inputValue.includes('JavaScript')){
        alert('Text has got word JavaScript');
    }
    else{
        alert('Text hasn`t got word JavaScript');
    }
}
// 4
function checkNum(){
    const numValue = parseFloat(document.getElementById("inputNum").value);
    if (!isNaN(numValue) && numValue > 10 && numValue < 20){
        alert('Number is in limits');
    }
    else{
        alert('Number is not in limits');
    }
}
// 5
function checkForm(){
    const name = document.getElementById("inputName").value;
    const mail = document.getElementById("inputMail").value;
    const password = document.getElementById("inputPass").value;

    if (name.length > 2 && mail.includes('@') && password.length > 5){
        window.location.href = "another.html";
        alert('Go to another page');  
    }
    else{
        alert('Form is not value');
    }
}