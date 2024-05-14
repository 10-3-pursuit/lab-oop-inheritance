// Create class below
class Tamagotchi {
    constructor (name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }
    greet () {
        console.log(`Hello, I'm ${this.name}!`)
    }
    status () {
        console.log(`**********************\nMy energy is: ${this.energy}\nI am this full: ${this.full}\nMy mood is: ${this.mood}\n${this.sick===false ? "I am not sick ^(^_^)^" : "I am sick o(-_-)o"}\n**********************`)
    }
    eat () {
        this.full += 2;
        this.energy --;
        if (this.full > 10) {
            this.sick = true;
        }
    }
    medicate () {
        if (this.sick === true) {
            this.full = 9;
            this.energy -= 3;
            this.sick = false;
        } else {
            console.log("Ewww! I don't want medicine! ^(T_T)^")
            this.energy --;
        }
    }
}
const tisa = new Tamagotchi('Tisa');
tisa.greet();
tisa.status();
tisa.eat();
tisa.status();
// tisa.medicate();
// Do not edit below this line
module.exports = Tamagotchi
