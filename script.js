
const pizzas = [
    {
        name: "პეპერონი",
        price: 20
    },
    {
        name: "მარგარიტა",
        price: 15
    },
    {
        name: "კომბინირებული",
        price: 22
    }
];

let i = Math.floor(Math.random() * 3);
    
console.log(i);

console.log("თქვენი პიცა " + pizzas[i].name + " მზადდება");

function info () {
    console.log("თქვენი პიცა გზაშია");
}
setTimeout(info, 2000);

function ready () {
    let p;
    if(i == 0) {
        p = 20;
    } else if(i == 1) {
        p = 15;
    } else {
        p = 22;
    }
    console.log("თქვენი პიცა ადგილზეა, ფასი - " + p + " ლარი");
}
setTimeout(ready, 5000);


