import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfService } from './lib/pdf/pdf.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PdfService],
})
export class AppModule {}
