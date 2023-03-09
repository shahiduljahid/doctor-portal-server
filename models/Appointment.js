const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema(
  {  

    doctor:String,
    name:String,
    phoneNumber:String,
    email:String,
    age:String,
    weight:String,
    service:String,
    date:String,
    schedule:String,
    action:String,
    createdDate:String,
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.model("appointment", appointmentSchema);

module.exports = Appointment;
