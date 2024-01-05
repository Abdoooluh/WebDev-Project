const express = require("express");
const bodyParser = require("body-parser");
const Doctor = require("../models/doctorModel");
const axios = require("axios");

const router = express.Router();

// Middleware to parse JSON bodies
router.use(bodyParser.json());

async function getDoctorBySpecialization(specialization) {
  console.log("getDoctorBySpecialization called");
  try {
    // Replace 'your_server_base_url' with the actual base URL of your server
    const apiUrl = `//localhost:3000/api/doctor/getDoctor/${specialization}`;
    // Make the GET request using Axios
    response = await axios.get(apiUrl);
    const doctorData = response.data;
    return doctorData;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching doctor:", error);
  }
}

// Route handler for the GET API
router.get("/getDoctor/:specialization", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try {
    const { specialization } = req.params;

    // Find the first doctor with the specified specialization
    await Doctor.findOne({ specialization }).then((doctor) => {
      if (doctor) {
        res.json(doctor);
      } else {
        res.status(404).json({ error: "Doctor not found" });
      }
    });
  } catch (error) {
    console.error("Error fetching doctor:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/searchDoctor", async (req, res) => {
  res.header("Access-Control-Allow-Credentials", "true");
  try {
    const requestBody = req.body;
    const medicalConcern = requestBody.medicalConcern;
    if (medicalConcern === "eye") {
      await getDoctorBySpecialization("Ophthalmologist").then((doctor) =>
        res.json(doctor)
      );
    } else if (medicalConcern === "ent") {
      await getDoctorBySpecialization("Otolaryngologist").then((doctor) =>
        res.json(doctor)
      );
    } else if (medicalConcern === "cardio") {
      const doctor = await getDoctorBySpecialization("Cardiologist").then(
        (doc) => {
          res.send(doc);
          console.log("inside then " + " " + doc);
        }
      );
      console.log("outside then " + " " + doctor);
    } else if (medicalConcern === "respiratory") {
      await getDoctorBySpecialization("Pulmonologist").then((doctor) =>
        res.json(doctor)
      );
    } else if (medicalConcern === "gastro") {
      await getDoctorBySpecialization("GP").then((doctor) => res.json(doctor));
    } else if (medicalConcern === "musculoskeletal") {
      await getDoctorBySpecialization("Orthopedist").then((doctor) =>
        res.json(doctor)
      );
    } else if (medicalConcern === "dermatological") {
      await getDoctorBySpecialization("Dermatologist").then((doctor) =>
        res.json(doctor)
      );
    } else if (medicalConcern === "neurological") {
      await getDoctorBySpecialization("Neurologist").then((doctor) =>
        res.json(doctor)
      );
    } else if (medicalConcern === "other") {
      await getDoctorBySpecialization("GP").then((doctor) => res.json(doctor));
    } else {
      res.status(400).json({ error: "Invalid medicalConcern value" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



router.put('/updateBookingStatus/:doctorId/:timeslotKey', async (req, res) => {
  try {
    const { doctorId, timeslotKey } = req.params;

    // Find the doctor by ID
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    // If timeSlots array doesn't exist, create it
    if (!doctor.timeSlots) {
      doctor.timeSlots = [];
    }

    // Find the timeslot by key
    const timeslot = doctor.timeSlots.find(slot => slot.key === parseInt(timeslotKey));

    if (!timeslot) {
      return res.status(404).json({ error: 'Timeslot not found' });
    }

    // Update the bookingStatus to true
    timeslot.bookingStatus = true;

    // Save the updated doctor
    await doctor.save();

    // Return the updated doctor
    return res.json(doctor);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;


module.exports = router;
