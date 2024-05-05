import { Router } from "express";
import { userController } from "../../controllers/user.controller.js";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";
import { authorizationRequired } from "../../middlewares/authorization.middleware.js";

const router = Router();

//View user information by id
router.get(
  "/auth/admin/users/:id",
  authenticationRequired,
  authorizationRequired,
  userController.getUser
);

//View user logged
router.get("/auth/users", authenticationRequired, userController.getUserLogged);

//Update user information
router.put(
  "/auth/users",
  authenticationRequired,
  userController.updateUserLogged
);

export default router;
