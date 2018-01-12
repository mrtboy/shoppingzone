//task model => sql task table
//an experimental model to learn and build upon the rest
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