// Create class below

class Food {
  constructor(name, daysToSpoil = "number", fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }

  prepare() {
    console.log(`${this.name} is being prepared`);
  }

  isFresh() {
    if (this.daysToSpoil > 0 && this.fresh === true) {
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

class Attack {
  constructor(name, hitPoints, animatation = "attack") {
    this.name = name;
    this.hitPoints = hitPoints;
    this.animatation = animatation;
  }

  attackAnimation() {
    console.log(`you just got hit`);
  }
}

class BadFood extends Food {
  constructor(name, daysToSpoil, attackName1, attackName2, attackName3) {
    super(name, daysToSpoil);
    this.weapons = [
      //   {
      //     name: attackName1,
      //     hitPoints: 3,
      //   },
      //   {
      //     name: attackName2,
      //     hitPoints: 4,
      //   },
      //   {
      //     name: attackName3,
      //     hitPoints: 5,
      //   },
      new Attack(attackName1, 3),
      new Attack(attackName2, 4),
      new Attack(attackName3, 5),
    ];
  }

  prepare() {
    console.log(`I am ${this.name} my calories are too high to count!`);
  }

  fight(otherBadFood) {
    //create randomizer that selects an attack
    let randomAttack = this.weapons[Math.floor(Math.random() * 3)];

    //selected attack will decrease daystospoil by hit points of selected attack
    otherBadFood.daysToSpoil -= randomAttack.hitPoints;

    //log message
    console.log(
      `${otherBadFood.name} is only ${otherBadFood.daysToSpoil} days before being spoiled, but I am still at ${this.daysToSpoil} days!`
    );
  }
}

const nukaCola = new BadFood(
  "nukaCola",
  20,
  "cosmicFizz",
  "bubbleTrouble",
  "glassCannon"
);

const humanFlesh = new BadFood(
  "leg",
  20,
  "toeJutsu",
  "kneeSlapper",
  "breakALeg"
);

// nukaCola.prepare();
// humanFlesh.prepare();
// nukaCola.fight(humanFlesh);
// humanFlesh.fight(nukaCola);

// console.log(nukaCola);

// const humanFlesh = new Food("leg", -2, false);
// humanFlesh.prepare();
// humanFlesh.isFresh();
// humanFlesh.aDayPasses();
// console.log(humanFlesh);

// Do not edit below this line
module.exports = Food;
