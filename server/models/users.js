module.exports = (sequelize, DataTypes) => 
{
  const Users = sequelize.define("Users", 
  {
    username: 
    {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    country: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: 
    {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  
  return Users;
  
};