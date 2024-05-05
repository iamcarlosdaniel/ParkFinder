import { Router } from "express";
import { pruebaController } from "../../controllers/prueba.controller.js";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";
import { authorizationRequired } from "../../middlewares/authorization.middleware.js";
const router = Router();

//Prueba
router.get(
  "/auth/top20Ofertantes",
  authenticationRequired,

  pruebaController.getTop20Ofertantes
);

export default router;
