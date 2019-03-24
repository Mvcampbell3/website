module.exports = function(sequelize, DataTypes) {
  const Message = sequelize.define("Message", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: true
    },

    text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return Message;
};