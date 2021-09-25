import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddContinentService } from './services/add-continent/add-continent.service';
import { ContinentsController } from './controllers/continents.controller';
import { ContinentsRepository } from './repositories/continents.repository';
import { LoadAllContinentsService } from './services/load-all-continents/load-all-continents.service';

@Module({
  imports: [TypeOrmModule.forFeature([ContinentEntity, ContinentsRepository])],
  providers: [AddContinentService, LoadAllContinentsService],
  controllers: [ContinentsController],
})
export class ContinentsModule {}
