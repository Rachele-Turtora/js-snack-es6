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
    },
    {
        name: "Galano",
        weight: 5
    }
]

if (bikes.length){
    let weight = bikes[0].weight; 

    // Comparing bikes
    bikes.forEach((element) => {

        const currentWeight = element.weight

        if (currentWeight < weight){
                weight = currentWeight;
        }
    })

    const biciLeggere = bikes.filter((element) => element.weight === weight)

    // Printing result
    console.log("Le bici più leggere sono:")
    biciLeggere.forEach((element) => {
        console.log(`${element.name}, che pesa ${element.weight}`);
    })

} else {
    console.log("Non ci sono bici in elenco.")
}
