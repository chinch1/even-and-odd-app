import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNotEmpty } from 'class-validator';
import { EvenOrOdd } from '../enums/even-or-odd';

export class CreateNumberDto {
  @ApiProperty({
    description: 'The number to be created in the database',
    example: 10,
  })
  @IsNotEmpty()
  @IsInt()
  value: number;

  @ApiProperty({
    description:
      'The type of the number to be created in the database (even or odd)',
    example: 'even',
  })
  @IsNotEmpty()
  @IsEnum(EvenOrOdd)
  type: string;
}
