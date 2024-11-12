import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import DbConnexion from "../db/dbConnexion";
import Rarity from "./rarity";

const sequelize = DbConnexion.getInstance().getSequelize();

class Egg extends Model<InferAttributes<Egg>, InferCreationAttributes<Egg>> {
    declare id: CreationOptional<number>;
    declare hatchTime: number;
    declare image: string;
    declare rarityId: number;
    declare playerId: number;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Egg.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    hatchTime: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    rarityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Rarity,
            key: 'id'
        }
    },
    playerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'Egg',
    tableName: 'eggs',
    timestamps: true,
});

export default Egg;
