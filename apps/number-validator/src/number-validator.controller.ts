import { Body, Controller, Post } from '@nestjs/common';
import { CreateNumberDto } from '../dto/create-number.dto';
import { NumberValidatorService } from './number-validator.service';

@Controller()
export class NumberValidatorController {
  constructor(
    private readonly numberValidatorService: NumberValidatorService,
  ) {}

  @Post('sendNumber')
  createNumber(@Body() createNumberDto: CreateNumberDto): string {
    return this.numberValidatorService.createNumber(createNumberDto);
  }
}
