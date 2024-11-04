import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class PdfService {
  async generatePdf(website_url: string): Promise<Buffer> {
    const browser = await puppeteer.launch({
      headless: true, // 設定為 false 可以看到瀏覽器介面
      args: ['--window-size=1920,1080'],
    });

    // Create a new page
    const page = await browser.newPage();

    // Open URL in current page
    await page.goto(website_url, { waitUntil: 'networkidle0' });

    // To reflect CSS used for screens instead of print
    await page.emulateMediaType('screen');

    // Generate the PDF as Uint8Array
    const pdfUint8Array = await page.pdf({
      margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
      printBackground: true,
      format: 'A4',
    });

    // Convert Uint8Array to Buffer
    const pdfBuffer = Buffer.from(pdfUint8Array);

    // Close the browser instance
    await browser.close();
    return pdfBuffer;
  }
}
