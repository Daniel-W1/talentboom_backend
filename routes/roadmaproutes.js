import express from 'express';
import authenticateToken from '../middleware/authenticateuser.js';
import roleGuard from '../middleware/roleguard.js';
import { createroadmap, deleteroadmap, getroadmapById, getroadmaps, updateroadmap } from '../controllers/roadmapcontroller.js';

const roadmap_router = express.Router();

roadmap_router.get('/', authenticateToken ,getroadmaps);
roadmap_router.get('/:id', authenticateToken ,getroadmapById );
roadmap_router.post('/', authenticateToken , roleGuard('admin') ,createroadmap );
roadmap_router.put('/:id', authenticateToken , roleGuard('admin'), updateroadmap );
roadmap_router.delete('/:id', authenticateToken , roleGuard('admin'), deleteroadmap );

export default roadmap_router;