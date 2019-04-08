'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('coffees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
     shop_Id:{
      type: Sequelize.INTEGER,
        references:{
        model:'Shops',
          key:'id'
      }
      ,

      onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('coffees');
  }
};

