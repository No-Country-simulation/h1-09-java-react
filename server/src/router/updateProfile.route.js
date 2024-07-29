import { Router } from "express";
import upload from "../utils/multer.js";
import { updateProfile, uploadProfileImage } from "../controllers/account.controller.js";
import passport from "passport";

const router = Router();

router.post('/update/profile', passport.authenticate('jwt', { session: false }), updateProfile);
router.post('/update/profile/image', passport.authenticate('jwt', { session: false }), upload.single('profileImage'), uploadProfileImage);

export default router;