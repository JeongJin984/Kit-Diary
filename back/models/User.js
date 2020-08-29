module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            nickname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            stnum: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            major: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }
    )
    User.associate = (db) => {
        db.User.hasMany(db.POST)
        db.User.hasMany(db.commnet)
        db.User.belongsToMany(db.class, { through: 'class_User' })
    }
    return User
}
