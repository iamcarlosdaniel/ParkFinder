import { bidderService } from "../services/bidder.service.js";

const getAllBidders = async (req, res) => {
  try {
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getTopBidder = async (req, res) => {
  try {
    const topBidders = await topEntitiesService.getTopBidder(
      req.params.topNumber
    );
    res.status(200).send({ status: "OK", data: topBidders });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getWorstBidder = async (req, res) => {
  try {
    const worstBidders = await worstEntitiesService.getWorstBidder(
      req.params.worstNumber
    );
    res.status(200).send({ status: "OK", data: worstBidders });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getBidderCancellations = async (req, res) => {
  try {
    res.status(200).send({ status: "OK", data: VARIABLE });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const bidderController = {
  getAllBidders,
  getTopBidder,
  getWorstBidder,
  getBidderCancellations,
};
