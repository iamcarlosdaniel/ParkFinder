import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import v1AuthenticationRoutes from "./v1/routes/authentication.routes.js";

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

//Hello World!
app.get("/helloworld", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
export default app;
