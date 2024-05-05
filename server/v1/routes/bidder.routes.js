import { Router } from "express";
import { bidderController } from "../../controllers/bidder.controller.js";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";
import { authorizationRequired } from "../../middlewares/authorization.middleware.js";

const router = Router();

//See top bidders
router.get(
  "/auth/admin/users/bidders/top/:topNumber",
  authenticationRequired,
  authorizationRequired,
  bidderController.getTopBidder
);

//See worst bidders
router.get(
  "/auth/admin/users/bidders/worst/:worstNumber",
  authenticationRequired,
  authorizationRequired,
  bidderController.getWorstBidder
);

router.get(
  "/auth/admin/users/bidders/cancellations",
  authenticationRequired,
  authorizationRequired,
  bidderController.getBidderCancellations
);

export default router;
