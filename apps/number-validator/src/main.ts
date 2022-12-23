import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NumberValidatorModule } from './number-validator.module';

async function bootstrap() {
  const app = await NestFactory.create(NumberValidatorModule);
  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle('Number-Validator API')
    .setDescription(
      'Microservice used for receiving numbers,validating them and finally sending them to the db-connector microservice',
    )
    .setVersion('1.0')
    .addTag('even-and-odd-db-connector')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
