import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Res,
  HttpStatus,
  Header,
} from '@nestjs/common';
import { UrlService } from './url.service';
import { Response } from 'express';

@Controller()
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

 @Post('/api/shorten')
 @Header('Content-Type', 'application/json')
async shorten(@Body() body: { url: string; customCode?: string }) {
  const result = await this.urlService.shorten(body.url, body.customCode);

  return {
    success: true,
    statusCode: HttpStatus.CREATED,
    message: 'Short URL created successfully',
    data: {
      shortUrl: result.shortUrl,
      originalUrl: result.originalUrl
    }
  };
}



  @Get('/r/:shortCode')
  async redirect(@Param('shortCode') shortCode: string, @Res() res: Response) {
    const originalUrl = await this.urlService.redirect(shortCode);
    return res.redirect(302, originalUrl);
  }

  @Get('/api/stats/:shortCode')
  async stats(@Param('shortCode') shortCode: string) {
    return this.urlService.getStats(shortCode);
  }
}
