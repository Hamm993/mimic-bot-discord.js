const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Infraction = sequelize.define('guild', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    guildId: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    reason: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'No reason provided',
    },
    enforcerId: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }
});

module.exports = Infraction;