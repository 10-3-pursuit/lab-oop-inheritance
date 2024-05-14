// Create class below
class Food {
    constructor(name,daysToSpoil,fresh = true) {
        this.name = name;
        this.daysToSpoil=daysToSpoil;
        this.fresh =fresh;
    }
    prepare(){
        console.log(`${this.name} is being prepared`);
    }

    isFresh(){
        if( this.daysToSpoil > 0 && this.fresh === true){
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`);
        }else{
            this.fresh = false;
            console.log(`${this.name} has spoiled.`);
        }
    }

    aDayPasses(){
        this.daysToSpoil--;
        this.isFresh(); 
    }
}

pizzaSlice =new Food("pizza", 3);

// pizzaSlice.prepare();
// pizzaSlice.isFresh();
// pizzaSlice.aDayPasses();

class BadFood extends Food {
    constructor(name, daysToSpoil, fresh) {
        super(name, daysToSpoil = 20, fresh);
        this.weapons = [
            { name: 'Sprinkle Spray', hitPoints: 3 },
            { name: 'Icing Deluge', hitPoints: 4 },
            { name: 'Sugar Shock', hitPoints: 5 }
        ];
    }
    prepare() {
        console.log(`I am ${this.name} and my calories are too high to count!`);
    }

    fight(enemy) {
        const selectedWeapon = this.weapons[ (Math.floor(Math.random() * this.weapons.length)) ];
        const damage = selectedWeapon.hitPoints;
        enemy.daysToSpoil -= damage;
        console.log(`${this.name} is only has ${enemy.daysToSpoil} days before being spoiled, but I am still at ${this.daysToSpoil} days!`);
    }
}

const apple = new BadFood("Apple");
const donut = new BadFood("Donut");

apple.prepare();
donut.prepare();

apple.fight(donut);
donut.fight(apple);

// Do not edit below this line
module.exports = Food
