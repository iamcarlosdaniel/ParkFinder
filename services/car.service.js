import Car from "../database/models/car.model.js";

const getAllCars = async () => {
  try {
    const allCars = await Car.find();
    return allCars;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getOneCar = async (carId) => {
  try {
    const carFound = await Car.findById(carId);

    if (!carFound) {
      throw new Error("Car not found");
    }

    return carFound;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createCar = async (carData) => {
  try {
    const newCar = new Car(carData);
    newCar.save();
    return newCar;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateCar = async (carId, carData) => {
  try {
    const carUpdate = await Car.findByIdAndDelete({ _id: carId }, carData, {
      new: true,
    });
    return carUpdate;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteCar = async (carId) => {
  try {
    const carDelete = await Car.findByIdAndDelete(carId);
    if (!carDelete) {
      throw new Error("Car not found");
    }
    return { messsage: "Car removed correctly" };
  } catch (error) {
    throw new Error(error.message);
  }
};
export const carService = {
  getAllCars,
  getOneCar,
  createCar,
  updateCar,
  deleteCar,
};
