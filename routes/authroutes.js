import express from 'express';
import { signin, signup } from '../controllers/authcontroller.js';

const auth_router = express.Router();

auth_router.post('/signup', signup);
auth_router.post('/signin' , signin);

export default auth_router;
