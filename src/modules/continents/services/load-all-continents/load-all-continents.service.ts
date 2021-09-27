import { Injectable } from '@nestjs/common';
import { ContinentsRepository } from '@/modules/continents/repositories/continents.repository';
import { continentsTransform } from '@/modules/continents/transform/continent.transform';
import { ContinentOutputType } from '@/modules/continents/types/continent-output.type';

@Injectable()
export class LoadAllContinentsService {
  constructor(private readonly continentsRepo: ContinentsRepository) {}

  public async loadAll(): Promise<ContinentOutputType[]> {
    const continents = await this.continentsRepo.loadAll();
    return continentsTransform(continents);
  }
}
