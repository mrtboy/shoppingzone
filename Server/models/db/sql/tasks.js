module.exports = (sequelize, DataTypes) => {
    const Tasks = sequelize.define("Tasks", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        productId: {
            type: DataTypes.INTEGER
        },
        done: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                Tasks.belongsTo(models.Users);
            }
        }
    });
    return Tasks;
};