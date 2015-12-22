/* 

Läs in två tal.
Testa om det första talet är mer än dubbelt så stort som det andra talet.
I så fall ska meddelandet bli: ”För stort tal”.

*/

var calculate = document.getElementById("calculatebutton");

calculate.addEventListener('click', calcFunction, false);

function calcFunction() {

    var tal1 = Number(document.getElementById("tal1").value);
    var tal2 = Number(document.getElementById("tal2").value);
    
    if (isNaN(tal1 || tal2)) {
        alert("Felaktigt tecken inmatat!");
    } 
    else
    {
        var answer = moreThanDouble(tal1, tal2);

        if ( answer === true) 
        {
            document.getElementById("result").value = "För stort tal";
        } 
        else {
            document.getElementById("result").value = answer.toString() + " = OK!";
        }
    }
}

function moreThanDouble(tal1, tal2) {
    if (tal1 > (tal2*2))
    {
        return true;
    }

    return false;
}