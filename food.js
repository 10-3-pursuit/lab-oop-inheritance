// Create class below
class Food {
    constructor(name, daysToSpoil, fresh) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }
    prepare() {
        console.log(this.name)
    }
}
// Do not edit below this line
module.exports = Food
