
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


let startTime;
let endTime;
let i; 

function order () {
    i = Math.floor(Math.random() * pizzas.length);
    console.log(`თქვენი პიცა ${pizzas[i].name} მზადდება`);
    startTime = new Date()/1000;
}

function info () {
    console.log("თქვენი პიცა გზაშია");
    setTimeout(ready, 5000);
}

function ready () {
    console.log(`თქვენი პიცა ადგილზეა, ფასი - ${pizzas[i].price} ლარი`);
    endTime = new Date()/1000;
    let servTime = endTime - startTime;
    console.log(`მომსახურების დრო - ${servTime} წამი`);
}

order();
setTimeout(info, 2000);




