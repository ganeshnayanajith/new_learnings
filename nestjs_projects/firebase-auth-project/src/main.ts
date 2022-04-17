import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('App');
  await app.listen(4000);
  logger.log('Application started on port 4000');
}
bootstrap();
