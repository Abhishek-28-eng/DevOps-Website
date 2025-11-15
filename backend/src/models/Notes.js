import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Note = sequelize.define("note", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING(255), allowNull: false },
  category: { type: DataTypes.STRING(100), allowNull: false },
  pdf_link: { type: DataTypes.STRING(1024), allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: "notes",
  timestamps: false
});
