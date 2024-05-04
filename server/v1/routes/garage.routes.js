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

//See a garage
router.get(
  "/auth/garages/:id",
  authenticationRequired,
  garageController.getOneGarage
);

//Create a garage
router.post(
  "/auth/garages",
  authenticationRequired,
  garageController.createGarage
);

//Update a garage
router.put(
  "/auth/garages/:id",
  authenticationRequired,
  garageController.updateGarage
);

//Delete a garage
router.delete(
  "auth/garage/:id",
  authenticationRequired,
  garageController.deleteGarage
);

export default router;
