// Create class below
class food {
    constructor(name, daysToSpoil, fresh){
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = !fresh ? fresh : true;
    }
    prepare(food) {
        console.log(`${food.name} is being prepared`)
    }
}
// Do not edit below this line
module.exports = Food
