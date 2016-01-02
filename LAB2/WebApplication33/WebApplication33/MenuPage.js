// Method calls:
happyHourFunc();
addPictures();
adjustPrice();
todaysOffer();

//happy hour logic:

function happyHourFunc() {
    var currentTime = new Date().getUTCHours() + 1;
    var happyHour = 16;

    if (currentTime === happyHour) {
        alert("Its Happy Hour! Prices are 10% off");

        var priceDivs = document.getElementsByClassName("price");
        for (var i = 0; i < priceDivs.length; i++) {
            var price = Number(priceDivs[i].innerHTML) * 0.9;
            priceDivs[i].innerHTML = price;

        }
    }
}


//Adjust price function: (add .toFixed(2) for 2 decimals)

function adjustPrice() {
    var priceDivs = document.getElementsByClassName("price");
    for (var i = 0; i < priceDivs.length; i++) {
        var price = Number(priceDivs[i].innerHTML.toFixed(2));
        priceDivs[i].innerHTML = price;
    }
}

/*Add pictures function to span:*/

function addPictures() {
    var pictureSpans = document.getElementsByTagName("span");
    for (var i = 0; i < pictureSpans.length; i++) {
        pictureSpans[i].innerHTML = "<img src='Images/Hamburger.png' />";
    }
}

/*Add todays offer function. 
Make price background red. 
Reduce price by another 20%:*/
function todaysOffer() {

    alert("hej");
    var todaysDate = new Date();
    var todaysdayName = todaysDate.getDay();
    var priceDiv = document.getElementById(todaysdayName);
    switch (todaysdayName) {
        case document.getElementById("monday") === todaysdayName:

        case document.getElementById("tuesday") === todaysdayName:

        case document.getElementById("wednesday") === todaysdayName:

        case document.getElementById("thursday") === todaysdayName:

        case document.getElementById("friday") === todaysdayName:

        case document.getElementById("saturday") === todaysdayName:
            alert("hej");
            var newPrice = Number(priceDiv.innerHTML) * 0.8;
            priceDiv.innerHTML = newPrice;
        case document.getElementById("sunday") === todaysdayName:

        default:
    }
}

/*Stretch exercises: (increasing tuffness for each number!)

 1. Automate todays offer to be dependent of the day of the week
 2. Create an HTML page with an empty body and then fill it with help from JS.
    -use array with names and price of the burgers seperated by a simple "space"
    -use a loop to add all the html with different burgers
    -Add more pictures on a creative way...
 3. Add arrays for all in point 3 and show the products.
    Add a simulair menu under the burgers with a new <h2> for:
    -subs
    -sausages
    -pizza
    -drinks
    
 5. Add a Birthday function for the restaurant so that the entire week 
    the restaurant has its birthday the price is set to 14.99 per default.
    
*/