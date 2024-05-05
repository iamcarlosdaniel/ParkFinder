import Car from "../database/models/car.model.js";

const getAllCars = async () => {
  try {
    const allCars = await Car.find();
    return allCars;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllMyCars = async (userId) => {
  try {
    const allMyCars = await Car.find({ user_id: userId }).populate("user_id");
    return allMyCars;
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

const createCar = async (carData, userId) => {
  try {
    const newCar = new Car({
      user_id: userId,
      ...carData,
    });
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
  getAllMyCars,
  getOneCar,
  createCar,
  updateCar,
  deleteCar,
};
