'use strict';
module.exports = (sequelize, DataTypes) => {
  const loginDetails = sequelize.define('loginDetails', {
    Name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  loginDetails.associate = function(models) {
    // associations can be defined here
    //loginDetails.hasOne()
  };
  return loginDetails;
};
