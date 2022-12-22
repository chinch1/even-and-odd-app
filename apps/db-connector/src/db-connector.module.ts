import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EvenNumber, EvenNumberSchema } from '../schemas/even-number.schemas';
import { OddNumber, OddNumberSchema } from '../schemas/odd-number.schema';
import { DbConnectorController } from './db-connector.controller';
import { DbConnectorService } from './db-connector.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/even-and-odd-mongo'),
    MongooseModule.forFeature([
      { name: EvenNumber.name, schema: EvenNumberSchema },
      { name: OddNumber.name, schema: OddNumberSchema },
    ]),
  ],
  controllers: [DbConnectorController],
  providers: [DbConnectorService],
})
export class DbConnectorModule {}
