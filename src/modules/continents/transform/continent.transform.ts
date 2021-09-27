import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import { ContinentOutputType } from '@/modules/continents/types/continent-output.type';

export const continentsTransform = (
  continents: ContinentEntity[],
): ContinentOutputType[] => {
  return continents.map((continent) => ({
    id: continent.id,
    name: continent.name,
    demographicDensity: continent.demographicDensity,
    numberOfCountries: continent.numberOfCountries,
    population: continent.population,
    territorialExtension: continent.territorialExtension,
    urbanPopulation: continent.urbanPopulation,
  }));
};
