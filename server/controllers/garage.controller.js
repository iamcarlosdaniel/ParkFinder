import { garageService } from "../services/garage.service.js";

const getAllGarages = async (req, res) => {
  try {
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneGarage = async (req, res) => {
  try {
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createGarage = async (req, res) => {
  try {
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateGarage = async (req, res) => {
  try {
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteGarage = async (req, res) => {
  try {
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const garageController = {
  getAllGarages,
  getOneGarage,
  createGarage,
  updateGarage,
  deleteGarage,
};
