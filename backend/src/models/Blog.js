import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { Admin } from "./Admin.js";

export const Blog = sequelize.define("blog", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING(255), allowNull: false },
  slug: { type: DataTypes.STRING(255), allowNull: false, unique: true },
  category: { type: DataTypes.STRING(100) },
  short_description: { type: DataTypes.STRING(512) },
  content: { type: DataTypes.TEXT("long") },
  markdown: { type: DataTypes.BOOLEAN, defaultValue: true },
  feature_image_url: { type: DataTypes.STRING(1024) },
  cloudinary_public_id: { type: DataTypes.STRING(255) },
  author_id: { type: DataTypes.INTEGER, allowNull: true },
  is_published: { type: DataTypes.BOOLEAN, defaultValue: true },
  published_at: { type: DataTypes.DATE, allowNull: true },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: "blogs",
  timestamps: false
});

Blog.belongsTo(Admin, { foreignKey: "author_id", as: "author" });
