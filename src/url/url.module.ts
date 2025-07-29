import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';
import { Url, UrlSchema } from './schemas/url.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }])],
  controllers: [UrlController],
  providers: [UrlService],
})
export class UrlModule {}

// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { UrlService } from './url.service';
// import { Url, UrlSchema } from './schemas/url.schema';
// import { ConfigModule } from '@nestjs/config'; // 👈 Add this line

// @Module({
//   imports: [
//     MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }]),
//     ConfigModule, // 👈 Include this for access to ConfigService
//   ],
//   providers: [UrlService],
//   exports: [UrlService],
// })
// export class UrlModule {}
