import Player from './player';
import Egg from './egg';
import Rarity from './rarity';

// Define associations here
Player.hasMany(Egg, {
    foreignKey: 'playerId',
    as: 'eggs'
});

Egg.belongsTo(Player, {
    foreignKey: 'playerId',
    as: 'player'
});

Rarity.hasMany(Egg, {
    foreignKey: 'rarityId',
    as: 'eggs'
});

Egg.belongsTo(Rarity, {
    foreignKey: 'rarityId',
    as: 'rarity'
});

export { Player, Egg, Rarity };
