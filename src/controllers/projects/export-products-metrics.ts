import { ExportProductsMetricsService } from "@/services/projects/export-products-metrics";
import { Request, Response } from "express";
import { createReadStream, unlinkSync } from "fs";
import { readFile } from "fs/promises";

export class ExportProductsMetricsController {
	constructor (private readonly exportProductsMetricsService: ExportProductsMetricsService) {}

	async handle(request: Request, response: Response): Promise<any> {
		try {
			const filePath = await this.exportProductsMetricsService.execute();

			response.setHeader('Content-Type', 'application/pdf');
			response.setHeader('Content-Disposition', 'attachment; filename=projects-metrics.pdf');

			return response.download(filePath);
		} catch (error) {
			console.error(error)

			return response.status(500).json({
				message: 'Internal Server Error'
			});
		}
	}
}
