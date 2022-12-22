import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateNumberDto } from '../dto/create-number.dto';
import { GetNumbersDto } from '../dto/get-numbers.dto';
import { EvenNumber } from '../entities/even-number.entity';
import { OddNumber } from '../entities/odd-number.entity';
import { DbConnectorService } from './db-connector.service';

@Controller()
export class DbConnectorController {
  constructor(private readonly dbConnectorService: DbConnectorService) {}

  @Get()
  returnHello(): string {
    return this.dbConnectorService.returnHello();
  }

  @Post('sendNumber')
  createNumber(
    @Body() createNumberDto: CreateNumberDto,
  ): Promise<EvenNumber | OddNumber> {
    console.log('Received number from number-validator...');

    const { type, value } = createNumberDto;
    if (type.toLowerCase() === 'even') {
      return this.dbConnectorService.createEvenNumber(value);
    }
    return this.dbConnectorService.createOddNumber(value);
  }

  @Get('lastNumbers')
  findLastTen(@Query() getNumbersDto: GetNumbersDto): Promise<number[]> {
    return this.dbConnectorService.findLastTen(getNumbersDto);
  }
}
