module.exports = (sequelize, DataTypes) => {
  const POST = sequelize.define(
    "POST",
    {
      star: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      classification: {
        type: DataTypes.STRING,
        allowNull: false
      },
      professor: {
        type: DataTypes.STRING,
        allowNull: false
      },
      class: {
        type: DataTypes.STRING,
        allowNull: false
      },
      like: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      dislike: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }
  )
  POST.associate = (db) => {
    db.POST.hasMany(db.User)
    db.POST.hasMany(db.comment)
    db.POST.belongsToMany(db.hashtag, { through: 'POST_hashtag' })
  }
  return POST
}
