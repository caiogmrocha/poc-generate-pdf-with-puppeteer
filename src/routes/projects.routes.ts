import { exportProductsMetricsControllerFactory } from "@/factories/controllers/products/export-products-metrics";
import { Router } from "express";

const projectsRouter = Router();

projectsRouter.get('/export/pdf', (req, res) => exportProductsMetricsControllerFactory().handle(req, res));

export { projectsRouter };
