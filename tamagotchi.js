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
    console.log(`My mood is: ${this.mood}
    I am this full: ${this.full}
    My energy is: ${this.energy}
    I am not sick`);
  }

  eat() {
    this.full += 2;
    this.energy--;
    if (this.full > 10) {
      this.sick = true;
    }
  }

  //   medicate() {
  //     if (this.sick) {
  //       this.full = 9;
  //       this.energy -= 3;
  //       this.sick = false;
  //     } else {
  //       console.log("Refusal to take medicine.");
  //       this.energy -= 1;
  //     }
  //   }

  medicate() {
    if (this.sick === true) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false;
    } else {
      console.log("Refusal to take medicine");
      this.energy--;
    }
  }

  play() {
    if (this.sick) {
      this.mood -= 1;
      this.energy -= 1;
    } else if (this.mood >= 9) {
      console.log("I am too happy to play!");
      this.energy -= 2;
      this.full -= 1;
    } else if (this.energy <= 3) {
      console.log("I am too tired to play!");
      this.energy -= 1;
    } else {
      this.mood += 2;
      this.energy -= 1;
      this.full -= 1;
    }
  }

  // play() {
  //   if (this.mood >= 9) {
  //     this.energy -= 2;
  //     this.full--;
  //   }

  //   if (this.energy <= 3) {
  //     this.energy--;
  //     console.log("I am too tired to play");
  //   }

  //   if (this.sick === false) {
  //     this.mood += 2;
  //     this.full--;
  //     this.energy--;
  //   } else {
  //     this.mood--;
  //     this.energy--;
  //   }
  // }

  sleep() {
    this.energy += 4;
    this.full -= 3;
  }

  timePasses() {
    if (this.sick === false) {
      this.mood -= 2;
      this.full--;
      this.energy--;
    } else {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    }
  }

  badGuardian() {
    if (this.energy <= 0) {
      this.rehomed = true;
    }

    if (this.mood <= 0) {
      this.rehomed = true;
    }

    if (this.full <= 0) {
      this.rehomed = true;
    }

    console.log(`${this.name} has been rehomed`);
  }
}

const turtleGuide = new Tamagotchi("Abyss");
turtleGuide.greet();
turtleGuide.status();
turtleGuide.eat();
// turtleGuide.medicate();
// turtleGuide.play();
// turtleGuide.sleep();
// turtleGuide.timePasses();
// turtleGuide.badGuardian();

// Do not edit below this line
module.exports = Tamagotchi;
