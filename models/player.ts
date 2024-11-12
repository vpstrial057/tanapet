import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import DbConnexion from "../db/dbConnexion";

const sequelize = DbConnexion.getInstance().getSequelize();

class Player extends Model<InferAttributes<Player>, InferCreationAttributes<Player>> {
    declare id: CreationOptional<number>;
    declare telegramId: number;
    declare username: string;
    declare coins: CreationOptional<number>;
    declare hasMintFirstEgg: CreationOptional<boolean>;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Player.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    telegramId: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    coins: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 2000
    },
    hasMintFirstEgg: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
    modelName: 'Player',
    tableName: 'players',
    timestamps: true,
});

export default Player;
