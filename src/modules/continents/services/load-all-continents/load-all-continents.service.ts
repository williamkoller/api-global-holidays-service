import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import { Injectable } from '@nestjs/common';
import { ContinentsRepository } from '../../repositories/continents.repository';

@Injectable()
export class LoadAllContinentsService {
  constructor(private readonly continentsRepo: ContinentsRepository) {}

  public async loadAll(): Promise<ContinentEntity[]> {
    return await this.continentsRepo.loadAll();
  }
}
