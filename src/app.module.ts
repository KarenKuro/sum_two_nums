import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from './mongoose';
import { AdditionModule } from './addition';

// This option is intended for passing numbers from the .env file.

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync(),
    AdditionModule.forFeatureAsync(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// Option using constants

// @Module({
//   imports: [MongooseModule.forRoot(), AdditionModule.forFeature()],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
