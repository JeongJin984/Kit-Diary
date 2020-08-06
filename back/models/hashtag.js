module.exports = (sequelize, DataTypes) => {
    const hashtag = sequelize.define(
        "hashtag",
        {
            tag: {
                type: DataTypes.STRING,
                allowNull: false
            },
            
        }
    )
    hashtag.associate = (db) => {
        db.hashtag.belongsToMany(db.class, { through: 'POST_hashtag' })
    }
    return hashtag
}
