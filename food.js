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
    fight (opp, weaponOne, weaponTwo, weaponThree) {
        // --- lab requirements ---
        const opponent = new BadFood (opp, weaponOne, weaponTwo, weaponThree);
        const selectedRandomOppWeapon = opponent.weapons[Math.floor(Math.random() * 3)] // 3 numbers between 0-2 (inclusive)
        let opponentHP = selectedRandomOppWeapon.hp - selectedRandomOppWeapon.hp; // decreases the hit points by the number from the selected weapon method
        console.log(`${this.name} only has ${this.daysToSpoil} days before being spoiled , but I am still at ${opponent.daysToSpoil} days!`);

        // next lines not required in lab, but added to make fight more realistic
        const selectedOppWeaponName = opponent.weapons[Math.floor(Math.random() * 3)].name
        console.log(`opponent weapon: ${selectedOppWeaponName}`)
        const yourSelectedWeaponName = this.weapons[Math.floor(Math.random() * 3)].name
        console.log(`${this.name} weapon: ${yourSelectedWeaponName}`)
        opponentHP = opponent.weapons[Math.floor(Math.random() * 3)].hp; // reassigned it so opp hp isn't 0
        console.log(`opponent hp: ${opponentHP}`);
        let yourFoodWeaponHP = this.weapons[Math.floor(Math.random() * 3)].hp;
        console.log(`${this.name} hp: ${yourFoodWeaponHP}`);
        yourFoodWeaponHP = yourFoodWeaponHP - opponentHP;
        console.log(`${this.name} hp after attack: ${yourFoodWeaponHP}`);
    }
}
const iceCream = new BadFood ("ice cream", "Melt", "Brain Freeze", "Ice Cream Machine Broken");
iceCream.prepare();
iceCream.isFresh();
iceCream.aDayPasses();
iceCream.fight("pizza", "Mouth Burn", "Hot Pepper Storm", "Cheese Grease");
// Do not edit below this line
module.exports = Food