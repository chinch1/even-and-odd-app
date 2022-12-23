import { Controller, Get, Query } from '@nestjs/common';
import { GetNumbersDto } from '../dto/get-numbers.dto';
import { DbConnectorService } from './db-connector.service';

@Controller()
export class DbConnectorController {
  constructor(private readonly dbConnectorService: DbConnectorService) {}

  @Get()
  returnHello(): string {
    return this.dbConnectorService.returnHello();
  }

  @Get('lastNumbers')
  findLastTen(@Query() getNumbersDto: GetNumbersDto): Promise<number[]> {
    return this.dbConnectorService.findLastTen(getNumbersDto);
  }
}
