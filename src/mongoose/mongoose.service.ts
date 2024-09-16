import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class MongooseService {
  constructor(
    @Inject('MONGOOSE_OPTIONS')
    private readonly _mongooseNumber: number,
  ) {}

  getFirstNumber(): number {
    return this._mongooseNumber;
  }
}
