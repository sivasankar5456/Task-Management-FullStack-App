
import express from 'express';
import { Login, Profile, SignUp } from '../controller/AuthController.js';

const router = express.Router();

// signup Route
router.post('/signup',SignUp);
// Login Route
router.post('/login',Login );

// // Protected Route
// router.get('/profile', Profile );

export default router;
