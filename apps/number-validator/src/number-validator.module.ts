import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { NumberValidatorController } from './number-validator.controller';
import { NumberValidatorService } from './number-validator.service';

@Module({
  imports: [HttpModule],
  controllers: [NumberValidatorController],
  providers: [NumberValidatorService],
})
export class NumberValidatorModule {}
