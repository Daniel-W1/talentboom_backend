import Job from '../models/job.js';

// Create a new job
const createJob = async (req, res) => {
  try {
    const { position, company, description, location, salary, contact } = req.body;
    const job = new Job({ position, company, description, location, salary, contact });
    await job.save();

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create the job' });
  }
};

// Get all jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the jobs' });
  }
};

// Get a single job by ID
const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    console.log(job);

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the job' });
  }
};

// Update a job by ID
const updateJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const { position, company, description, location, salary, contact } = req.body;

    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    job.position = position;
    job.company = company;
    job.description = description;
    job.location = location;
    job.salary = salary;
    job.contact = contact;
    
    await job.save();

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the job' });
  }
};

// Delete a job by ID
const deleteJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findByIdAndDelete(jobId);

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the job' });
  }
};

export { createJob, getJobs, getJobById, updateJob, deleteJob };
