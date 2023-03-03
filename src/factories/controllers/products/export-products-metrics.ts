import { ExportProductsMetricsController } from "@/controllers/projects/export-products-metrics";
import { ExportProductsMetricsService } from "@/services/projects/export-products-metrics";

export function exportProductsMetricsControllerFactory(): ExportProductsMetricsController {
	const exportProductsMetricsService = new ExportProductsMetricsService();
	const exportProductsMetricsController = new ExportProductsMetricsController(exportProductsMetricsService);

	return exportProductsMetricsController;
}
