import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { EvenOrOdd } from '../enums/even-or-odd';

export class GetNumbersDto {
  @ApiProperty({
    description:
      'The type of the number to be created in the database (even or odd)',
    example: 'even',
  })
  @IsEnum(EvenOrOdd)
  type: EvenOrOdd;
}
