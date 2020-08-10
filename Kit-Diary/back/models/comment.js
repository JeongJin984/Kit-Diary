module.exports = (sequelize, DataTypes) => {
    const comment =  sequelize.define(
      "comment",
      {
        content:{
            type: DataTypes.STRING, 
            allowNull: false 
        },
        like:{
            type: DataTypes.INTEGER, 
            allowNull: false 
        },
        dislike:{
            type: DataTypes.INTEGER, 
            allowNull: false 
        }
      }
    )
    return comment
  }
