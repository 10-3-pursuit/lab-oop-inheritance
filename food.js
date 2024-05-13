// Create class below
class Food {
    constructor(name, daysToSpoil, fresh=true){
        this.name = name
        this.daysToSpoil = daysToSpoil
        this.fresh = fresh
    }
    prepare(food) {
        console.log(`${food.name} is being prepared`)
    }
    isFresh(food) {
        const {name, fresh, daysToSpoil} = food;
        fresh === true && daysToSpoil > 0 ? `There are ${daysToSpoil} days left before ${name} spoils.` : `${name} has spoiled.`
    }
    aDayPasses(food) {
        food.daysToSpoil --;
        this.isFresh();
    }
}


// Do not edit below this line
module.exports = Food
