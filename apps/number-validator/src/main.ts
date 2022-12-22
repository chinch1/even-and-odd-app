import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NumberValidatorModule } from './number-validator.module';

async function bootstrap() {
  const app = await NestFactory.create(NumberValidatorModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
