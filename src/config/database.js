import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// >>===========PostGreSql DataBase connection =============>>
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: { require: true, rejectUnauthorized: false },
  },
  define: {
    underscored: true,
  },
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { connection, sequelize };
