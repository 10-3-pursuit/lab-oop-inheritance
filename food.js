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
    fight (newBadFood, weaponOne, weaponTwo, weaponThree) {
        // make math.random be integer and have range between 0-2 for the index
        new BadFood (newBadFood.name, weaponOne, weaponTwo, weaponThree);
        const selectedWeapon = newBadFood.weapons[Math.floor(Math.random() * 3)] // 3 numbers between 0-2 (inclusive)
        selectedWeapon.hp - Math.floor(Math.random() * 6) // 6 numbers between 0-5 (inclusive)
        console.log(`${this.name} only has ${this.daysToSpoil} days before being spoiled , but I am still at ${newBadFood.daysToSpoil} days!`)
    }
}
const iceCream = new BadFood ("ice cream", "Melt", "Brain Freeze", "Ice Cream Machine Broken");
iceCream.prepare();
iceCream.isFresh();
iceCream.aDayPasses();
iceCream.fight("pizza", "Mouth Burn", "Hot Pepper Storm", "Cheese Grease");
// Do not edit below this line
module.exports = Food
