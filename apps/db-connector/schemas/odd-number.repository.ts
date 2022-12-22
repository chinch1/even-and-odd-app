import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { OddNumber } from './odd-number.schema';

@Injectable()
export class OddNumbersRepository extends Repository<OddNumber> {
  constructor(private datasource: DataSource) {
    super(OddNumber, datasource.manager);
  }

  async createOddNumber(number: number): Promise<OddNumber> {
    const newOddNumber = new OddNumber();
    newOddNumber.value = number;
    await this.save(newOddNumber);
    return newOddNumber;
  }

  async findAllOddNumbers(): Promise<number[]> {
    const oddNumbers = await this.find();
    return oddNumbers.map((oddNumber) => oddNumber.value);
  }
}
