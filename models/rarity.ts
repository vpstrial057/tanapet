import {DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional} from "sequelize";
import DbConnexion from "../db/dbConnexion";

const sequelize = DbConnexion.getInstance().getSequelize();

class Rarity extends Model<InferAttributes<Rarity>, InferCreationAttributes<Rarity>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare image: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Rarity.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
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
    modelName: 'Rarity',
    tableName: 'rarities',
    timestamps: true,
});

export default Rarity;