// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (prod of Object.keys(dairy)) {
        console.log(dairy[prod]);
    }
}

logDairy();

// Task 2
const animal = {

    canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (item of Object.keys(bird)) {
        console.log(item + ": " + bird[item]);
    }
}

birdCan();

// Task 3
function animalCan() {
    for (item in bird) {
        console.log(item + ": " + bird[item]);
    }
}

animalCan();