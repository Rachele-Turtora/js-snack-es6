"use strict";

const teams = [
    {
        name: 'team1',
        points: 0,
        fouls:  0
    } , {
        name: 'team2',
        points: 0,
        fouls:  0
    } , {
        name: 'team3',
        points: 0,
        fouls:  0
    } , {
        name: 'team4',
        points: 0,
        fouls:  0
    }
];

// Generating integers
function generateInt(min, max){
    const result = Math.floor(Math.random() * (max - min) + min);
    return result;
}

// Modifying array
teams.forEach((element => {
    element.points = generateInt(0, 90);
    element.fouls = generateInt(0, 20);
}))

// Printing new array
const myTeams = teams.map((element) => {
    return {
        nome: element.name,
        fouls: element.fouls
    }
});

console.log(myTeams);