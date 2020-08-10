module.exports = (sequelize, DataTypes) => {
  //conflict with reserved word 'class'
    const tb_class =  sequelize.define(
      "class",
      {
        professor: {
          type: DataTypes.STRING(25), 
          allowNull: false 
        },
        day:{
          type : DataTypes.DATE,
          allowNull:false
        },
        time:{
          type : DataTypes.DATE,
          allowNull:false
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false
        }
      }
    )
    tb_class.associate = (db)=>{
        db.class.belongsToMany(db.User, {through:'class_User'})
    }
    return tb_class
  }

  