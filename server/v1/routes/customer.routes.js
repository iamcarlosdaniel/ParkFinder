import { Router } from "express";
import { customerController } from "../../controllers/customer.controller.js";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";
import { authorizationRequired } from "../../middlewares/authorization.middleware.js";

const router = Router();

//See top customers
router.get(
  "/auth/admin/users/customers/top/:topNumber",
  authenticationRequired,
  authorizationRequired,
  customerController.getTopCustomers
);

//See worst customers
router.get(
  "/auth/admin/users/customers/worst/:worstNumber",
  authenticationRequired,
  authorizationRequired,
  customerController.getWorstCustomers
);

router.get(
  "/auth/admin/users/customers/cancellations",
  authenticationRequired,
  authorizationRequired,
  customerController.getCustomerCancellations
);

export default router;
