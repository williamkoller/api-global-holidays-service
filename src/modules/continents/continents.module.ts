import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ContinentEntity])],
})
export class ContinentsModule {}
