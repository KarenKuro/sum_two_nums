import { Inject, Injectable } from '@nestjs/common';

import { MongooseService } from '@app/mongoose';
import { INumberResponse } from '@common/models';

@Injectable()
export class AdditionService {
  constructor(
    @Inject('SECOND_NUMBER')
    private readonly _secondNumber: number,

    private readonly _mongooseService: MongooseService,
  ) {}

  getSum(): INumberResponse {
    const sumTwoNums =
      Number(this._mongooseService.getFirstNumber()) +
      Number(this._secondNumber);

    return { result: sumTwoNums };
  }
}
