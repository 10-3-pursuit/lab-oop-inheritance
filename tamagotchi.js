// Create class below
class Tamagotchi {
  constructor(
    name,
    energy = 9,
    full = 8,
    mood = 6,
    sick = false,
    rehomed = false
  ) {
    this.name = name;
    this.energy = energy;
    this.full = full;
    this.mood = mood;
    this.sick = sick;
    this.rehomed = rehomed;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
  status() {
    console.log(`My mood is: ${this.mood}`);
    console.log(`I am this full: ${this.full}`);
    console.log(`My energy is: ${this.energy}`);
    console.log(`${this.sick ? "I am not sick" : "I am sick"}`);
  }
  eat() {
    this.full += 2;
    this.energy -= 1;
    if (this.full > 10) {
      this.sick = true;
      console.log(`I am sick`);
    } else {
      console.log(
        `My fullness increased to ${this.full}, My energy went down to ${this.energy}`
      );
    }
  }
  medicate() {
    if (this.sick) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false;
    } else {
      console.log(`${this.name} refused to take medicine.`);
      this.energy -= 1;
    }
  }
  play() {
    if (this.sick) {
      console.log(`${this.name} refused to play`);
      this.energy -= 1;
      this.mood -= 1;
    } else if (this.mood > 9) {
      this.energy -= 2;
      this.full -= 1;
    } else if (this.energy <= 3) {
      console.log(`I am too tired to play`);
      this.energy -= 1;
    } else {
      this.mood += 2;
      this.energy -= 1;
      this.full -= 1;
    }
  }
  sleep() {
    this.energy += 4;
    this.full -= 3;
  }
  timePasses() {
    if (!this.sick) {
      this.mood -= 2;
      this.full -= 1;
      this.energy -= 1;
    } else {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    }
  }
  badGuardian() {
    if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
      this.rehomed = true;
      console.log("I have been rehomed");
    }
  }
}

const benji = new Tamagotchi("Benji");
// console.log(benji);
// benji.status();
benji.eat();
benji.eat();

// console.log(benji);

// Do not edit below this line
module.exports = Tamagotchi;
