'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});
  comments.associate = function(models) {
    // associations can be defined here
    comments.belongsTo(models.post, {as : 'post',foreignKey :'postId'} )
  };
  return comments;
};
