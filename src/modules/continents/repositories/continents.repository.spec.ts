import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { AddContinentDto } from '../dtos/add-continent/add-continent.dto';
import { ContinentsRepository } from './continents.repository';

describe('ContinentRepository', () => {
  let continentRepository: ContinentsRepository;
  let mockData: AddContinentDto;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContinentsRepository],
    }).compile();

    continentRepository =
      module.get<ContinentsRepository>(ContinentsRepository);

    mockData = {
      name: 'America',
      territorialExtension: 30198835,
      totalCountries: 53,
      population: 1100000000,
      demographicDensity: 34,
      urbanPopulation: 40,
    } as ContinentEntity;

    continentRepository.save = jest.fn();
  });

  it('should be defined', (): void => {
    expect(continentRepository).toBeDefined();
  });

  it('should be called save with correct params', async (): Promise<void> => {
    continentRepository.save = jest.fn().mockReturnValue(mockData);
    await continentRepository.addContinent(mockData);
    expect(continentRepository.save).toBeCalledWith(mockData);
  });

  it('should be returns created data', async (): Promise<void> => {
    (continentRepository.save as jest.Mock).mockReturnValue(mockData);
    expect(await continentRepository.addContinent(mockData)).toEqual(mockData);
  });
});
