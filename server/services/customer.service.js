import User from "../database/models/user.model.js";

const getAllCustomers = async () => {
  try {
  } catch (error) {
    throw new Error(error.message);
  }
};

const getTopCustomers = async (topNumber) => {
  try {
    const limitNumber = parseInt(topNumber, 10);

    const topCustomers = await User.aggregate([
      { $match: { role: "customer" } },
      { $sort: { customer_rating: -1 } },
      { $limit: limitNumber },
      {
        $project: {
          username: 1,
          country: 1,
          city: 1,
          customer_rating: 1,
        },
      },
    ]);
    return topCustomers;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getWorstCustomers = async (worstNumber) => {
  try {
    const limitNumber = parseInt(worstNumber, 10);

    const worstCustomers = await User.aggregate([
      { $match: { role: "customer" } },
      { $sort: { customer_rating: 1 } },
      { $limit: limitNumber },
      {
        $project: {
          username: 1,
          country: 1,
          city: 1,
          customer_rating: 1,
        },
      },
    ]);
    return worstCustomers;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getCustomerCancellations = async () => {
  try {
  } catch (error) {
    throw new Error(error.message);
  }
};

export const customerService = {
  getAllCustomers,
  getTopCustomers,
  getWorstCustomers,
  getCustomerCancellations,
};
