const assert = require("assert");
// const { Player } = require("./player");
// const { simulateMatch } = require("./matchSimulation");
const { Player, simulateMatch } = require("./main");

let player;
let playerA;
let playerB;
let winner;

player = new Player(50, 5, 10);
assert.equal(player.getAttackDamage(3), 30);
assert.equal(player.getAttackDamage(6), 60);

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
