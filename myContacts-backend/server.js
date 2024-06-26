const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoute"));
app.use("/api/users", require("./routes/userRoute"));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
