const Fighter = require("./src/Fighter.js");
const Weapon = require("./src/Weapon.js")
const Shield = require("./src/Shield.js")

const sword = new Weapon("ÃpÃŠe")
const shield = new Shield("Bouclier")
  
/** Create Heracles  */
const heracles = new Fighter("đ§ Heracles", 20, 6);

heracles.weapon = sword

heracles.shield = shield



/** Create the opponent  */
const boar = new Fighter("đ Erymanthian Boar", 25, 12);


/**
 * Helper to produce the result of a round
 */
const roundDisplay = (fighter1, fighter2) => {
  return `${fighter1.name} đĄī¸  ${fighter2.name} đ ${fighter2.name} : ${fighter2.life}`;
};

/**
 * Helper to dispatch fighters between winner and loser
 */
const score = (fighter1, fighter2) => {
  return fighter1.isAlive() ? {
    winner: fighter1,
    loser: fighter2,
  } : {
    winner: fighter2,
    loser: fighter1
  };
};

{
  let round = 0;

  while (heracles.isAlive() && boar.isAlive()) {
      console.log(`đ Round #${round}`);

      heracles.fight(boar);
      console.log(roundDisplay(heracles, boar));

      boar.fight(heracles);
      console.log(roundDisplay(boar, heracles));

      round++;
  }

  const result = score(heracles, boar);

  console.log(`đ ${result.loser.name} is dead`);
  console.log(`đ ${result.winner.name} wins (đ ${result.winner.life} )`);
}

