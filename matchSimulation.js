const { Player } = require("./player");

function simulateMatch(playerA, playerB) {
  let attackingPlayer = playerA.health < playerB.health ? playerA : playerB;
  let defendingPlayer = attackingPlayer === playerA ? playerB : playerA;

  while (attackingPlayer.health > 0 && defendingPlayer > 0) {
    const attackingDiceRoll = Math.floor(Math.random() * 6) + 1;
    const defendingDiceRoll = Math.floor(Math.random() * 6) + 1;

    const attackDamage = attackingPlayer.getAttackDamage(attackingDiceRoll);
    const defendedDamage = defendingPlayer.strength * defendingDiceRoll;

    const damageDealt = Math.max(attackDamage - defendedDamage, 0);
    defendingPlayer.takeDamage(damageDealt);

    [attackingPlayer, defendingPlayer] = [defendingPlayer, attackingPlayer];
  }

  return attackingPlayer.health === 0 ? defendingPlayer : attackingPlayer;
}

module.exports = { simulateMatch };
