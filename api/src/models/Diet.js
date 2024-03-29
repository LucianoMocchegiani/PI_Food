const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diet', {
    id:{
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      // type: DataTypes.INTEGER, // comentar defaultvalue
      // autoIncrement: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,     
    }   
  },
  {timestamps: false});
};

