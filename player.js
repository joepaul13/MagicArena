const { calculateAttackDamage } = require("./utils");

class Player {
  constructor(health, attack, defense) {
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }

  getAttackDamage(diceRoll) {
    return calculateAttackDamage(this.attack, diceRoll); // Use utils function
  }

  takeDamage(damage) {
    this.health -= damage;
    if (this.health < 0) {
      this.health = 0; // Ensure health doesn't go negative
    }
  }
}

module.exports = { Player };
