import { Test, TestingModule } from '@nestjs/testing';
import { ContinentsRepository } from './continents.repository';
import {
  mockContinent,
  mockContinents,
} from '@/modules/continents/test/mock-continent';

type mockQueryType = {
  where: {
    id: number;
  };
};

describe('ContinentRepository', () => {
  let continentsRepository: ContinentsRepository;
  let mockQuery: mockQueryType;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContinentsRepository],
    }).compile();

    continentsRepository =
      module.get<ContinentsRepository>(ContinentsRepository);

    mockQuery = {
      where: {
        id: 1,
      },
    };

    continentsRepository.save = jest.fn();
    continentsRepository.create = jest.fn();
    continentsRepository.findOne = jest.fn();
    continentsRepository.find = jest.fn();
    continentsRepository.merge = jest.fn();
    continentsRepository.delete = jest.fn();
    continentsRepository.createQueryBuilder = jest.fn().mockReturnValue({
      where: jest.fn().mockReturnThis(),
      getOne: jest.fn().mockResolvedValue('África'),
    });
  });

  it('should be defined', () => {
    expect(continentsRepository).toBeDefined();
  });

  describe('addContinent()', () => {
    it('should be called save with correct params', async () => {
      continentsRepository.save = jest.fn().mockReturnValue(mockContinent());
      continentsRepository.create = jest.fn().mockReturnValue(mockContinent());
      await continentsRepository.addContinent(mockContinent());
      expect(continentsRepository.save).toBeCalledWith(mockContinent());
    });

    it('should be returns created data', async () => {
      (continentsRepository.save as jest.Mock).mockReturnValue(mockContinent());
      expect(await continentsRepository.addContinent(mockContinent())).toEqual(
        mockContinent(),
      );
    });
  });

  describe('loadByName()', () => {
    it('should be called loadByName with correct params', async () => {
      const result = await continentsRepository.loadByName('África');
      expect(result).toEqual('África');
    });
  });

  describe('createQueryBuilder()', () => {
    it('should be called continentsRepository with createQueryBuilder must be true', async () => {
      (continentsRepository.createQueryBuilder as jest.Mock).mockReturnValue(
        'continents',
      );
      expect(continentsRepository.createQueryBuilder).toBeTruthy();
    });
  });

  describe('loadById()', () => {
    it('should be called loadById with correct params', async () => {
      continentsRepository.findOne = jest.fn().mockReturnValue(1);
      await continentsRepository.loadById(1);
      expect(continentsRepository.findOne).toBeCalledWith(mockQuery);
    });
  });

  describe('loadAll()', () => {
    it('should be called loadAll with correct params', async () => {
      continentsRepository.find = jest.fn().mockReturnValue(mockContinents());
      await continentsRepository.loadAll();
      expect(await continentsRepository.find()).toEqual(mockContinents());
    });
  });

  describe('updateContinent()', () => {
    it('should be called merge with correct params', async () => {
      continentsRepository.merge = jest.fn().mockReturnValue(mockContinent());
      continentsRepository.save = jest.fn().mockReturnValue(mockContinent());
      const continent = {
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
      const continentUpdate = {
        name: 'África',
      };
      await continentsRepository.updateContinent(continent, continentUpdate);
      expect(continentsRepository.save).toBeCalledWith(continent);
    });
  });

  describe('deleteContinent()', () => {
    it('should be called delete with correct params', async () => {
      continentsRepository.delete = jest.fn().mockReturnValue(1);
      await continentsRepository.deleteContinent(1);
      expect(continentsRepository.delete).toBeCalledWith(1);
    });
  });
});
