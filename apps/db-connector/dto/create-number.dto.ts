import { IsEnum, IsInt, IsNotEmpty } from 'class-validator';
import { EvenOrOdd } from '../enums/even-or-odd';

export class CreateNumberDto {
  @IsNotEmpty()
  @IsInt()
  value: number;

  @IsNotEmpty()
  @IsEnum(EvenOrOdd)
  type: string;
}
