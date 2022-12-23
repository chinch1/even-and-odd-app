import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateNumberDto {
  @ApiProperty({
    description: 'The number to be created in the database',
    example: 10,
  })
  @IsNotEmpty()
  @IsInt()
  value: number;
}
