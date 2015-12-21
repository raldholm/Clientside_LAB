/*
Läs in ett heltal som motsvarar svenska kronor.
Skriv ut motsvarande värde i pund respektive i dollar.
Anta att kursen är 1dollar = 6 kr, 1pund = 12kr.
*/

var usdollar = Number(6);
var pounds = Number(12);

var calculate = document.getElementById("calculatebutton");

calculate.addEventListener("click", exchangeFunction,false);

function exchangeFunction() {
    var input = Number(document.getElementById("sek").value);
    var dollarresult = dollarResult(input);
    var poundresult = poundResult(input);

    if (isNaN(input)) {
        alert("Du angav inte i talformat");
    }
    else {
        document.getElementById("dollar").value = dollarresult;
        document.getElementById("pound").value = poundresult;
    }
}

function dollarResult(input) { return input / usdollar; }
function poundResult(input) { return input / pounds; }