import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { MongooseModule } from '@app/mongoose';
import { SECOND_NUMBER } from '@common/constants';

import { AdditionService } from './addition.service';
import { AdditionController } from './addition.controller';

@Module({
  imports: [MongooseModule],
  controllers: [AdditionController],
  providers: [AdditionService],
})
export class AdditionModule {
  static forFeature(): DynamicModule {
    return {
      module: AdditionModule,
      imports: [MongooseModule.forRoot()],
      providers: [
        {
          provide: 'SECOND_NUMBER',
          useValue: SECOND_NUMBER,
        },
        AdditionService,
      ],
      exports: [AdditionService],
    };
  }

  static forFeatureAsync(): DynamicModule {
    return {
      module: AdditionModule,
      imports: [ConfigModule, MongooseModule.forRootAsync()],
      providers: [
        {
          provide: 'SECOND_NUMBER',
          useFactory: (configService: ConfigService) =>
            configService.get<number>('SECOND_NUMBER'),
          inject: [ConfigService],
        },
        AdditionService,
      ],
      exports: [AdditionService],
    };
  }
}
