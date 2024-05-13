// Create class below

class Food {
    constructor(name, daysToSpoil, fresh = true){
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh
    }
    prepare(){
        console.log(`${this.name} is being prepared`)
    }
    isFresh(){
        if(this.daysToSpoil > 0){
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        } else {
            console.log(`${this.name} has spoiled.`)
        }
    }
    aDayPasses(){
        this.daysToSpoil -= 1
        this.isFresh()
    }
}

// const apple = new Food("apple", 4)
// console.log(apple)
// apple.prepare()
// apple.isFresh()
// apple.aDayPasses()


class BadFood extends Food {
    constructor(name, daysToSpoil, fresh = true, weapons){
        super(name, fresh);
        this.daysToSpoil = 20;
        this.weapons = weapons;
    }
    prepare(){
        console.log(`I am ${this.name} and my calories are too high to count!`)
    }
    fight(target){
        const randomIndex = Math.floor(Math.random() * 3)
        const randomWeapon = this.weapons[randomIndex]
        target.daysToSpoil -= randomWeapon.hitPoints
        if(target.daysToSpoil <= 0){
            target.fresh = false
        } 
        if(this.daysToSpoil <= 0){
            this.fresh = false
        }
        console.log(`${target.name} only has ${target.daysToSpoil} days before being spoiled , but I am still at ${this.daysToSpoil} days!`)
    }
}

const donutWeapons = [
    {name: 'Sprinkle Spray', hitPoints: 3},
    {name: 'Icing Deluge', hitPoints: 4},
    {name: 'Sugar Shock', hitPoints: 5},
]
const pizzaWeapons = [
    {name: 'Mouth Burn', hitPoints: 3},
    {name: 'Hot Pepper Storm', hitPoints: 4},
    {name: 'Cheese Grease', hitPoints: 5},
]
const pizza = new BadFood("pizza", 3, true, pizzaWeapons)
const donut = new BadFood("donut", 4, true, donutWeapons)
donut.prepare()
pizza.prepare()
donut.fight(pizza)
pizza.fight(donut)
// donut.isFresh()
// donut.aDayPasses()


// Do not edit below this line
module.exports = Food
