import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({
  companyName: String,
  logoUrl: String,
  jobPosition: String,
  salary: String,
  duration: String,
  jobType: String,
  remote: String,
  location: String,
  description: String,
  about: String,
  skillsRequired: [String],
  information: String,
});

export default mongoose.model("Job", jobSchema);
