import { Request, Response } from "express";

export class ExportProductsMetricsController {
	constructor () {}

	async handle(request: Request, response: Response): Promise<Response> {
		try {
			return response.status(200).json({
				message: 'Tô aqui!',
			});
		} catch (error) {
			return response.status(500).json({
				message: 'Internal Server Error',
			});
		}
	}
}
