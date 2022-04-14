import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: String,
  email: String,
  college: String,
  studentId: String,
  filename: String,
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
