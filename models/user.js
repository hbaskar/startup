/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('appl_user', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      firstname: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      lastname: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      username: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      about: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      last_login: {
        type: DataTypes.DATE,
        allowNull: true
      },
      status: {
        type: DataTypes.ENUM('active','inactive'),
        allowNull: true,
        defaultValue: 'active'
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      tableName: 'appl_users'
    });
  };
  