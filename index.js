import express from 'express';
import mongoose from 'mongoose';
import job_router from './routes/jobroutes.js ';    
import user_router from './routes/userroutes.js';
import auth_router from './routes/authroutes.js';
import dotenv from "dotenv";
import cors from 'cors';
import course_router from './routes/courseroutes.js';
import roadmap_router from './routes/roadmaproutes.js';

dotenv.config();

const app = express();

const connectionString = 'mongodb+srv://daniel:leinad@cluster0.hrcv40s.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log('Error: ' + err);
    }   
);

app.use(express.json());
app.use(cors())
app.use('/jobs', job_router);
app.use('/user', user_router);
app.use('/auth', auth_router);
app.use('/courses', course_router);
app.use('/roadmap', roadmap_router);

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(3000, () => {
    console.log('app listening on port 3000!');
    }
);


/*
    {
  "username": "damuru",
  "email": "damuru@gmail.com",
  "password": "yabudu",
  "role": "admin"
    }

    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhbXVydSIsImlkIjoiNjQ3YjhmMmQ2OGZjMjUwMjA3Nzk3NmM5Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg1ODE5MjI2LCJleHAiOjE2ODg0MTEyMjZ9.NKNGMqVXj45r3VlWOlLc1Eo340tVEol7mljSME0rWtI"

*/
