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
    constructor(name, daysToSpoil = 20, fresh = true, weapons = [{ hitPoints: 3 }, { hitPoints: 4 }, { hitPoints: 5 }]) {
        super(name, daysToSpoil, fresh)
        this.weapons = weapons;
    }
    prepare() {
        console.log(`I am ${this.name} and my calories are too high to count!`)
    }
    fight(opponent) {
        opponent.daysToSpoil -= this.weapons[(Math.floor(Math.random() * (2 + 1)))].hitPoints;
        console.log(`${opponent.name} only has ${opponent.daysToSpoil} days before being spoiled, but I am still at ${this.daysToSpoil} days!`)
    }
}
const pizzaWeapons = [
    {
        name: 'Mouth Burn',
        hitPoints: 3,
    },
    {
        name: 'Hot Pepper Storm',
        hitPoints: 4,
    },
    {
        name: 'Cheese Grease',
        hitPoints: 5,
    },
]
const donutWeapons = [
    {
        name: 'Sprinkle Spray',
        hitPoints: 3,
    },
    {
        name: 'Icing Deluge',
        hitPoints: 4,
    },
    {
        name: 'Sugar Shock',
        hitPoints: 5,
    },
]
const pizza = new BadFood("Pizza", 20, true, pizzaWeapons);
const donut = new BadFood("Donut", 20, true, donutWeapons);

pizza.prepare();
donut.prepare();
pizza.fight(donut);
donut.fight(pizza);
pizza.fight(donut);
donut.fight(pizza);


// Do not edit below this line
module.exports = Food
