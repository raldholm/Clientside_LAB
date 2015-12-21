/* 

Rita ett flödesschema som skriver ut kvadraten på ett tal som läses in.

*/

// 1) Hämtar ut knappen (elementet)
var calculate = document.getElementById("calculatebutton");

//4 lägger til ett klick-event:
calculate.addEventListener('click', calcFunction, false);

function calcFunction() {
    var tal = Number(document.getElementById("tal").value);

    var squareresult = square(tal);

    if (isNaN(squareresult)) {

        alert("Du angav ingen siffra!");
    }

    else {
        document.getElementById("result").value = squareresult;

    }

}

function square(tal) {
    return (tal.Math.sqrt(tal));
}