import { ExportProductsMetricsController } from "@/controllers/projects/export-products-metrics";

export function exportProductsMetricsControllerFactory(): ExportProductsMetricsController {
	const exportProductsMetricsController = new ExportProductsMetricsController();

	return exportProductsMetricsController;
}
