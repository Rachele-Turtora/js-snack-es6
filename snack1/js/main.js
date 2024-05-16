"use strict";

const bikes = [
    {
        name: "Galano",
        weight: 10
    },
    {
        name: "Hiland",
        weight: 30
    },
    {
        name: "Kabon",
        weight: 5
    },
    {
        name: "Kootu",
        weight: 40
    }
]

let weight = bikes[0].weight; 
let bike;

// Comparing bikes
bikes.forEach((element) => {

    if (element.weight < weight){
            weight = element.weight;
            bike = element;
    }
})

// Printing result
console.log(`La bici più leggera è: ${bike.name}, che pesa ${bike.weight}`);

