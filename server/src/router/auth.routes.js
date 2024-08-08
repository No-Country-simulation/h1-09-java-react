import { Router } from "express";
import { register, login, logout } from "../controllers/auth.controllers.js";
import passport from "passport";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", passport.authenticate('jwt', { session: false }), logout);

export default router;
