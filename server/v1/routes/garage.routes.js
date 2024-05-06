import { Router } from "express";
import { garageController } from "../../controllers/garage.controller.js";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";

const router = Router();

//See all garages
router.get(
  "/auth/garages",
  authenticationRequired,
  garageController.getAllGarages
);

//See all my garages
router.get(
  "/auth/users/garages",
  authenticationRequired,
  garageController.getAllMyGarages
);

//See a garage
router.get(
  "/auth/users/garages/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  garageController.getOneGarage
);

//Create a garage
router.post(
  "/auth/users/garages",
  authenticationRequired,
  garageController.createGarage
);

//Update a garage
router.put(
  "/auth/users/garages/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  garageController.updateGarage
);

//Delete a garage
router.delete(
  "auth/users/garage/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  garageController.deleteGarage
);

export default router;
