import { Module, CacheModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvenNumber } from '../entities/even-number.entity';
import { OddNumber } from '../entities/odd-number.entity';
import { DbConnectorController } from './db-connector.controller';
import { DbConnectorService } from './db-connector.service';
import { DbConnectorGatewayModule } from '../gateway/db-connector.gateway.module';
import { DbConnectorGateway } from '../gateway/gateway';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'even-and-odd-mongo',
      port: 27017,
      entities: [EvenNumber, OddNumber],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([EvenNumber, OddNumber]),
    DbConnectorGatewayModule,
    CacheModule.register({ ttl: 0 }),
  ],
  controllers: [DbConnectorController],
  providers: [DbConnectorService, DbConnectorGateway],
})
export class DbConnectorModule {}
