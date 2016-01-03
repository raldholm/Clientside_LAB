
//1. create 7 hamburger objects using literal notation 
//   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
//   Please use the same html syntax of an article as in exercise1.

var burger1 = {
    name: "Kalles S Burger",
    size: "300g",
    dayOfTheWeek: "Monday",
    price: 19.90
};
var burger2 = {
    name: "Skinny Burger",
    size: "60g",
    dayOfTheWeek: "Tuesday",
    price: 19.90
}
var burger3 = {
    name: "Elmaco Burger",
    size: "150g",
    dayOfTheWeek: "Wednesday",
    price: 19.90
};
var burger4 = {
    name: "BigKingXXL Burger",
    size: "500g",
    dayOfTheWeek: "Thursday",
    price: 19.90
};
var burger5 = {
    name: "Winnare Burger",
    size: "200g",
    dayOfTheWeek: "Friday",
    price: 19.90
};
var burger6 = {
    name: "Shitty Burger",
    size: "150g",
    dayOfTheWeek: "Saturday",
    price: 19.90
};
var burger7 = {
    name: "Fatty burger",
    size: "100kg",
    dayOfTheWeek: "Sunday",
    price: 19.90
};

//2. create Product objects with constructor notation, 
//   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)

var Product = function (name, size, dayOfTheWeek, price) {
    this.name = name;
    this.size = size;
    this.dayOfTheWeek = dayOfTheWeek;
    this.price = price;
};

var HamburgerProductsArray = [
    new Product("Kalles S Burger", "300g", "Monday", 19.90),
    new Product("Skinny Burger", "60g", "Tuesday", 19.90),
    new Product("Elmaco Burger", "150g", "Wednesday", 19.90),
    new Product("BigKingXXL Burger", "500g", "Thursday", 19.90),
    new Product("Winnare Burger", "200g", "Friday", 19.90),
    new Product("Shitty Burger", "500g", "Saturday", 19.90),
    new Product("Fatty burger","100kg","Sunday",19.90)
];

//3. add 7 drinks to the page using Product.

//4. add 7 pizzas to the page using Product.

//5. add 7 subs to the page using Product.

//6. GO to file FixIt.html
//DRINKS
//Subs