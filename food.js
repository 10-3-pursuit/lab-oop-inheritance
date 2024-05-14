// Create class below
class Food {
    constructor(name, daysToSpoil, fresh = true) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }
    prepare() {
        console.log(`${this.name} is being prepared`)
    }
    isFresh() {
        if (this.daysToSpoil <= 0) {
            console.log(`${this.name} has spoiled.`)
        } else {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        }
    }
    aDayPasses() {
        this.daysToSpoil--;
        this.isFresh();
    }
}

class BadFood extends Food {
    constructor(name, daysToSpoil = 20, fresh = true, weapons = [{ hp: 3 }, { hp: 4 }, { hp: 5 }]) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
        this.weapons = weapons;
    }
    preapare() {
        console.log(`I am ${this.name} and my calories are too high to count!`)
    }
}
// Do not edit below this line
module.exports = Food
