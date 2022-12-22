import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { EvenNumber } from './even-number.schemas';

@Injectable()
export class EvenNumbersRepository extends Repository<EvenNumber> {
  constructor(private datasource: DataSource) {
    super(EvenNumber, datasource.manager);
  }

  async createEvenNumber(number: number): Promise<EvenNumber> {
    const newEvenNumber = new EvenNumber();
    newEvenNumber.value = number;
    await this.save(newEvenNumber);
    return newEvenNumber;
  }

  async findAllEvenNumbers(): Promise<number[]> {
    const evenNumbers = await this.find();
    return evenNumbers.map((evenNumber) => evenNumber.value);
  }
}
