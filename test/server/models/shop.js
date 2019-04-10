'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define('Shop', {
    name: DataTypes.STRING
  }, {});
  Shop.associate = function(models) {
    // associations can be defined here
    Shop.hasMany(models.coffee,{
      foreignKey:'shop_Id',
      sourceKey:'id'
    });
  };
  return Shop;
};
/*as:'Details',
      foreignKey:{
        name:"shopId",
        sourceKey:"id"
      }


*/
