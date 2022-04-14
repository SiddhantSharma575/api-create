import PostMessage from "../models/postMessage.js";
import Student from "../models/studentDetail.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({
      message: "Error Message",
    });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateHeader = async (req, res) => {
  const student = {
    name: req.header("name"),
    email: req.header("email"),
    college: req.header("college"),
    studentId: req.header("studentId"),
    filename: req.header("filename"),
  };
  const newStudent = Student(student);
  try {
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
