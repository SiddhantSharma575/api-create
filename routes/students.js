import express from "express";
import Student from "../models/studentDetail.js";

const router = express.Router();

router.get("/", async (req, res) => {
  {
    try {
      const studentDetails = await Student.find();

      res.status(200).json(studentDetails);
    } catch (error) {
      res.status(404).json({
        message: "Error Message",
      });
    }
  }
});

export default router;
