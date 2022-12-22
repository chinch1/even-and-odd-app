import { IsEnum } from 'class-validator';
import { EvenOrOdd } from '../enums/even-or-odd';

export class GetNumbersDto {
  @IsEnum(EvenOrOdd)
  type: EvenOrOdd;
}
