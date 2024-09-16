import { Inject, Injectable } from '@nestjs/common';

import { MongooseService } from '@app/mongoose';

@Injectable()
export class AdditionService {
  constructor(
    @Inject('SECOND_NUMBER')
    private readonly _secondNumber: number,

    private readonly _mongooseService: MongooseService,
  ) {}

  getSum(): number {
    return this._mongooseService.getFirstNumber() + this._secondNumber;
  }

  getSumAsync(): number {
    return (
      Number(this._mongooseService.getFirstNumber()) +
      Number(this._secondNumber)
    );
  }
}
