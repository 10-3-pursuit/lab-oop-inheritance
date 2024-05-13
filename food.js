class Food {
    constructor (name, daysToSpoil, fresh = true) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }
    Prepare() {
        console.log(`${this.name} is being prepared`)
    }
    isFresh() {
        if (this.daysToSpoil > 0) {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} goes bad`)
        } else {
            console.log(`The expiration date has passed and ${this.name} is no longer edible`)
        }
    }
    aDayPasses() {
        this.daysToSpoil --
         this.isFresh()
    }
}

class BadFood extends Food {
    constructor (name, daysToSpoil = 20, fresh = true) {
        super (name, daysToSpoil, fresh);
         this.weapons = [
            {name : "Mouth Burn",  hitPoints : 3},
            {name : "Sugar Shock", hitPoints : 4},
            {name : "Hot Pepper Storm",
            hitPoints : 5
            }
        ];
    }
    prepare() {
        console.log(`I am ${this.name} and my calories are too high to count!`)
    }
    isFresh() {
        if (this.daysToSpoil <= 0) {
            this.fresh = false
        } else {
            console.log("The food is still in the fight")
        }
    }
    fight(badFood) {
        const weaponPicker = Math.floor(Math.random() * 3);
         let weapon = this.weapons[weaponPicker]

          badFood.daysToSpoil -= weapon.hitPoints
             
           console.log(`${badFood.name} is only has ${badFood.daysToSpoil} days before being spoiled ,
            but I am still at ${this.daysToSpoil} days!`)
    }
}




module.exports = Food
