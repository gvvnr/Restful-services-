'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});
  post.associate = function(models) {
    // associations can be defined here
    //post.hasMany(models.comment,{as : 'comment',foreignKey :''})
  };
  return post;
};
