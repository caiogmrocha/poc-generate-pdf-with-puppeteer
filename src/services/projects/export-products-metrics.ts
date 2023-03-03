import { readFile, writeFile } from "fs/promises";
import Handlebars from "handlebars";
import path from "path";
import puppeteer from "puppeteer";


export class ExportProductsMetricsService {
	async execute(): Promise<string> {
		const htmlTemplate = await readFile(path.resolve(__dirname, '..', '..', 'template', 'template.hbs'));
		const htmlTemplateCompiler = Handlebars.compile(htmlTemplate.toString());
		const compiledHtmlTemplate = htmlTemplateCompiler({
			message: 'Hello World'
		});

		const browser = await puppeteer.launch({
			headless: true,
		});

		const page = await browser.newPage();

		await page.goto(`data:text/html;charset=UTF-8,${compiledHtmlTemplate}`, {
			waitUntil: 'networkidle0',
		});

		const pdf =	await page.pdf({
			printBackground: true,
			format: 'A4',
			margin: {
				top: '20px',
				left: '20px',
				right: '20px',
				bottom: '20px',
			},
		});

		await browser.close();

		const filePath = path.resolve(__dirname, 'tmp', `${Date.now()}.pdf`);

		await writeFile(filePath, pdf);

		return filePath;
	}
}
