import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { GLOBAL_NUMBER } from '@common/constants';

import { MongooseService } from './mongoose.service';

@Module({})
export class MongooseModule {
  static forRoot(): DynamicModule {
    return {
      module: MongooseModule,
      providers: [
        {
          provide: 'GLOBAL_NUMBER',
          useValue: GLOBAL_NUMBER,
        },
        MongooseService,
      ],
      exports: [MongooseService],
    };
  }

  static forRootAsync(): DynamicModule {
    return {
      module: MongooseModule,
      imports: [ConfigModule],
      providers: [
        {
          provide: 'GLOBAL_NUMBER',
          useFactory: (configService: ConfigService) =>
            configService.get<number>('GLOBAL_NUMBER'),
          inject: [ConfigService],
        },
        MongooseService,
      ],
      exports: [MongooseService],
    };
  }
}
