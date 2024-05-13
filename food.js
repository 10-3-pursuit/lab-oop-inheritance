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
    this.daysToSpoil--;
    this.isFresh();
  }
}

const tomato = new Food("tomato", 5, true);

// tomato.prepare();
// tomato.isFresh();
// tomato.aDayPasses();

class BadFood extends Food {
  constructor(name, daysToSpoil = 20, fresh, weapons) {
    super(name, daysToSpoil, fresh);
    this.weapons = weapons;
  }
  prepare() {
    console.log(`I am ${this.name} and my calories are too high to count!`);
  }
  fight(instance) {
    const randomIndex = Math.floor(Math.random() * 3);
    const remainingHitPoints =
      instance.daysToSpoil - this.weapons[randomIndex].hitPoints;
    instance.daysToSpoil = remainingHitPoints;
    console.log(
      `${instance.name} only has ${instance.daysToSpoil} days before beign spoiled, but I am still at ${this.daysToSpoil} days!`
    );
  }
}

const pizzaWeapons = [
  {
    name: "Mouth Burn",
    hitPoints: 3,
  },
  {
    name: "Hot Pepper Storm",
    hitPoints: 4,
  },
  {
    name: "Cheese Grease",
    hitPoints: 5,
  },
];
const pizza = new BadFood("pizza", 20, true, pizzaWeapons);

const donutWeapons = [
  {
    name: "Sprinkle Spray",
    hitPoints: 3,
  },
  {
    name: "Icing Deluge",
    hitPoints: 4,
  },
  {
    name: "Sugar Shock",
    hitPoints: 5,
  },
];
const donut = new BadFood("donut", 20, true, donutWeapons);

pizza.fight(donut);
donut.fight(pizza);

// Do not edit below this line
module.exports = Food;
