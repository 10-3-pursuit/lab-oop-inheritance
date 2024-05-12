// Create class below

class Tamagotchi {
  constructor(name) {
    this.name = name
    this.energy = 9
    this.full = 8
    this.mood = 6
    this.sick = false
    this.rehomed = false
    this.greet()
  }
  greet = () => {
    if (!this.rehomed) {
      console.log(`Hi, my name is ${this.name}`)
    } else {
      this.badGuardian()
    }
  }
  badGuardian = () => {
    console.log(
      `You were not a good guardian. ${this.name} no longer lives with you`
    )
    this.rehomed = true
  }
  status = () => {
    if (!this.rehomed) {
      console.log('********************')
      console.log(`My mood is: ${this.mood}`)
      console.log(`I am this full: ${this.full}`)
      console.log(`My energy is: ${this.energy}`)
      this.sick
        ? console.log(`I'm sick, help me`)
        : console.log(`I am not sick`)
      console.log('********************')
    } else {
      this.badGuardian()
    }
    if (this.mood < 1 || this.energy < 1 || this.full < 1) {
      this.seized()
    }
  }
  eat = (food) => {
    if (!this.rehomed) {
      this.full += 2
      this.energy--
      if (this.full > 10) {
        this.sick = true
      }
      console.log('Yum! That was tasty!')
      this.status()
    } else {
      this.badGuardian()
    }
  }

  play = () => {
    if (!this.rehomed) {
      if (!this.sick) {
        if (this.mood >= 9) {
          console.log("I don't want to play anymore!")
          this.energy -= 2
          this.full--
        } else if (this.energy <= 3) {
          console.log("I'm too tired to play")
          this.energy--
        } else {
          this.energy--
          this.mood += 2
          this.full--
        }
      } else {
        console.log("I don't want to play, I don't feel good.")
        this.energy--
        this.mood--
      }
      this.status()
    } else {
      this.badGuardian()
    }
  }

  sleep = () => {
    if (!this.rehomed) {
      this.energy += 4
      this.full -= 3
      this.status()
    } else {
      this.badGuardian()
    }
  }

  timePasses = () => {
    if (!this.rehomed) {
      if (!this.sick) {
        this.mood -= 2
        this.full--
        this.energy--
      } else {
        this.mood -= 3
        this.full -= 2
        this.energy -= 2
      }
      this.status()
    } else {
      this.badGuardian()
    }
  }
  medicate = () => {
    if (!this.rehomed) {
      if (this.sick) {
        console.log('Thank you. I feel better')
        this.energy -= 3
        this.sick = false
        this.full = 9
      } else {
        console.log("I refuse to take medicine I don't need!")
        this.energy--
      }
      this.status()
    } else {
      this.badGuardian()
    }
  }
  seized = () => {
    this.rehomed = true
  }
}

const buzz = new Tamagotchi('Buzz')
buzz.status()

// Do not edit below this line
module.exports = Tamagotchi
