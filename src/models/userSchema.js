import { DataTypes } from "sequelize";
import {sequelize} from "../config/database.js";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  mobile_number: {
    type: DataTypes.BIGINT,
    unique: true,
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  post_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

export default User;
