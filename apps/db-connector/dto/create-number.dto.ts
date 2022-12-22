import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { EvenOrOdd } from '../enums/even-or-odd';

export class CreateNumberDto {
  @IsNotEmpty()
  @IsNumber()
  value: number;

  @IsNotEmpty()
  @IsEnum(EvenOrOdd)
  type: string;
}
