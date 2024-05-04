import { Router } from "express";
import { authenticationController } from "../../controllers/authentication.controller.js";
import { validateSchema } from "../../middlewares/validate.middleware.js";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";
import {
  registerSchema,
  loginSchema,
} from "../../database/schemas/authentication.schema.js";

const router = Router();

//Register new user
router.post(
  "/register",
  validateSchema(registerSchema),
  authenticationController.register
);

//Login a user
router.post(
  "/login",
  validateSchema(loginSchema),
  authenticationController.login
);

//Logout user
router.post("/logout", authenticationController.logout);

//View authentication status
router.get(
  "/auth/status",
  authenticationRequired,
  authenticationController.authStatus
);
export default router;
