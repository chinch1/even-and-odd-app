import { Injectable } from '@nestjs/common';
import { GetNumbersDto } from '../dto/get-numbers.dto';
import { EvenNumber } from '../entities/even-number.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { OddNumber } from '../entities/odd-number.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class DbConnectorService {
  constructor(
    @InjectRepository(EvenNumber)
    private readonly evenNumberRepository: MongoRepository<EvenNumber>,
    @InjectRepository(OddNumber)
    private readonly oddNumberRepository: MongoRepository<OddNumber>,
  ) {}

  returnHello(): string {
    return 'Use type=even | type=odd in the URL to get the specific numbers';
  }

  createEvenNumber(value: number): Promise<any> {
    return this.evenNumberRepository.insert({ value }).then((res) => {
      return res.raw.ops[0];
    });
  }

  createOddNumber(value: number): Promise<EvenNumber> {
    return this.oddNumberRepository.insert({ value }).then((res) => {
      return res.raw.ops[0];
    });
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
