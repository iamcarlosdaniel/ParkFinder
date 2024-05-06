import { requestService } from "../services/request.service.js";

const getAllRequests = async (req, res) => {
  try {
    const allRequest = await requestService.getAllRequests();
    res.status(200).send({ status: "OK", data: allRequest });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllMyRequests = async (req, res) => {
  try {
    const allMyRequest = await requestService.getAllMyRequests(req.user.id);
    res.status(200).send({ status: "OK", data: allMyRequest });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneRequest = async (req, res) => {
  try {
    const requestFound = await requestService.getOneRequest(req.params.id);
    res.status(200).send({ status: "OK", data: requestFound });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createRequest = async (req, res) => {
  try {
    const newRequest = await requestService.createRequest(
      req.body,
      req.user.id
    );
    res.status(200).send({ status: "OK", data: newRequest });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateRequest = async (req, res) => {
  try {
    const requestUpdate = await requestService.updateRequest(
      req.params.id,
      req.body
    );
    res.status(200).send({ status: "OK", data: requestUpdate });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteRequest = async (req, res) => {
  try {
    const requestDelete = await requestService.deleteRequest(req.params.id);
    res.status(200).send({ status: "OK", data: requestDelete });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const requestController = {
  getAllRequests,
  getAllMyRequests,
  getOneRequest,
  createRequest,
  updateRequest,
  deleteRequest,
};
