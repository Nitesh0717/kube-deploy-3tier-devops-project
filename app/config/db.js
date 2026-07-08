const mongoose = require("mongoose");

const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb://kubedeploy-mongodb:27017/kubedeploy";

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);

    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed");
    console.error(err);

    process.exit(1);
  }
}

module.exports = connectDB;
