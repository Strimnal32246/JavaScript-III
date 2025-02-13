/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(gameAttrs) {
  (this.createdAt = gameAttrs.createdAt),
    (this.name = gameAttrs.name),
    (this.dimensions = gameAttrs.dimensions);
}

GameObject.prototype.dimensions = function(length, width, height) {
  return this.dimensions;
};

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(charStats) {
  GameObject.call(this, charStats);
  this.healthPoints = charStats.healthPoints;
}
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
// Humaniod Function
function Humanoid(attrs) {
  CharacterStats.call(this, attrs);
  (this.team = attrs.team),
    (this.weapons = attrs.weapons),
    (this.language = attrs.language);
}

// tell humaniod about charStats
Humanoid.prototype = Object.create(CharacterStats.prototype);

//Humanoid Prototype
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
};
/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

/*
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
*/

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
function Villian(attributes) {
  Humanoid.call(this, attributes);
}
Villian.prototype = Object.create(Humanoid.prototype);

Villian.prototype.villian_attack = function(hero) {
  --hero.hp;
  if (hero.hp <= 0) {
    return "I hath slain thee!";
  } else {
    return hero.hp;
  }
};
Villian.prototype.death = function(villian) {
  villian.hp === 0;
  return `\n You have slain ${villian.name}, thou vicious beast!`;
};

// The makings of heroes
function Hero(attributes) {
  Humanoid.call(this, attributes);
}
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.hero_attack = function(villian) {
  --villian.hp;
  if (villian.hp <= 0) {
    return "I have slain thee";
  } else {
    return villian.hp;
  }
};
Hero.prototype.kill_move = function(villian) {
  let triumph = `I have killed thee, thou ruffian! [translated from Meowish]`;
  let villianDeath = Villian.prototype.death(villian);
  let heroWins = triumph + villianDeath;
  return heroWins;
};

Hero.prototype.hero_revive = function() {
  return ++this.hp;
};

// Our valiant heroes
const littlth = new Hero({
  createdAt: new Date(),
  hp: 20,
  name: "Bruce",
  faction: "Small Town Flat Living in a City Flat",
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  weapons: ["Teeth", "Claws"],
  language: "Meowish"
});

const dylanThomas = new Hero({
  createdAt: new Date(),
  hp: 20,
  name: "bruces",
  faction: "Small Town Cat Living in a City Flat",
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  weapons: ["Teeth", "Claws"],
  language: "Meowish"
});

// The foes in our tale!
const windows = new Villian({
  createdAt: new Date(),
  hp: 2,
  name: "Window Screen",
  faction: "Apartment",
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  weapons: ["Grate", "Glass"],
  language: "None"
});
console.log(windows);

const garbageDisposal = new Villian({
  createdAt: new Date(),
  hp: 2,
  name: "Garbage Disposal",
  faction: "Apartment",
  weapons: ["Spinny metal of doom", "Horrible grating noise"],
  language: "None"
});

console.log(littlth);
console.log(windows.villian_attack(bruce));
console.log(windows.villian_attack(bruce));
console.log(windows.villian_attack(bruce));
console.log(bruce.hero_revive());
console.log(bruce.hero_revive());
console.log(bruce.hero_revive());
console.log(bruce.hero_attack(garbageDisposal));
console.log(bruce.hero_attack(garbageDisposal));
console.log(bruce.kill_move(windows));
