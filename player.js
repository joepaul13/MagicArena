class Player {
  constructor(health, strength, attack) {
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }

  getAttackDamage(diceRoll) {
    return this.attack * diceRoll;
  }

  takeDamage(damage) {
    this.health -= damage;
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

module.exports = { Player };
