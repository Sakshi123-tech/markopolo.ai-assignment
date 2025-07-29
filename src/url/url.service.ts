import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Url, UrlDocument } from './schemas/url.schema';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UrlService {
  constructor(
    @InjectModel(Url.name) private urlModel: Model<UrlDocument>,
    private configService: ConfigService,
  ) {}

  async shorten(originalUrl: string, customCode?: string) {
    const nanoid = (await import('nanoid')).nanoid; // ✅ Safe for CommonJS & Docker
    const shortCode = customCode || nanoid(7);

    const existing = await this.urlModel.findOne({ shortCode });
    if (existing) throw new ConflictException('Short code already exists');

    const newUrl = await this.urlModel.create({ originalUrl, shortCode });
    const baseUrl = this.configService.get<string>('BASE_URL');

    return {
      originalUrl: newUrl.originalUrl,
      shortUrl: `${baseUrl}/r/${newUrl.shortCode}`,
    };
  }

  async redirect(shortCode: string) {
    const url = await this.urlModel.findOne({ shortCode });
    if (!url) throw new NotFoundException('Short code not found');

    url.clicks++;
    await url.save();

    return url.originalUrl;
  }

  async getStats(shortCode: string) {
    const url = await this.urlModel.findOne({ shortCode });
    if (!url) throw new NotFoundException('Short code not found');

    const baseUrl = this.configService.get<string>('BASE_URL');
    return {
      originalUrl: url.originalUrl,
      shortUrl: `${baseUrl}/r/${url.shortCode}`,
      customCode: url.shortCode,
      clicks: url.clicks,
    };
  }
}
