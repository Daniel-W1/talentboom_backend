import express from 'express';
import { createJob, getJobById, getJobs, updateJob, deleteJob } from '../controllers/jobcontroller.js';
import authenticateToken from '../middleware/authenticateuser.js';
import roleGuard from '../middleware/roleguard.js';

const job_router = express.Router();

job_router.get('/', authenticateToken ,getJobs);
job_router.get('/:id', authenticateToken ,getJobById );
job_router.post('/', authenticateToken , roleGuard('admin') ,createJob );
job_router.put('/:id', authenticateToken , roleGuard('admin'), updateJob );
job_router.delete('/:id', authenticateToken , roleGuard('admin'), deleteJob );

export default job_router;