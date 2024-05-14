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
        console.log(`My energy is: ${this.energy}\nI am this full: ${this.full}\nMy mood is: ${this.mood}\n${this.sick===false ? "I am not sick ^(^_^)^" : "I am sick :'("}`)
    }
}
const musa = new Tamagotchi('musa');
musa.greet();
musa.status();
// Do not edit below this line
module.exports = Tamagotchi
