import { Controller, Get } from '@nestjs/common';

import { AdditionService } from './addition.service';

@Controller('addition')
export class AdditionController {
  constructor(private readonly _additionService: AdditionService) {}

  @Get('sum')
  getSum(): number {
    return this._additionService.getSum();
  }

  @Get('sum/async')
  getSumAsync(): number {
    return this._additionService.getSumAsync();
  }
}
