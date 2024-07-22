const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const uploadRoutes = require("./routes/upload");
require("dotenv").config();

connectDB();

app.use(cors());

// Enable pre-flight requests for all routes
app.options("*", cors());
app.use(express.json());
app.use("/api", uploadRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running ${PORT}`);
});
