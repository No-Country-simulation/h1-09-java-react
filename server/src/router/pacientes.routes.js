import { Router } from "express";
import {
    obtenerPacientes,
    obtenerPacientesById,
    register,
    login,
    updateProfile,
    updatePatientProfileImage
} from "../controllers/pacientes.controllers.js";
import passport from "passport";
import upload from "../utils/multer.js";
import {logout} from "../controllers/auth.controllers.js";

const router = Router();

router.get("/pacientes", passport.authenticate('jwt', { session: false }), obtenerPacientes);
router.get("/pacientes/:id", passport.authenticate('jwt', { session: false }), obtenerPacientesById);
router.post('/pacientes/register', register);
router.post('/pacientes/login', login);
router.post('/pacientes/logout', passport.authenticate('jwt', { session: false }), logout);
router.post('/pacientes/update/profile', passport.authenticate('jwt', { session: false }), updateProfile);
router.post('/pacientes/update/profile/image', passport.authenticate('jwt', { session: false }), upload.single('profileImage'), updatePatientProfileImage);


export default router;
