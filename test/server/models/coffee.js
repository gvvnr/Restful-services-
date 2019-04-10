'use strict';
module.exports = (sequelize, DataTypes) => {
  const coffee = sequelize.define('coffee', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    //shop_Id: DataTypes.STRING
  }, {});
  coffee.associate = function(models) {
    // associations can be defined here
    coffee.belongsTo(models.Shop, {
      foreignKey: 'shop_Id',
      targetKey : 'id'

    }
    );
  //  coffee.belongsTo(models.s)

  };
  return coffee;
};
/*
 as:"Details",
      foreignKey:{
        name:"shopId",
        targetKey:"id"
      }
*/
