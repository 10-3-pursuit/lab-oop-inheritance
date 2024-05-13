// Create class below
class Food {
    constructor(name, daysToSpoil) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = true;
    }

    prepare() {
        console.log(`${this.name} is being prepared.`);
    }

    isFresh() {
        if (this.daysToSpoil > 0) {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`);
        } else {
            console.log(`${this.name} has spoiled.`);
        }
    }

    aDayPasses() {
        this.daysToSpoil--;
        this.isFresh();
    }
}
// const banana = new Food("Banana", 3);
// // banana.prepare();
// // banana.isFresh();
// banana.aDayPasses();

class BadFood extends Food {
    constructor(name) {
        super(name, 20); // Call the constructor of the parent class (Food)
        this.weapons = [
            { name: 'Beef Roti', hitPoints: 3 },
            { name: 'Shrimp Roti', hitPoints: 4 },
            { name: 'Goat Roti', hitPoints: 5 }
        ];
    }

    prepare() {
        console.log(`I am ${this.name} and my calories are too high to count!`);
    }

    fight(enemy) {
        const weapon = this.weapons[Math.floor(Math.random() * this.weapons.length)];
        enemy.daysToSpoil -= weapon.hitPoints;
        console.log(`${this.name} has ${this.daysToSpoil} days before being spoiled, but ${enemy.name} is still at ${enemy.daysToSpoil} days!`);
    }
}
const badRoti1 = new BadFood("Beef Roti");
const badRoti2 = new BadFood("Shrimp Roti");

// badRoti1.prepare();
// badRoti2.prepare();

badRoti1.fight(badRoti2);

// Do not edit below this line
module.exports = Food
