import express from "express";
import cors from "cors";
import aiRoutes from "./routes/ai.routes.js";

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.use(
  cors({
    origin: [
      "https://try-code-guardian.vercel.app/",
      "http://localhost:5173"
    ],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/ai", aiRoutes);

export default app;
