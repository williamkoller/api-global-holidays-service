import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddContinentService } from './services/add-continent/add-continent.service';

@Module({
  imports: [TypeOrmModule.forFeature([ContinentEntity])],
  providers: [AddContinentService],
})
export class ContinentsModule {}
