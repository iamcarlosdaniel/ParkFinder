import { Router } from "express";
import { authenticationController } from "../../controllers/authentication.controller.js";
import { validateSchema } from "../../middlewares/validate.middleware.js";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";
import {
  registerSchema,
  loginSchema,
} from "../../database/schemas/authentication.schema.js";

const router = Router();

router.post(
  "/register",
  validateSchema(registerSchema),
  authenticationController.register
);

router.post(
  "/login",
  validateSchema(loginSchema),
  authenticationController.login
);

router.post("/logout", authenticationController.logout);

router.get(
  "/auth/status",
  authenticationRequired,
  authenticationController.authStatus
);
export default router;
