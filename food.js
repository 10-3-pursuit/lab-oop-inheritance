class Food {
    constructor (name, daysToSpoil, fresh = true) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }
    Prepare() {
        console.log(`${this.name} is being prepared`)
    }
    isFresh() {
        if (this.daysToSpoil > 0) {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} goes bad`)
        } else {
            console.log(`The expiration date has passed and ${this.name} is no longer edible`)
        }
    }
    aDayPasses() {
        this.daysToSpoil --
         this.isFresh()
    }
}





module.exports = Food
