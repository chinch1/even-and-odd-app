import { Injectable } from '@nestjs/common';
import { GetNumbersDto } from '../dto/get-numbers.dto';
import { EvenNumber } from '../entities/even-number.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { OddNumber } from '../entities/odd-number.entity';
import { MongoRepository } from 'typeorm';
import { structureResponse } from '../helpers/structure-response';

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

  createEvenNumbers(evenNumbers: number[]) {
    const newEvenNumbers = evenNumbers.map((value) => {
      return { value };
    });

    if (newEvenNumbers.length) {
      this.evenNumberRepository.insertMany(newEvenNumbers);
    }
  }

  createOddNumbers(oddNumbers: number[]) {
    const newOddNumbers = oddNumbers.map((value) => {
      return { value };
    });

    if (newOddNumbers.length) {
      this.oddNumberRepository.insertMany(newOddNumbers);
    }
  }

  findLastTen(getNumbersDto: GetNumbersDto): Promise<number[]> {
    const { type } = getNumbersDto;

    if (type === 'even') {
      const evenNumbers = this.evenNumberRepository.find();
      return structureResponse(evenNumbers);
    }
    const oddNumbers = this.oddNumberRepository.find();
    return structureResponse(oddNumbers);
  }
}
