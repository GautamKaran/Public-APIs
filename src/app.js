import express from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
); // for cross Origin Resource

app.use(helmet()); // use to secure HTTP headers
app.use(express.json({ limit: "16kb" })); // from data
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // url data
app.use(express.static("public"));

// routes import
import healthCheckRoutes from "./routes/healthcheck.routes.js";

// routes declaration
app.use("/api/v1/healthcheck", healthCheckRoutes);

export default app;
