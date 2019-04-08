'use strict';
module.exports = (sequelize, DataTypes) => {
  const login = sequelize.define('login', {
    Name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  login.associate = function(models) {
    // associations can be defined here
   /* login.hasOne(logindetails,{
      foreignKey : 'id',
      as :loginDetailsData

    })*/


  };
  return login;
};
