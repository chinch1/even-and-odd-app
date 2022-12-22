import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DbConnectorModule } from './db-connector.module';

async function bootstrap() {
  const app = await NestFactory.create(DbConnectorModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
