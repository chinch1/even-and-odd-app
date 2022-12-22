import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateNumberDto {
  @IsNotEmpty()
  @IsNumber()
  value: number;
}
