import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { CACHE_MANAGER, Inject, OnModuleInit } from '@nestjs/common';
import { Server } from 'socket.io';
import { DbConnectorService } from '../src/db-connector.service';
import { CreateNumberDto } from '../dto/create-number.dto';
import { Cache } from 'cache-manager';

@WebSocketGateway()
export class DbConnectorGateway implements OnModuleInit {
  constructor(
    private readonly dbConnectorService: DbConnectorService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', () => {
      console.log('Gateway up');
      console.log('New client connected');
    });
  }

  @SubscribeMessage('newNumber')
  async handleNewNumber(@MessageBody() payload: CreateNumberDto) {
    console.log('New number received:', payload);
    const { type, value } = payload;

    //Setting counter inside the cache if cache is empty
    if ((await this.cacheManager.store.keys()).length === 0) {
      await this.cacheManager.set('counter', 1);
    }

    //Getting counter value
    const counter: number = await this.cacheManager.get('counter');

    //Incrementing counter value inside cache
    await this.cacheManager.set('counter', counter + 1);

    //Getting new counter value
    const newCounter: number = await this.cacheManager.get('counter');

    //Adding new number to cache
    await this.cacheManager.set(newCounter.toString(), { type, value });

    const evenNumbers: number[] = [];
    const oddNumbers: number[] = [];

    //Checking the cache keys
    const cacheKeys = await this.cacheManager.store.keys();

    if (cacheKeys.length === 11) {
      for (const key of cacheKeys) {
        if (key !== 'counter') {
          const number: any = await this.cacheManager.get(key);

          if (number.type.toLowerCase() === 'even') {
            evenNumbers.push(number.value);
          } else if (number.type.toLowerCase() === 'odd') {
            oddNumbers.push(number.value);
          }
        }
      }

      this.dbConnectorService.createEvenNumbers(evenNumbers);
      this.dbConnectorService.createOddNumbers(oddNumbers);

      await this.cacheManager.reset();
    }
  }
}
