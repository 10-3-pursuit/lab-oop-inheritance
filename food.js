// Create class below
class Food {
    constructor(name, daysToSpoil, fresh=true){
        this.name = name
        this.daysToSpoil = daysToSpoil
        this.fresh = fresh
    }
    prepare() {
        console.log(`${this.name} is being prepared`)
    }
    isFresh() {
        this.fresh === true && this.daysToSpoil > 0 ? console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`) : console.log(`${this.name} has spoiled.`)
    }
    aDayPasses() {
        this.daysToSpoil --;
        this.isFresh();
    }
}

const pizza = new Food("pizza", 3);
pizza.prepare();
pizza.isFresh();
pizza.aDayPasses();

class BadFood extends Food {
    constructor(name, weaponOne, weaponTwo, weaponThree, daysToSpoil=20, fresh=true){
        super(name, daysToSpoil, fresh=true);
        // this.daysToSpoil = daysToSpoil;
        this.fresh = daysToSpoil <= 0 ? false : true;
        this.weapons = [
            {name: weaponOne, hp: 3}, 
            {name:weaponTwo, hp: 4}, 
            {name: weaponThree, hp: 5}
        ];
    }
    prepare() {
        console.log(`I am ${this.name} and my calories are too high to count!`);
    }
    fight (newBadFood) {
        // make math.random be integer and have range between 0-2 for the index
        new BadFood (newBadFood.name, weaponOne, weaponTwo, weaponThree)
        const selectedWeapon = newBadFood.weapons[Math.random]
        selectedWeapon.hp - Math.random
        console.log(` is only has <pizza.daysToSpoil> days before being spoiled , but I am still at <donut.daysToSpoil> days!`)
    }
}
const iceCream = new BadFood ("ice cream", "sprinkles", "pistachios", "fudge")
iceCream.prepare();
iceCream.isFresh();
iceCream.aDayPasses();
// Do not edit below this line
module.exports = Food
