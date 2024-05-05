import User from "../database/models/user.model.js";

const getAllBidders = async () => {
  try {
  } catch (error) {
    throw new Error(error.message);
  }
};

const getTopBidder = async (topNumber) => {
  try {
    const limitNumber = parseInt(topNumber, 10);

    const topBidder = await User.aggregate([
      { $match: { role: "bidder" } },
      { $sort: { bidder_rating: -1 } },
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
    return topBidder;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getWorstBidder = async (worstNumber) => {
  try {
    const limitNumber = parseInt(worstNumber, 10);

    const worstBidder = await User.aggregate([
      { $match: { role: "bidder" } },
      { $sort: { bidder_rating: 1 } },
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
    return worstBidder;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getBidderCancellations = async () => {
  try {
  } catch (error) {
    throw new Error(error.message);
  }
};

export const bidderService = {
  getAllBidders,
  getTopBidder,
  getWorstBidder,
  getBidderCancellations,
};
