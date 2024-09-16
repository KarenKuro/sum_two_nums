import { Controller, Get } from '@nestjs/common';

import { AdditionService } from './addition.service';

import { NumberResponseDTO } from './dtos/number-response.dto';

@Controller('addition')
export class AdditionController {
  constructor(private readonly _additionService: AdditionService) {}

  @Get('sum')
  getSum(): NumberResponseDTO {
    return this._additionService.getSum();
  }
}
