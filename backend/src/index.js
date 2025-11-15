import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./config/db.js";
import authRoutes from "./routes/auth.js";
import blogRoutes from "./routes/blogs.js";
import notesRoutes from "./routes/notesRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// small rate limiter for auth endpoints
import rateLimit from "express-rate-limit";
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 25
});

app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/notes", notesRoutes);

app.get("/", (req, res) => res.send("DevOpsDaily API"));

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    await sequelize.authenticate();
    // for dev: sync models -> create tables if not exist
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  } catch (err) {
    console.error("Failed to start:", err);
    process.exit(1);
  }
})();
