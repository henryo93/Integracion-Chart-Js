const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");

const Empleado = sequelize.define(
  "empleado",
  {
    EMPLOYEE_ID: {
      type: DataTypes.INTEGER,
    },
    FIRST_NAME: {
      type: DataTypes.STRING,
    },
    LAST_NAME: {
      type: DataTypes.STRING,
    },
    EMAIL: {
      type: DataTypes.STRING,
    },
    PHONE_NUMBER: {
      type: DataTypes.STRING,
    },
    HIRE_DATE: {
      type: DataTypes.STRING,
    },
    JOB_ID: {
      type: DataTypes.STRING,
    },
    SALARY: {
      type: DataTypes.FLOAT,
    },
    COMMISSION_PCT: {
      type: DataTypes.STRING,
    },
    MANAGER_ID: {
      type: DataTypes.STRING,
    },
    DEPARTMENT_ID: {
      type: DataTypes.INTEGER,
    },
    FechaSincronizacion: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "empleado",
    timestamps: false,
  }
);

module.exports = Empleado;
