
module.exports = (sequelize, DataTypes) => {
    const Vaga = sequelize.define('Vaga', {
        Titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Salario: {
            type: DataTypes.NUMERIC,
            allowNull: false
        },
        DataLimite: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }, {
        timestamps: false
    }
    );

    return Vaga;
};