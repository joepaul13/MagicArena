const assert = require("assert");
const { Player, simulateMatch } = require("./matchSimulation");

describe("Player Class", () => {
  it("should calculate attack damage correctly", () => {
    const player = new Player(50, 5, 10);
    assert.equal(player.getAttackDamage(3), 30);
    assert.equal(player.getAttackDamage(6), 60);
  });

  it("should reduce health correctly on damage", () => {
    const player = new Player(100, 5, 10);
    player.takeDamage(20);
    assert.equal(player.health, 80);
    player.takeDamage(50); // Should not go negative
    assert.equal(player.health, 0);
  });
});

describe("Match Simulation", () => {
  it("should handle scenarios where player A wins", () => {
    const playerA = new Player(100, 10, 15);
    const playerB = new Player(50, 5, 10);
    const winner = simulateMatch(playerA, playerB);
    assert.equal(winner, playerA);
  });

  it("should handle scenarios where Player B wins", () => {
    const playerA = new Player(50, 5, 5); // Weaker A
    const playerB = new Player(100, 10, 10);
    const winner = simulateMatch(playerA, playerB);
    assert.equal(winner, playerB);
  });

  it("should handle draws (both players reach 0 health simultaneously)", () => {
    const playerA = new Player(50, 10, 10); // High attack, low health for both
    const playerB = new Player(50, 10, 10);
    const winner = simulateMatch(playerA, playerB);
    assert.equal(winner.health, 0); // Both at 0 health
  });
});

console.log("All tests passed!");
