import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { AddContinentDto } from '../dtos/add-continent/add-continent.dto';
import { ContinentsRepository } from './continents.repository';

describe('ContinentRepository', () => {
  let continentsRepository: ContinentsRepository;
  let mockData: AddContinentDto;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContinentsRepository],
    }).compile();

    continentsRepository =
      module.get<ContinentsRepository>(ContinentsRepository);

    mockData = {
      name: 'America',
      territorialExtension: 30198835,
      totalCountries: 53,
      population: 1100000000,
      demographicDensity: 34,
      urbanPopulation: 40,
    } as ContinentEntity;

    continentsRepository.save = jest.fn();
    continentsRepository.createQueryBuilder = jest.fn().mockReturnValue({
      where: jest.fn().mockReturnThis(),
      getOne: jest.fn().mockResolvedValue('África'),
    });
  });

  it('should be defined', (): void => {
    expect(continentsRepository).toBeDefined();
  });

  it('should be called save with correct params', async (): Promise<void> => {
    continentsRepository.save = jest.fn().mockReturnValue(mockData);
    await continentsRepository.addContinent(mockData);
    expect(continentsRepository.save).toBeCalledWith(mockData);
  });

  it('should be returns created data', async (): Promise<void> => {
    (continentsRepository.save as jest.Mock).mockReturnValue(mockData);
    expect(await continentsRepository.addContinent(mockData)).toEqual(mockData);
  });

  it('should be called loadByName with correct params', async (): Promise<void> => {
    const result = await continentsRepository.loadByName('África');
    expect(result).toEqual('África');
  });

  it('should be called continentsRepository with createQueryBuilder must be true', async (): Promise<void> => {
    (continentsRepository.createQueryBuilder as jest.Mock).mockReturnValue(
      'continents',
    );
    expect(continentsRepository.createQueryBuilder).toBeTruthy();
  });
});
