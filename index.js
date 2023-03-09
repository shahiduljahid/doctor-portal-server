// external imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

//internal Import
const Appointment = require("./models/Appointment");

const app = express();
// database connection
const uri = process.env.DB_URI;
mongoose.set("strictQuery", false);
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 4040;

app.use(cors());

app.use(express.json());
//routing setup
app.get("/totalAppointments", async (req, res) => {
  try {
    const docs = await Appointment.find();
    res.json(docs);
  } catch {
    res.json({ error: "unknown error" });
  }
});
app.post("/appointments", async (req, res) => {
  const body = req.body;
  console.log(body)
  try {
    const docs = await Appointment.find({ date: body.data });
    console.log(docs)
    res.json(docs);
  } catch {
    res.json({ error: "unknown error" });
  }
});

app.post("/addappointment", async (req, res) => {
  console.log(req.body);
  // res.send(true);
  try {
    const newData = new Appointment(req.body);
    const result = await newData.save();

    if (result) {
      res.send(true);
    }

  } catch (error) {
    res.json({ err: "unknown error" });
  }
});

app.use("/", (req, res) => {
  res.json({ mess: "iam ALive" });
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
