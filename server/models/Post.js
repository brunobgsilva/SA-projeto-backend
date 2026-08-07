const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    const Post = sequelize.define('Post', {
        title: DataTypes.STRING,
        text: DataTypes.STRING,
        likes: DataTypes.INTEGER,
        dislikes: DataTypes.INTEGER
    });

    return Post;
};