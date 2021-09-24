import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/modules/app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  const logger = new Logger('Main');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    allowedHeaders: '*',
    exposedHeaders: '*',
  });

  app.setGlobalPrefix('api');

  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<string>('port');

  await app.listen(port, () =>
    logger.log(`Running 🔥 in ${config.get<string>('nodeEnv')} mode `),
  );
}
bootstrap();
