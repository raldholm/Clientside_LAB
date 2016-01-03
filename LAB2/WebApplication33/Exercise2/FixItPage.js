﻿/* For each of the following aplicable exercise below you should present a box on the page 
with an alert that shows the result when the box is clicked! */


/* ###Window object at page 124:###
1. Link the script with FixIt.hmtl */
// DONE!

/*2. Add som tags that doesn't change the visual part of the paragraph.*/

var addTags = function() {
    var elements = document.getElementsByTagName("p");
    for (var i = 0; i < elements.length; i++) {
        var newTag = document.createElement("span");
        elements[i].appendChild(newTag);
    }
     return "<span>-tags added!";
 };

// Play with the properties at page 124 in the book. 
// Use properties creatively to display things at the html page

var windowProp = function () {
    var windowProp = "Window Location: " + window.location + " and Window width: " + window.innerWidth;
    //window.alert(windowProp);
    return windowProp;
};

// 4.Add a stylesheet that displays the changed words in fat font and in red.

// 5. PLay with the Methods

//window.alert("Playing");
//window.print("index.html");
//window.open(url?http://www.google.se);


// ### DOM page 126:###
// 6. Play with the DOM-properties

var getDOMProp = function () {
    window.alert("DokumentURL " + document.URL + " , " + "Titel " + document.title);
    window.alert("Domän: " + document.domain + " , " + "Senast ändrat " + document.lastModified);
    document.title = "Sidans Titel";
    return document.domain + " , " + document.lastModified + "/r/n , " + document.URL + " , " + document.title;
};

// ### String objects page 128, 129: ###
// 7. Save the the text from the makeMeAnArray-paragraph into an array.

function makeMeAnArray() {
    var element = document.getElementById("makeMeAnArray");
    var array = element.innerText.split(" ");
    return array;
}


// 8. Use all the string methods and propertys allong with the array

var makeArrayToUpper = function() {
    var element = document.getElementById("makeMeAnArray");
    var arrayUpperCase = element.innerText.toUpperCase();
    //alert(arrayUpperCase);
    return arrayUpperCase;
}


var arrayLength = function() {
    var element = document.getElementById("makeMeAnArray");
    var arrayLength = element.innerText.length;
    alert(arrayLength);
    return arrayLength;
}
arrayLength();

// ### String objects page 132: ###
// 9. check if the 4th element in the array is a number
var checkIfNumberFour = function () {
    var splitArray = makeMeAnArray();

    var isNotANumber = !isNaN(splitArray[4]);
    //alert(isNotANumber);
    return isNotANumber;

};




// ### Math page 134: ###
// 10. Round one of the numbers in the paragraph up/down
// 11. replace the 3rd word with PI then roud it to the nearest integer



// ### Date object###
// 12. Calculate how many days it's until your birthday and present it.


// 13. Calculate how many minutes old you are and present it.



//Bonus exercises:
//### Demo page 141:###
//-Download the code to the book. Wipe the code from the js-file and rewrite it with the help from the book.
//-For additional reading and training go to: http://www.w3schools.com/jsref/jsref_obj_string.asp
// and look at JS String, JS Number, JS Math and JS Date


