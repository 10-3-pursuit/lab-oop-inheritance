// Create class below
class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name
    this.daysToSpoil = daysToSpoil
    this.fresh = fresh
  }
  prepare = () => {
    console.log(`${this.name} is being prepared`)
  }
  aDayPasses = () => {
    this.daysToSpoil--
    this.isFresh()
  }
  isFresh = () => {
    if (this.daysToSpoil <= 0) {
      this.fresh = false
      console.log(`${this.name} has spoiled.`)
    } else {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      )
    }
  }
}

const dragonFruit = new Food('Dragon Fruit', 20)
// console.log(dragonFruit);
const chocolate = new Food('Chocolate', 300)
// console.log(chocolate);
const banana = new Food('Banana', 3)
// Do not edit below this line
module.exports = Food
