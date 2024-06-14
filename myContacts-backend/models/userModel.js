const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    Username: {
      type: String,
      required: [true, "Please add the user name !"],
    },
    Email: {
      type: String,
      required: [true, "Please add the email"],
      unique: [true, "Email address already taken"],
    },
    Password: {
      type: String,
      required: [true, "Please add the user password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
