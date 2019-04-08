'use strict';
module.exports = (sequelize, DataTypes) => {
  const coffee = sequelize.define('coffee', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  coffee.associate = function(models) {
    // associations can be defined here
    /*coffee.belongsTo(models.Shop, { foreignKey: 'shopId',
    as: 'shopId'``
    });*/
  //  coffee.belongsTo(models.s)

  };
  return coffee;
};
