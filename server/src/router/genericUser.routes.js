import { Router } from "express";
import passport from "passport";
import { login, register, updateProfile, updateUserProfileImage } from "../controllers/genericUser.controller.js";
import upload from "../utils/multer.js";

const router = Router();

router.post('/user/register', register);
router.post('/user/login', login);
router.post('/user/update/profile', passport.authenticate('jwt', { session: false }), updateProfile);
router.post('/user/update/profile/image', passport.authenticate('jwt', { session: false }), upload.single('profileImage'), updateUserProfileImage);

export default router;