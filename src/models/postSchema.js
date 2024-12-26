import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import User from "./userSchema.js";

const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  images: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
});

User.hasMany(Post, { foreignKey: "user_id", as: "posts" });
Post.belongsTo(User, { foreignKey: "user_id", as: "user" });

export default Post;
