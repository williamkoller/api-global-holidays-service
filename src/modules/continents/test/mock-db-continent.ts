import { mockContinents } from './mock-continent';
import { ContinentOutputType } from '@/modules/continents/types/continent-output.type';

export class LoadContinentRepositorySpy {
  ContinentOutputType = mockContinents();

  async loadAll(): Promise<ContinentOutputType[]> {
    return this.ContinentOutputType;
  }
}
