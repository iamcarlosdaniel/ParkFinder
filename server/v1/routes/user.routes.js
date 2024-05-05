import { Router } from "express";
import { userController } from "../../controllers/user.controller.js";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";

const router = Router();

router.get(
  "/auth/users/:id",
  authenticationRequired,
  userController.getOneUser
);

//View user logged
router.get("/auth/users/me", authenticationRequired, userController.getMyUser);

//Update user information
router.put(
  "/auth/users/me",
  authenticationRequired,
  userController.updateMyUser
);

export default router;
