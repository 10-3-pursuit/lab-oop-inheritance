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
        if(this.fresh) {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        } 
            console.log(`${this.name} has spoiled.`)
    }
    aDayPasses() {
        this.daysToSpoil--;
        this.isFresh();
    }
}

const apple = new Food('Apple', 10)
// apple.prepare()
// apple.isFresh()
// apple.aDayPasses()

class BadFood extends Food{
    constructor(name, daysToSpoil) {
        super(name, 20)
        this.fresh = daysToSpoil > 0
        this.weapons = [{hitPoints: 3}, {hitPoints: 4}, {hitPoints: 5}];
    }
    prepare() {
        console.log(`I am ${this.name} and you are just a passing trend!`)
    }
    fight(badFood) {
        const weapon = this.weapons[Math.floor(Math.random() * this.weapons.length)];
        badFood.daysToSpoil -= weapon.hitPoints;
        console.log(`${badFood.name} has only ${badFood.daysToSpoil} days before being spoiled, but I am still at ${this.daysToSpoil} days!`);
    }
}

const yogurt = new BadFood('Yogurt')
const cheese = new BadFood('Cheese')

yogurt.prepare()
yogurt.fight(cheese)
// Do not edit below this line
module.exports = Food
