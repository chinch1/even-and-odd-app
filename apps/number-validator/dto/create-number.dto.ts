import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateNumberDto {
  @IsNotEmpty()
  @IsInt()
  value: number;
}
