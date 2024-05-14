// Create class below
class Tamagotchi {
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}!`);
    }

    status() {
        console.log(`Status of ${this.name}: Energy: ${this.energy}, Fullness: ${this.full}, Mood: ${this.mood}, Sick: ${this.sick}`);
    }

    eat() {
        if (this.sick) {
            console.log(`${this.name} is sick and refuses to eat.`);
            this.energy -= 1;
        } else {
            this.full += 2;
            this.energy -= 1;
            if (this.full > 10) {
                this.sick = true;
                console.log(`${this.name} ate too much and is now sick!`);
            }
        }
    }

    medicate() {
        if (this.sick) {
            this.full = 9;
            this.energy -= 3;
            this.sick = false; // Set sick to false after medicating
            console.log(`${this.name} has been medicated.`);
        } else {
            console.log(`${this.name} refuses to take medicine.`);
            this.energy -= 1;
        }
    }

    play() {
        if (this.sick) {
            console.log(`${this.name} is sick and too tired to play.`);
            this.mood -= 1;
            this.energy -= 1;
        } else if (this.mood >= 9 || this.energy <= 3) {
            console.log(`${this.name} is in too good a mood or too tired to play.`);
            this.energy -= 1;
            this.full -= 1;
        } else {
            this.mood += 2;
            if (this.mood > 9) {
                this.mood = 9; // Cap mood at 9
            }
            this.energy -= 1;
            this.full -= 1;
        }
    }

    sleep() {
        this.energy += 4;
        this.full -= 3;
    }

    timePasses() {
        if (this.sick) {
            this.mood -= 3;
            this.full -= 2;
            this.energy -= 2;
        } else {
            this.mood -= 2;
            this.full -= 1;
            this.energy -= 1;
        }
    }

    badGuardian() {
        console.log(`${this.name} has been rehomed.`);
        if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
            this.rehomed = true;
        }
    }
}

// Do not edit below this line
module.exports = Tamagotchi
