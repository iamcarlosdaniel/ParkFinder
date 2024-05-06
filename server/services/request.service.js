import Request from "../database/models/request.model.js";

const getAllRequests = async () => {
  try {
    const allRequests = await Request.find();
    return allRequests;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllMyRequests = async (userId) => {
  try {
    const allMyRequests = await Request.find({ user_id: userId }).populate(
      "user_id"
    );
    return allMyRequests;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getOneRequest = async (requestId) => {
  try {
    const requestFound = await Request.findById(requestId);
    if (!requestFound) {
      throw new Error("Request not found");
    }
    return requestFound;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createRequest = async (requestData, userId) => {
  try {
    const newRequest = new Request({
      user_id: userId,
      ...requestData,
    });
    await newRequest.save();
    return newRequest;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateRequest = async (requestId, requestData) => {
  try {
    const requestUpdate = await Request.findByIdAndUpdate(
      { _id: requestId },
      requestData,
      { new: true }
    );
    return requestUpdate;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteRequest = async (requestId) => {
  try {
    const requestDelete = await Request.findByIdAndDelete(requestId);
    if (!requestDelete) {
      throw new Error(error.message);
    }
    return requestDelete;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const requestService = {
  getAllRequests,
  getAllMyRequests,
  getOneRequest,
  createRequest,
  updateRequest,
  deleteRequest,
};
