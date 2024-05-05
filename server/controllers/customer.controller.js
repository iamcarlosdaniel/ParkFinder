import { customerService } from "../services/customer.service.js";

const getAllCustomers = async (req, res) => {
  try {
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getTopCustomers = async (req, res) => {
  try {
    const topCustomers = await customerService.getTopCustomers(
      req.params.topNumber
    );
    res.status(200).send({ status: "OK", data: topCustomers });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getWorstCustomers = async (req, res) => {
  try {
    const worstCustomers = await customerService.getWorstCustomers(
      req.params.worstNumber
    );
    res.status(200).send({ status: "OK", data: worstCustomers });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getCustomerCancellations = async (req, res) => {
  try {
    res.status(200).send({ status: "OK", data: VARIABLE });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const customerController = {
  getAllCustomers,
  getTopCustomers,
  getWorstCustomers,
  getCustomerCancellations,
};
