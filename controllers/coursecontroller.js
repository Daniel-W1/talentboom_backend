import Course from "../models/course.js";

// Create a new course
const createCourse = async (req, res) => {
    try {
        const { title, description, instructor, startDate, endDate, category, roadmap, enrollementCapacity } = req.body;
        const course = new Course({ title, description, instructor, startDate, endDate, enrollementCapacity, category, roadmap });
        await course.save();
    
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ error: "Failed to create the course" });
    }
}

// Get all courses
const getCourses = async (req, res) => {
    try {
        // console.log('finding here');
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch the courses" });
    }
}

// Get a single course by ID
const getCourseById = async (req, res) => {
    try {
        const courseId = req.params.id;
        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }

        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch the course" });
    }
}

// Update a course by ID
const updateCourse = async (req, res) => {
    try {
        const courseId = req.params.id;
        const { title, description, instructor, startDate, endDate, category, roadmap, enrollementCapacity } = req.body;

        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }

        course.title = title;
        course.description = description;
        course.instructor = instructor;
        course.startDate = startDate;
        course.endDate = endDate;
        course.category = category;
        course.roadmap = roadmap;
        course.enrollementCapacity = enrollementCapacity;

        await course.save();

        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: "Failed to update the course" });
    }
}

// Delete a course by ID
const deleteCourse = async (req, res) => {
    try {
        const courseId = req.params.id;
        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }

        await course.remove();

        res.status(200).json({ message: "Course has been deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete the course" });
    }
}

export { createCourse, getCourses, getCourseById, updateCourse, deleteCourse };

