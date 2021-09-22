import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddContinentService } from './services/add-continent/add-continent.service';
import { ContinentsController } from './controllers/continents.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContinentEntity])],
  providers: [AddContinentService],
  controllers: [ContinentsController],
})
export class ContinentsModule {}
