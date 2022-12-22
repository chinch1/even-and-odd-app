import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvenNumber } from '../entities/even-number.entity';
import { OddNumber } from '../entities/odd-number.entity';
import { DbConnectorController } from './db-connector.controller';
import { DbConnectorService } from './db-connector.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'test',
      port: 27017,
      entities: [EvenNumber, OddNumber],
      useUnifiedTopology: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([EvenNumber, OddNumber]),
  ],
  controllers: [DbConnectorController],
  providers: [DbConnectorService],
})
export class DbConnectorModule {}
