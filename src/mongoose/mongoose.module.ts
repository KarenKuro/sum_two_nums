import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { MongooseService } from './mongoose.service';
import { MongooseOptions } from '@common/models';

@Module({})
export class MongooseModule {
  static forRoot(options: MongooseOptions): DynamicModule {
    return {
      module: MongooseModule,
      providers: [
        {
          provide: 'MONGOOSE_OPTIONS',
          useValue: options.globalNumber,
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
          provide: 'MONGOOSE_OPTIONS',
          useFactory: (configService: ConfigService) =>
            configService.get<number>('MONGOOSE_OPTIONS'),
          inject: [ConfigService],
        },
        MongooseService,
      ],
      exports: [MongooseService],
    };
  }
}
