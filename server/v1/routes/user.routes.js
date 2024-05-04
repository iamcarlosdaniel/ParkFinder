import { Router } from "express";
import { userController } from "../../controllers/user.controller.js";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";

const router = Router();

//View user information
router.get("/auth/users", authenticationRequired, userController.getUser);

//Update user information
router.put("/auth/users", authenticationRequired, userController.updateUser);

export default router;
