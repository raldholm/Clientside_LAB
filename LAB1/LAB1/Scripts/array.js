﻿/* 

I en vektor finns ett personnummer.
Rita en algoritm som kontrollerar att födelsedagsdatum
och de fyra sista åtskiljs med ett bindestreck.
Skriv ut ett felmeddelande om så inte är fallet.

*/

var calculate = document.getElementById("confirmbutton");

calculate.addEventListener('click', calcFunction, false);

function calcFunction() {

    var input = document.getElementById("ssn").value;

    var validatededSsn = validatePersonalNumber(input);
    
    if (validatededSsn && validateSSN(input)!= null) {
        document.getElementById("result").value = input.toString();
    } else {
        document.getElementById("result").value = "Felaktig inmatning";
    }

}

// ENKEL VALIDERING OM DEN INNEHÅLLER ETT "-"
function validateSSN(input) {

    if (input.includes("-")) {
        return input;
    }
    else {
        return null;
    }

}


// GOOOGLAT PÅ EN KORREKT VALIDEREING AV PERSONNUMMER :)
function validatePersonalNumber(input) {
    // Check valid length & form
    if (!input) return false;

    if (input.indexOf('-') == -1) {
        if (input.length === 10) {
            input = input.slice(0, 6) + "-" + input.slice(6);
        } else {
            input = input.slice(0, 8) + "-" + input.slice(8);
        }
    }
    if (!input.match(/^(\d{2})(\d{2})(\d{2})\-(\d{4})|(\d{4})(\d{2})(\d{2})\-(\d{4})$/)) return false;

    // Clean input
    input = input.replace('-', '');
    if (input.length == 12) {
        input = input.substring(2);
    }

    // Declare variables
    var d = new Date(((!!RegExp.$1) ? RegExp.$1 : RegExp.$5), (((!!RegExp.$2) ? RegExp.$2 : RegExp.$6) - 1), ((!!RegExp.$3) ? RegExp.$3 : RegExp.$7)),
            sum = 0,
            numdigits = input.length,
            parity = numdigits % 2,
            i,
            digit;

    // Check valid date
    if (Object.prototype.toString.call(d) !== "[object Date]" || isNaN(d.getTime())) return false;

    // Check luhn algorithm
    for (i = 0; i < numdigits; i = i + 1) {
        digit = parseInt(input.charAt(i));
        if (i % 2 == parity) digit *= 2;
        if (digit > 9) digit -= 9;
        sum += digit;
    }
    return (sum % 10) == 0;
};
