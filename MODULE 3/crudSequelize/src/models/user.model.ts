import { DataType, DataTypes } from "sequelize";
import sequelize from "../config/db.config";
import Information from "./infor.model";

const User = sequelize.define(
  "user",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

export default User;
