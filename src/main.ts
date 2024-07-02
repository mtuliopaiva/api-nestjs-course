import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LogInterceptor } from './interceptors/log.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //Importando os Pipes de maneira global - class validators

  //Assom fica um interceptor global 
  app.useGlobalInterceptors(new LogInterceptor());

  await app.listen(3000);


}
bootstrap();
