function main() {
  const playerA = new Player(50, 5, 10);
  const playerB = new Player(100, 10, 5);

  const winner = simulateMatch(playerA, playerB);
  console.log(`Winner: ${winner.name || "Player A"}`); // Optional: Name property
}

module.exports = { Player, simulateMatch };
