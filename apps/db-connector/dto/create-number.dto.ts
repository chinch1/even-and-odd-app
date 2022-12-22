import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateNumberDto {
  @IsNotEmpty()
  @IsNumber()
  value: number;

  @IsNotEmpty()
  @IsString()
  type: string;
}
