import { Injectable } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';
import { OnModuleInit } from '@nestjs/common';
import { CreateNumberDto } from '../../db-connector/dto/create-number.dto';

@Injectable()
export class SocketClient implements OnModuleInit {
  public socketCLient: Socket;
  constructor() {
    this.socketCLient = io('http://db-connector:3001');
  }
  onModuleInit() {
    this.registerEventHandlers();
  }

  emitWhenReceiveNumber(event: string, payload: CreateNumberDto) {
    console.log('Emitting new number:', payload);
    this.socketCLient.emit(event, payload);
  }

  private registerEventHandlers() {
    this.socketCLient.on('connect', () => {
      console.log('Connected to gateway');
    });
    this.socketCLient.on('disconnect', () => {
      console.log('Disconnected from gateway');
    });
  }
}
