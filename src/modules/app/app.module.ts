import envFilename from '@/config/env-filename';
import { environments } from '@/config/environments';
import { configService } from '@/infra/typeorm/config/config.service';
import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContinentsModule } from '@/modules/continents/continents.module';
import { CountriesModule } from '../countries/countries.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: envFilename.environment,
      load: [environments],
    }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    forwardRef(() => ContinentsModule),
    forwardRef(() => CountriesModule),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
