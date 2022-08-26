import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const enableSwagger = (app: INestApplication, path = 'api') => {
  const config = new DocumentBuilder()
    .setTitle('API - Prisma And NestJS')
    .setDescription('Api for studying Prisma with NestJS')
    .setVersion('1.0')
    .addTag('user')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
