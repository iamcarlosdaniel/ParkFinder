import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import v1AuthenticationRoutes from "./v1/routes/authentication.routes.js";
import v1UserRoutes from "./v1/routes/user.routes.js";
import v1CarRoutes from "./v1/routes/car.routes.js";
import v1GarageRoutes from "./v1/routes/garage.routes.js";

import v1CustomerRoutes from "./v1/routes/customer.routes.js";
import v1BidderRoutes from "./v1/routes/bidder.routes.js";

//Tests
import v1PruebaRoutes from "./v1/routes/prueba.routes.js";

const app = express();

app.use(cors());

// app.use(
//   cors({
//     origin: "//dominio",
//     credentials: true,
//   })
// );

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

//API Versioning
app.use("/api/v1", v1AuthenticationRoutes);
app.use("/api/v1", v1UserRoutes);
app.use("/api/v1", v1CarRoutes);
app.use("/api/v1", v1GarageRoutes);
app.use("/api/v1", v1PruebaRoutes);
app.use("/api/v1", v1CustomerRoutes);
app.use("/api/v1", v1BidderRoutes);

//Hello World!
app.get("/helloworld", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
export default app;
