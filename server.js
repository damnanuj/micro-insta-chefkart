import express from "express";
import { connection } from "./src/config/database.js";
import userRoutes from "./src/routes/userRoutes.js";
import postRoutes from "./src/routes/postRoutes.js";
import bodyParser from "body-parser";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

const app = express();

//>>=====Middlewares============>>
app.use(bodyParser.json());
app.use(express.json());

//=====cloudniary configs=============>>
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 8000;

connection();

// >>====Routes===========>>
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) =>{
  res.send("micro_instagram Home Route")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
