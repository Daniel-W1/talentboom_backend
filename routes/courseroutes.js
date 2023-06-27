import express from 'express';
import { createCourse, deleteCourse, getCourseById, getCourses, updateCourse } from '../controllers/coursecontroller.js';
const course_router = express.Router();

course_router.get('/',getCourses);
course_router.get('/:id',getCourseById);
course_router.put('/:id',updateCourse);
course_router.delete('/:id',deleteCourse);
course_router.post('/',createCourse);

export default course_router;