import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const port = process.env.PORT || 8080;
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  Logger.log(`Server is now runnig on ${port}`, 'Bootstarp');

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  await app.listen(port);
}
bootstrap();
