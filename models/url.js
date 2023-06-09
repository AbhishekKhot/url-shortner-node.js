const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Url extends Model {
        static associate(models) { }
    }
    Url.init(
        {
            original_url: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            short_url: {
                type: DataTypes.STRING,
                allowNull: false
            },
            visited_count: {
                type: DataTypes.INTEGER
            }
        },
        {
            sequelize,
            tableName: 'url'
        }
    )
    return Url
}