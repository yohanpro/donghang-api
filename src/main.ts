import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './filters/httpException.filter';
import cookieParser from 'cookie-parser';
import session from 'express-session';

declare const module: any;

const port = process.env.PORT || 8080;

console.log('!@!@Port: ', port);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  app.use(cookieParser());
  app.use(
    session({
      resave: false,
      secure: false,
      secret: 'abc',
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
      },
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  const config = new DocumentBuilder()
    .setTitle('동행 API 문서')
    .setDescription('동행 API 문서')
    .setVersion('1.0')
    .addTag('동행')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  Logger.log(`Server is now runnig on ${port}`, 'Bootstarp');

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  console.log('app.listen: ', port);
  await app.listen(port);
}
bootstrap();
