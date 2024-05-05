import { Router } from "express";
import { carController } from "../../controllers/car.controller.js";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";

const router = Router();

//See all cars
router.get("/auth/cars", authenticationRequired, carController.getAllCars);

//See all my cars
router.get(
  "/auth/users/cars",
  authenticationRequired,
  carController.getAllMyCars
);

//See a car
router.get(
  "/auth/users/cars/:id",
  authenticationRequired,
  carController.getOneCar
);

//Create a new car
router.post(
  "/auth/users/cars",
  authenticationRequired,
  carController.createCar
);

//Update a car
router.put(
  "/auth/users/cars/:id",
  authenticationRequired,
  carController.updateCar
);

//Delete a car
router.delete(
  "/auth/cars/:id",
  authenticationRequired,
  carController.deleteCar
);

export default router;
