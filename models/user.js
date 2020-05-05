module.exports = function (sequelize, DataTypes) {

return sequelize.define('user', {
firstName: {
  type: DataTypes.STRING, 
  allowNull: true 
},
lastName: {
  type: DataTypes.STRING, 
  allowNull: true 
},
email: {
  type: DataTypes.STRING, 
  allowNull: false 
},
passwordhash: {
  type: DataTypes.STRING,
  allowNull: false
}, 
});
};