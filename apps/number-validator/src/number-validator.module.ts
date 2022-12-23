import { Module } from '@nestjs/common';
import { SocketClient } from '../socket/socket-client';
import { SocketModule } from '../socket/socket.module';
import { NumberValidatorController } from './number-validator.controller';
import { NumberValidatorService } from './number-validator.service';

@Module({
  imports: [SocketModule],
  controllers: [NumberValidatorController],
  providers: [NumberValidatorService, SocketClient],
})
export class NumberValidatorModule {}
