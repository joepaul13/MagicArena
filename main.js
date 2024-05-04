const { Player } = require("./player");
const { calculateAttackDamage } = require("./utils"); // Import utils

function simulateMatch(playerA, playerB) {
  while (playerA.health > 0 && playerB.health > 0) {
    const playerAAttackDamage = calculateAttackDamage(
      playerA.attack,
      Math.floor(Math.random() * 6) + 1
    ); // Simulate dice roll (1-6)
    playerB.health -= playerAAttackDamage;

    const playerBAttackDamage = calculateAttackDamage(
      playerB.attack,
      Math.floor(Math.random() * 6) + 1
    );
    playerA.health -= playerBAttackDamage;
  }

  return playerA.health > 0 ? playerA : playerB; // Winner is player with remaining health
}

// ... Test code using Player and simulateMatch

const assert = require("assert");

let player;
let playerA;
let playerB;
let winner;

player = new Player(50, 5, 10);
assert.equal(player.getAttackDamage(3), 15); // Example using calculateAttackDamage
assert.equal(player.getAttackDamage(6), 30);

player = new Player(100, 5, 10);
player.takeDamage(20);
assert.equal(player.health, 80);
player.takeDamage(50);
assert.equal(player.health, 0);

playerA = new Player(100, 10, 15);
playerB = new Player(50, 5, 10);
winner = simulateMatch(playerA, playerB);
assert.equal(winner, playerA);

console.log("All tests passed!");
