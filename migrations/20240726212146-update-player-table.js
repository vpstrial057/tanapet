'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('rarities', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            image: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('NOW')
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('NOW')
            }
        });

        // Create eggs table
        await queryInterface.createTable('eggs', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            hatchTime: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            image: {
                type: Sequelize.STRING,
                allowNull: false
            },
            rarityId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'rarities',
                    key: 'id'
                }
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('NOW')
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('NOW')
            }
        });

        // Create players table
        await queryInterface.createTable('players', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            telegramId: {
                type: Sequelize.BIGINT,
                allowNull: false
            },
            username: {
                type: Sequelize.STRING,
                allowNull: false
            },
            coins: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 2000
            },
            hasMintFirstEgg: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('NOW')
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('NOW')
            }
        });

        // Add foreign key playerId to eggs table
        await queryInterface.addColumn('eggs', 'playerId', {
            type: Sequelize.INTEGER,
            references: {
                model: 'players',
                key: 'id'
            }
        });
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable('eggs');
        await queryInterface.dropTable('players');
        await queryInterface.dropTable('rarities');
    }
};