import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';

export const mockContinent = (): ContinentEntity => {
  return {
    id: 1,
    name: 'America',
    territorialExtension: 30198835,
    numberOfCountries: 53,
    population: 1100000000,
    demographicDensity: 34,
    urbanPopulation: 40,
    createdAt: new Date('2021-09-29T02:08:03.658Z'),
    updatedAt: new Date('2021-09-29T02:08:03.658Z'),
  };
};

export const mockContinents = (): ContinentEntity[] => {
  return [
    {
      id: 1,
      name: 'America',
      territorialExtension: 30198835,
      numberOfCountries: 53,
      population: 1100000000,
      demographicDensity: 34,
      urbanPopulation: 40,
      createdAt: new Date('2021-09-29T02:08:03.658Z'),
      updatedAt: new Date('2021-09-29T02:08:03.658Z'),
    },
  ];
};
