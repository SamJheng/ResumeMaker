import { AppService } from './app.service';
import {
  Controller,
  Post,
  Body,
  Res,
  HttpException,
  HttpStatus,
  Get,
} from '@nestjs/common';
import { Response } from 'express';
import { PdfService } from './lib/pdf/pdf.service';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly pdfService: PdfService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('generate')
  async generatePdf(@Body('url') url: string, @Res() res: Response) {
    try {
      const pdfBuffer = await this.pdfService.generatePdf(url);

      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="generated.pdf"',
      });

      return res.send(pdfBuffer);
    } catch (error) {
      throw new HttpException(
        'Failed to generate PDF',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
