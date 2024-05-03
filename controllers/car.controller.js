import { carService } from "../services/car.service.js";

const getAllCars = async (req, res) => {
  try {
    const allCars = await carService.getAllCars();
    res.status(200).send({ status: "OK", data: allCars });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneCar = async (req, res) => {
  try {
    const carFound = await carService.getOneCar(req.params.id);
    res.status(200).send({ status: "OK", data: carFound });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createCar = async (req, res) => {
  try {
    const newCar = await carService.createCar(req.body);
    res.status(200).send({ status: "OK", data: newCar });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateCar = async (req, res) => {
  try {
    const carUpdate = await carService.updateCar(req.params.id, req.body);
    res.status(200).send({ status: "OK", data: carUpdate });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteCar = async (req, res) => {
  try {
    const carDelete = await carService.deleteCar(req.params.id);
    res.status(200).send({ status: "OK", data: carDelete });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const carController = {
  getAllCars,
  getOneCar,
  createCar,
  updateCar,
  deleteCar,
};
