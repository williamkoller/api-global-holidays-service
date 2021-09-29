import { datatype, random, date } from 'faker';
import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';

export const mockContinent = (): ContinentEntity => {
  return {
    id: datatype.number(),
    name: random.word(),
    demographicDensity: datatype.float(),
    numberOfCountries: datatype.number(),
    population: datatype.number(),
    territorialExtension: datatype.number(),
    urbanPopulation: datatype.number(),
    createdAt: date.recent(),
    updatedAt: date.recent(),
  };
};

export const mockContinents = (): ContinentEntity[] => [
  mockContinent(),
  mockContinent(),
];
