// simple script to create admin from env values
import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import { Admin } from "./models/Admin.js";
import { sequelize } from "./config/db.js";

(async () => {
  await sequelize.authenticate();
  await sequelize.sync();
  const email = process.env.SEED_ADMIN_EMAIL || "abhishektalole47@gmail.com";
  const name = process.env.SEED_ADMIN_NAME || "Abhishek";
  const pass = process.env.SEED_ADMIN_PASSWORD || "Abhi@2808";

  const exists = await Admin.findOne({ where: { email } });
  if (exists) {
    console.log("Admin exists:", email);
    process.exit(0);
  }
  const hash = await bcrypt.hash(pass, 10);
  const admin = await Admin.create({ name, email, password_hash: hash });
  console.log("Created admin:", admin.email);
  process.exit(0);
})();
