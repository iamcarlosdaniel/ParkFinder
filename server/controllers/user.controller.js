import { userService } from "../services/user.service.js";

const getOneUser = async (req, res) => {
  try {
    const userFound = await userService.getUser(req.user.id);
    res.status(200).send({ status: "OK", data: userFound });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getMyUser = async (req, res) => {
  try {
    const userFound = await userService.getUser(req.user.id);
    res.status(200).send({ status: "OK", data: userFound });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateMyUser = async (req, res) => {
  try {
    const updatedUser = await userService.updateUser(req.user.id, req.body);
    res.status(200).send({ status: "OK", data: updatedUser });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const userController = {
  getOneUser,
  getMyUser,
  updateMyUser,
};
