// Create class below
class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }
  prepare() {
    console.log(`${this.name} is being prepared`);
  }
  isFresh() {
    if (this.fresh && this.daysToSpoil > 0) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`${this.name} has spoiled.`);
    }
  }
  aDayPasses() {
    this.daysToSpoil -= 1;
    this.isFresh();
  }
}
const applePie = new Food("Apple Pie", 3);
// console.log(applePie);
// applePie.prepare();
// applePie.isFresh();
// console.log(applePie.aDayPasses());
// applePie.aDayPasses();
// Do not edit below this line

class BadFood extends Food {
  constructor(name, weapons, daysToSpoil = 20, fresh) {
    super(name, daysToSpoil, fresh);
    this.weapons = weapons;
  }
  prepare() {
    console.log(`I am ${this.name} and my calories are too high to count!`);
  }
  fight(target) {
    const randomWeaponIndex = Math.floor(Math.random() * 3);
    const selectedWeapon = this.weapons[randomWeaponIndex];
    const damageDealt = selectedWeapon.hitPoints;
    target.daysToSpoil -= damageDealt;

    console.log(
      `${target.name} only has ${target.daysToSpoil} days before being spoiled, but I am still at ${this.daysToSpoil} days!`
    );
  }
}
const donutWeapons = [
  { name: "Sprinkle Spray", hitPoints: 3 },
  { name: "Icing Deluge", hitPoints: 4 },
  { name: "Sugar Shock", hitPoints: 5 },
];

const pizzaWeapons = [
  { name: "Mouth Burn", hitPoints: 3 },
  { name: "Hot Pepper Storm", hitPoints: 4 },
  { name: "Cheese Grease", hitPoints: 5 },
];

const donut = new BadFood("Donut", donutWeapons);
const pizza = new BadFood("Pizza", pizzaWeapons);

donut.fight(pizza);
donut.prepare();

module.exports = Food;
