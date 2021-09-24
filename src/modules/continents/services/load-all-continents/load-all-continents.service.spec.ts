import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ContinentsRepository } from '../../repositories/continents.repository';
import { LoadAllContinentsService } from './load-all-continents.service';

describe('LoadAllContinents', () => {
  let service: LoadAllContinentsService;
  let continentsRepository: ContinentsRepository;

  beforeEach(async () => {
    const continentsServiceMock = {
      addContinent: jest.fn(),
      loadByName: jest.fn(),
      loadAll: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoadAllContinentsService,
        {
          provide: ContinentsRepository,
          useFactory: () => continentsServiceMock,
        },
      ],
    }).compile();

    service = module.get<LoadAllContinentsService>(LoadAllContinentsService);
    continentsRepository =
      module.get<ContinentsRepository>(ContinentsRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be throw if repository throw', async () => {
    (continentsRepository.loadAll as jest.Mock).mockReturnValue(
      new BadRequestException(),
    );
    await expect(service.loadAll).rejects.toThrow(new BadRequestException());
  });
});
