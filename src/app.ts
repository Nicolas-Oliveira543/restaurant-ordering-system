import express from "express";
import categoryRoutes from "./routers/category.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

const app = express();

app.use(express.json());

// ==============================
// Root
// ==============================
app.get("/", (req, res) => {
    res.redirect("/api-docs");
});

// ==============================
// Swagger Documentation
// ==============================
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec),
);

// ==========================
// Categories
// ==========================
app.use("/categories", categoryRoutes);

export default app;