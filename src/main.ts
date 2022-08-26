import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { enableSwagger } from './swagger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  enableSwagger(app);
  await app.listen(3000);
}
bootstrap();
