import { DataType, DataTypes } from "sequelize";
import sequelize from "../config/db.config";
import User from "./user.model";

const Information = sequelize.define(
  "information",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
Information.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
User.hasOne(Information);
export default Information;
