/*

Rita en algoritm som läser in tre tal och beräknar och
skriver ut summan och medelvärdet av de tre talen.

*/

// 1) Hämtar ut knappen (elementet)
var calculate = document.getElementById("calculatebutton");

//4 lägger til ett klick-event:
calculate.addEventListener('click', calcFunction, false);

function calcFunction() {
    var tal1 = Number(document.getElementById("tal1").value);
    var tal2 = Number(document.getElementById("tal2").value);
    var tal3 = Number(document.getElementById("tal3").value);

    var sumresult = sum(tal1, tal2, tal3);
    var averageresult = average(tal1, tal2, tal3);

    if (isNaN(sumresult || averageresult)) {

        alert('Du angav ingen siffra!');
    }

    else {
        document.getElementById("sumresult").value = sumresult;
        document.getElementById("averageresult").value = averageresult;
    }

}

function sum(tal1, tal2, tal3) {
    return (tal1 + tal2 + tal3);
}

function average(tal1, tal2, tal3) {
    return (tal1 + tal2 + tal3) / 3;
}