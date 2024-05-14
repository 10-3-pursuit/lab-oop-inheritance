// Create class below
class Food {
    constructor ( name, daysToSpoil, fresh = true ) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }

    prepare () {
        console.log(`${this.name} is being prepared`)
    }
    isFresh() {
        if (this.daysToSpoil > 0 && this.fresh === true) {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`);
        } else {
            console.log(`${this.name} has spoiled.`);
        }
    }
    aDayPasses () {
        this.daysToSpoil--;
        this.isFresh()
    }
}

    const fruits = new Food("grapes", 5, false)

    fruits.prepare()
    fruits.isFresh()
    fruits.aDayPasses()
    console.log(fruits)


    class BadFood extends Food {
        constructor(name) {
        super(name, 20);
        this.weapons = [
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
    }
    prepare() {
        console.log(`I am ${this.name} and my calories are too high to count!`);
    }
    fight(otherFood) {
        const selectedWeapon = this.weapons[Math.floor(Math.random() * this.weapons.length + 1)];
        otherFood.daysToSpoil -= selectedWeapon.hitPoints;

        console.log(`${otherFood.name} is only has ${this.daysToSpoil} days before being spoiled, but I am still at ${this.daysToSpoil} days!`);
    }
}

const donut = new BadFood ("Donut")
const pizza = new BadFood ("Pizza")

donut.prepare()
pizza.prepare()

donut.fight(pizza);
pizza.fight(donut);
// Do not edit below this line
module.exports = Food
