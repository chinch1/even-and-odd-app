import { Injectable } from '@nestjs/common';
import { GetNumbersDto } from '../dto/get-numbers.dto';
import { EvenNumber } from '../entities/even-number.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { OddNumber } from '../entities/odd-number.entity';

@Injectable()
export class DbConnectorService {
  constructor(
    @InjectRepository(EvenNumber)
    private readonly evenNumberRepository: MongoRepository<EvenNumber>,
    @InjectRepository(OddNumber)
    private readonly oddNumberRepository: MongoRepository<OddNumber>,
  ) {}

  returnHello(): string {
    return 'Use "even" or "odd" in the URL to get the specific numbers';
  }

  createEvenNumber(value: number): Promise<EvenNumber | OddNumber> {
    return this.createEvenNumber(value);
  }

  createOddNumber(value: number): Promise<EvenNumber | OddNumber> {
    return this.createOddNumber(value);
  }

  findLastTen(
    getNumbersDto: GetNumbersDto,
  ): Promise<EvenNumber[] | OddNumber[]> {
    const { type } = getNumbersDto;

    if (type === 'even') {
      return this.evenNumberRepository.find();
    } else if (type === 'odd') {
      return this.oddNumberRepository.find();
    }
  }
}
