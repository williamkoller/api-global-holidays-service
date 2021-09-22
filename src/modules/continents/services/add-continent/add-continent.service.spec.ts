import { InternalServerErrorException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ContinentsRepository } from '../../repositories/continents.repository';
import { AddContinentService } from './add-continent.service';

describe('AddContinentService', () => {
  let addContinentService: AddContinentService;
  let continentsRepository: ContinentsRepository;
  let mockInvalid;

  beforeEach(async () => {
    const continentsRepositoryMock = {
      addContinent: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AddContinentService,
        {
          provide: ContinentsRepository,
          useFactory: () => continentsRepositoryMock,
        },
      ],
    }).compile();

    mockInvalid = {
      name: 'INVALID',
    };

    addContinentService = module.get<AddContinentService>(AddContinentService);
    continentsRepository =
      module.get<ContinentsRepository>(ContinentsRepository);
  });

  it('should be defined', () => {
    expect(addContinentService).toBeDefined();
  });

  describe('addContinent()', () => {
    it('should be throw if repository throw', async () => {
      (continentsRepository.addContinent as jest.Mock).mockRejectedValue(
        new InternalServerErrorException(),
      );
      await expect(
        addContinentService.addContinent(mockInvalid),
      ).rejects.toThrow(new InternalServerErrorException());
    });
  });
});
