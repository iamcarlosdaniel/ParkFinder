import User from "../database/models/user.model.js";

const getUser = async (userId) => {
  try {
    const userFound = await User.findById(userId).select("-password");

    return userFound;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateUser = async (userId, userData) => {
  try {
    const username = userData.username;
    const userFound = await User.findOne({ username });
    if (userFound) {
      throw new Error(
        `I'm sorry, but the username ${userFound.username} is already in use.`
      );
    }

    if (userData.email) {
      throw new Error(
        "Sorry, you can't update your email for security reasons."
      );
    }

    if (userData.password) {
      throw new Error(
        "Sorry, you cannot update your password for security reasons from this section."
      );
    }
    const userUpdate = await User.findOneAndUpdate({ _id: userId }, userData, {
      new: true,
    });

    return userUpdate;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const userService = {
  getUser,
  updateUser,
};
