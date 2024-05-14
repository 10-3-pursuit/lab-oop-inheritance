class Tamagotchi {
    constructor (name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }
    greet() {
        console.log(`Hello, I am ${this.name}`)
    }
    status() {
        console.log(`My stats are;
        Energy: ${this.energy},
        Mood: ${this.mood}
        Food Level: ${this.full}
        I ${this.sick ? "am" : "am not"} sick`)
    }
    eat() {
        this.full += 2;
        this.energy --

         if (this.full > 10) 
          this.sick = true
    }
    medicate() {
        if (this.sick) {
            this.full = 9;
            this.energy -= 3;
            this.sick = false
        } else {
            console.log("Refusal to take medicine")
             this.energy -1;
        }
    }
    play() {
      if (this.energy <= 3) {
           this.energy --
          console.log("I am too tired to play")
        } else if (this.sick) {
            this.mood --
            this.energy --
            console.log("I have a cold")
        } else if (this.sick && this.mood > 9) {
            this.energy -2;
            this.full --
            console.log("I don't feel too good")
        } else if (!this.sick) {
            this.mood +2;
            this.energy --
            this.full --
            console.log("It was fun Outside !")
        }
    }
    sleep() {
        this.energy +4;
        this.full -3;
        console.log("I had a great sleep !")
    }
    timePasses() {
        if (!this.sick) {
            this.mood -2;
            this.full --
            this.energy --
            console.log("Just sitting and waiting")
        } else {
            this.mood -3;
            this.full -2;
            this.energy -2;
            console.log("ammmm I gonna die ?")
        } 
    }
    badGaudian() {
        if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
            this.rehomed = true
            console.log(`Your pet ${this.name} has now been rehomed`)
        } else {
            console.log(`${this.name} can stay with you for now ...`)
        }
    }
}


// Uncomment below for a quick game 

const dragon = new Tamagotchi("Drago")

//   dragon.greet()
//   dragon.status()
//   dragon.eat()
//   dragon.eat()
//   dragon.status()
//   dragon.medicate()
//   dragon.medicate()
//   dragon.medicate()
//   dragon.status()
//   dragon.medicate()
//   dragon.play()
//   dragon.sleep()
//   dragon.status()
//   dragon.timePasses()
//   dragon.timePasses()
//   dragon.status()
//   dragon.eat()
//   dragon.eat()
//   dragon.play()
//   dragon.medicate()
//   dragon.play()
//   dragon.medicate()
//   dragon.badGaudian()
//   dragon.status()
  



module.exports = Tamagotchi
