import { Injectable } from '@nestjs/common';
import { GetNumbersDto } from '../dto/get-numbers.dto';
import { EvenNumber, EvenNumberDocument } from '../schemas/even-number.schemas';
import { OddNumber, OddNumberDocument } from '../schemas/odd-number.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DbConnectorService {
  constructor(
    @InjectModel(EvenNumber.name)
    private evenNumberModel: Model<EvenNumberDocument>,
    @InjectModel(OddNumber.name)
    private oddNumberModel: Model<OddNumberDocument>,
  ) {}

  returnHello(): string {
    return 'Use "even" or "odd" in the URL to get the specific numbers';
  }

  createEvenNumber(value: number): Promise<EvenNumber | OddNumber> {
    const newEvenNumber = new this.evenNumberModel({ value });
    return newEvenNumber.save();
  }

  createOddNumber(value: number): Promise<EvenNumber | OddNumber> {
    const newOddNumber = new this.oddNumberModel({ value });
    return newOddNumber.save();
  }

  findLastTen(
    getNumbersDto: GetNumbersDto,
  ): Promise<EvenNumber[] | OddNumber[]> {
    const { type } = getNumbersDto;

    if (type === 'even') {
      return this.evenNumberModel.find().exec();
    } else if (type === 'odd') {
      return this.oddNumberModel.find().exec();
    }
  }
}
