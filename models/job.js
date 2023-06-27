import mongoose from 'mongoose';
import faker from 'faker';

const Schema = mongoose.Schema;

const JobSchema = new Schema({
    position:{
        type: String,
        required: true,
    },
    company:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    salary:{
        type: String,
        required: true,
    },
    contact:{
        type: String,
        required: true,
    },
    skills:{
        type: [String],
        ref: 'Course',
    },
}
, {timestamps: true});

const Job = mongoose.model('Job', JobSchema);
export default Job;

const fakeJobs = [];

for (let i = 0; i < 30; i++) {
    const job = {
        position: faker.name.jobTitle(),
        company: faker.company.companyName(),
        description: faker.lorem.paragraph(),
        location: faker.address.city(),
        salary: faker.datatype.number({ min: 20, max: 100 }),
        contact: faker.internet.url(),
        skills: faker.random.word(),
    };

    fakeJobs.push(job);
}

// Job.insertMany(fakeJobs);

