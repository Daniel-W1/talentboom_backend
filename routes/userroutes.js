import express from 'express';
import { getUserById, getUsers, updateUseremail, deleteUser, updateUserpassword } from '../controllers/usercontroller.js';
import authenticateToken from '../middleware/authenticateuser.js';
import roleGuard from '../middleware/roleguard.js';

const user_router = express.Router();

user_router.get('/', authenticateToken, roleGuard('admin'), getUsers);
user_router.get('/:id',authenticateToken ,getUserById );
user_router.put('/:id/email', authenticateToken ,updateUseremail );
user_router.put('/:id/password', authenticateToken,updateUserpassword)
user_router.delete('/:id', authenticateToken ,deleteUser );

export default user_router;
