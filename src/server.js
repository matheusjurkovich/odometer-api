const express = require("express");
const cors = require("cors");

const indexRoutes = require("./routes/index");
const uploadRoutes = require("./routes/upload");

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

app.use("/", indexRoutes);
app.use("/", uploadRoutes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});