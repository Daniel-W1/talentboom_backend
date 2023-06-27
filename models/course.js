import mongoose from "mongoose";
import faker from "faker";

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: true,
    },
    description:{
        type: String,
        required: true
    },
    instructor:{
        type: String,
        required: true,
    },
    startDate:{
        type: Date,
        required: true,
    },
    endDate:{
        type: Date,
        required: true,
    },
    enrollementCapacity:{
        type: Number,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    roadmap:{
        type: String,
        required: true,
    },

} , {timestamps: true});

const Course = mongoose.model('Course', CourseSchema);
export default Course;

const fakeCourses = [];

for (let i = 0; i < 30; i++) {
    const course = {
        title: faker.lorem.words(3),
        description: faker.lorem.paragraph(),
        instructor: faker.name.findName(),
        startDate: faker.date.future(),
        endDate: faker.date.future(),
        enrollementCapacity: faker.datatype.number({ min: 20, max: 100 }),
        category: faker.random.word(),
        roadmap: faker.internet.url(),
    };

    fakeCourses.push(course);
}

// // Save fake courses to the database
// Course.insertMany(fakeCourses)
//     .then(() => {
//         console.log("Fake courses created successfully");
//     })
//     .catch((error) => {
//         console.error("Error creating fake courses", error);
// });