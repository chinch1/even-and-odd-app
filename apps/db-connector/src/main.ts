import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DbConnectorModule } from './db-connector.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(DbConnectorModule);
  app.useGlobalPipes(new ValidationPipe());
  const options = new DocumentBuilder()
    .setTitle('DB-Connector API')
    .setDescription('Microservice used for interacting with the database')
    .setVersion('1.0')
    .addTag('even-and-odd-db-connector')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
