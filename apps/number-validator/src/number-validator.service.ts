import { Injectable } from '@nestjs/common';
import { CreateNumberDto } from '../dto/create-number.dto';
import { SocketClient } from '../socket/socket-client';

@Injectable()
export class NumberValidatorService {
  constructor(private readonly socketClient: SocketClient) {}

  createNumber(createNumberDto: CreateNumberDto): string {
    const { value } = createNumberDto;
    const type = value % 2 === 0 ? 'even' : 'odd';
    const newNumber = {
      value,
      type,
    };

    this.socketClient.emitWhenReceiveNumber('newNumber', newNumber);

    return `New ${type} number: ${value} sent to db-connector service and will be inserted into the database when a total of 10 numbers have been sent`;
  }
}
