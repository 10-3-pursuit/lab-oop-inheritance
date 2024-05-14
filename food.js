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

class BadFood extends Food {
  constructor(name) {
    super(name, 20);
    this.weapons = [
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
  }

  prepare() {
    console.log(`I am ${this.name} and my calories are too high to count!`);
  }

  fight(otherBadFood) {
    const random =
      this.weapons[Math.floor(Math.random() * this.weapons.length + 1)];
    otherBadFood.daysToSpoil -= random.hitPoints;
    console.log(
      `${otherBadFood.name} only has ${otherBadFood.daysToSpoil} days before being spoiled, but I am still at ${this.daysToSpoil} days!`
    );
  }
}

// Do not edit below this line
module.exports = Food;
