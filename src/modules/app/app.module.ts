import envFilename from '@/config/env-filename';
import { environments } from '@/config/environments';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: envFilename.environment,
      load: [environments],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
