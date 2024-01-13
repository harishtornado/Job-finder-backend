// Job controller
import Job from "../model/JobModel.js";

export const createJob = async (req, res) => {
  const data = req.body;
  try {
    const newJob = new Job({
      companyName: data.companyName,
      logoUrl: data.logoUrl,
      jobPosition: data.jobPosition,
      salary: data.salary,
      duration: data.duration,
      jobType: data.jobType,
      remote: data.remote,
      location: data.location,
      description: data.description,
      about: data.about,
      skillsRequired: data.skillsRequired,
      information: data.information,
    });

    await newJob.save();
    res.status(200).json({ message: "Job Added successfully", status: "ok" });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error occured:" + e.message, status: 500 });
  }
};

export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json({ message: "Job fetch successfull", jobs: jobs, status: "ok" });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error occured:" + e.message, status: 500 });
  }
};

export const editJob = async (req, res) => {
  const jobId = req.params.jobId;
  const updatedData = req.body;

  try {
    const updatedJob = await Job.findByIdAndUpdate(jobId, updatedData, {
      new: true,
    });

    if (!updatedJob) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json({
      message: "Job fetch successfull",
      jobs: updatedJob,
      status: "ok",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
