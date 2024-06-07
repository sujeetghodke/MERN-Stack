const asyncHandler = require("express-async-handler");
//@desc Get all contact
//@route GET api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

//@desc Create contact
//@route POST api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is: ", req.body);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ Message: "Create contact" });
});

//@desc get contact
//@route GET api/contacts/:id
//@access public
const getcontact = asyncHandler(async (req, res) => {
  res.status(200).json({ Message: `Get contact for ${req.params.id}` });
});

//@desc Update contact
//@route PUT api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ Message: `Update contact for ${req.params.id}` });
});

//@desc Delete contact
//@route DELETE api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ Message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getcontact,
  updateContact,
  deleteContact,
};
