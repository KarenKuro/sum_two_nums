import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from './mongoose';
import { AdditionModule } from './addition';

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

// @Module({
//   imports: [
//     MongooseModule.forRoot({ globalNumber: 55 }),
//     AdditionModule.forFeature({ globalNumber: 55 }, { secondNumber: 70 }),
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
