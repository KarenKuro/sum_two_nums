import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class MongooseService {
  constructor(
    @Inject('GLOBAL_NUMBER')
    private readonly _mongooseNumber: number,
  ) {}

  getFirstNumber(): number {
    return this._mongooseNumber;
  }
}
