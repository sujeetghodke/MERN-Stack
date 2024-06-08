const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      Type: String,
      required: [true, "please add the contact name"],
    },
    email: {
      Type: String,
      required: [true, "please add the contact email address"],
    },
    phone: {
      Type: String,
      required: [true, "please add the contact phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
