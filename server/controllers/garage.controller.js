import { garageService } from "../services/garage.service.js";

const getAllGarages = async (req, res) => {
  try {
    const allGarages = await garageService.getAllGarages();
    res.status(200).send({ status: "OK", data: allGarages });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllMyGarages = async (req, res) => {
  try {
    const allGarages = await garageService.getAllMyGarages();
    res.status(200).send({ status: "OK", data: allGarages });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneGarage = async (req, res) => {
  try {
    const garageFlound = await garageService.getOneGarage(req.params.id);
    res.status(200).send({ status: "OK", data: garageFlound });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createGarage = async (req, res) => {
  try {
    const newGarage = await garageService.createGarage(req.body, req.user.id);
    res.status(200).send({ status: "OK", data: newGarage });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateGarage = async (req, res) => {
  try {
    const garageUpdate = await garageService.updateGarage(
      req.params.id,
      req.body
    );
    res.status(200).send({ status: "OK", data: garageUpdate });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteGarage = async (req, res) => {
  try {
    const garageDelete = await garageService.deleteGarage(req.params.id);
    res.status(200).send({ status: "OK", data: garageDelete });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const garageController = {
  getAllGarages,
  getAllMyGarages,
  getOneGarage,
  createGarage,
  updateGarage,
  deleteGarage,
};
