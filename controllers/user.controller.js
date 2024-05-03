import { userService } from "../services/user.service.js";

const getUser = async (req, res) => {
  try {
    const userFound = await userService.getUser(req.user.id);
    res.status(200).send({ status: "OK", data: userFound });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateUser = async (req, res) => {
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
  getUser,
  updateUser,
};
