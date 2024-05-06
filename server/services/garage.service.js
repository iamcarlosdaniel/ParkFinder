import Garage from "../database/models/garage.model.js";

const getAllGarages = async () => {
  try {
    const allGarages = Garage.find();
    return allGarages;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllMyGarages = async (userId) => {
  try {
    const allMyGarages = Garage.find({ user_id: userId }).populate("user_id");
    return allMyGarages;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getOneGarage = async (garageId) => {
  try {
    const garageFound = await Garage.findById(garageId);
    if (!garageFound) {
      throw new Error("Garage not found");
    }
    return garageFound;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createGarage = async (garageData, userId) => {
  try {
    const newGarage = new Garage({
      user_id: userId,
      ...garageData,
    });
    await newGarage.save();
    return newGarage;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateGarage = async (garageId, garageData) => {
  try {
    const garageUpdate = await Garage.findByIdAndUpdate(
      { _id: garageId },
      garageData,
      { new: true }
    );
    return garageUpdate;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteGarage = async (garageId) => {
  try {
    const garageDelete = await Garage.findByIdAndDelete(garageId);
    if (!garageDelete) {
      throw new Error(error.message);
    }
    return { message: "Garage removed correctly" };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const garageService = {
  getAllGarages,
  getAllMyGarages,
  getOneGarage,
  createGarage,
  updateGarage,
  deleteGarage,
};
