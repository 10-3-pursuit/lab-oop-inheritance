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
    constructor(name, weaponOne, weaponTwo, weaponThree, daysToSpoil, fresh=true){
        super(name, daysToSpoil, fresh=true);
        this.daysToSpoil = daysToSpoil ? 20 : daysToSpoil;
        this.fresh = daysToSpoil <= 0 ? false : true;
        this.weapons = [{name: weaponOne, hp: 3}, {name:weaponTwo, hp: 4}, {name: weaponThree, hp: 5}];
    }
}
const iceCream = new BadFood ("ice cream", "sprinkles", "pistachios", "fudge")
iceCream.prepare();
iceCream.isFresh();
// Do not edit below this line
module.exports = Food
