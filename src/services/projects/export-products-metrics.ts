import { readFile, writeFile } from "fs/promises";
import Handlebars from "handlebars";
import path from "path";
import puppeteer from "puppeteer";


export class ExportProductsMetricsService {
	async execute(): Promise<string> {
		const htmlTemplate = await readFile(path.resolve(__dirname, '..', '..', 'template', 'template.hbs'));
		const htmlTemplateCompiler = Handlebars.compile(htmlTemplate.toString());
		const compiledHtmlTemplate = htmlTemplateCompiler({
			title: 'Project #1',
			text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati velit quis quos optio voluptatem quam qui
			minima! Voluptatem mollitia maxime ullam nesciunt quisquam suscipit. Velit repellat aperiam rerum quibusdam
			pariatur?`
		});

		await writeFile(path.resolve(__dirname, 'tmp', `${Date.now()}.html`), compiledHtmlTemplate);

		const browser = await puppeteer.launch({
			headless: true,
		});

		const page = await browser.newPage();

		await page.setContent(compiledHtmlTemplate);

		await page.emulateMediaType('screen')

		const pdf =	await page.pdf({
			format: 'letter',
			landscape: true
		});

		await browser.close();

		const pdfFilePath = path.resolve(__dirname, 'tmp', `${Date.now()}.pdf`);

		await writeFile(pdfFilePath, pdf);

		return pdfFilePath;
	}
}
