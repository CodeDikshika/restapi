const mongoose = require("mongoose");
const validator = require("validator");

const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "email already exists"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  phone: {
    type: Number,
    min: 10,
   
    required: true,
    unique: [true, "Contact Number already exists"],
   
  },
  address: {
    type: String,
    required: true,
  },
});


const Student = new mongoose.model("Student",studentsSchema);
module.exports = Student;