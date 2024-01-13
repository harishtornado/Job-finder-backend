import express from "express";
import { createJob, getJobs, editJob } from "../controllers/JobController.js";

const router = express.Router();

router.post("/newJob", createJob);
router.get("/getJob", getJobs);
router.put("/editJob/:jobId", editJob);

export default router;
