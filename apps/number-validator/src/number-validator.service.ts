import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { EvenNumber } from 'apps/db-connector/entities/even-number.entity';
import { OddNumber } from 'apps/db-connector/entities/odd-number.entity';
import { CreateNumberDto } from '../dto/create-number.dto';

@Injectable()
export class NumberValidatorService {
  constructor(private readonly httpService: HttpService) {}
  async createNumber(
    createNumberDto: CreateNumberDto,
  ): Promise<EvenNumber | OddNumber> {
    const { value } = createNumberDto;
    const type = value % 2 === 0 ? 'even' : 'odd';
    const path = 'http://db-connector:3001/sendNumber';
    const body = {
      value,
      type,
    };
    console.log('Sending number to db-connector...');

    const { data } = await this.httpService.axiosRef.post(path, body);
    return data;
  }
}
